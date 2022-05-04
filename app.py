from flask import Flask, render_template, request, jsonify
import json
import math
import numpy as np, random, operator, pandas as pd, matplotlib.pyplot as plt
from random import uniform, sample

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def show_elements():
    if request.method == 'POST':
        pages = request.get_json()
        pageContent = pages[0] #home
        elements = list(pageContent.values())
        #elemContent = elements[0]
        mainElem = []
        for i in elements[0].values():
            mainElem.append(list(i["designList"].values())[0])
        initTime = Fitness(mainElem).klm()

        result = {}
        for j in range(len(pages)):
            elem = pages[j]
            res = ElementPlacement(elem).chromosome()
            a=list(res)
            #res = abc(elements)
            #result.append(res)
            result.update({j: a})
        return result
    elif request.method == 'GET':
        return render_template('main.html')

""" def listToDict(a):
    it = iter(a)
    res_dct = dict(zip(it, it))
    return res_dct """

""" def abc(ddd):
    first_key = list(ddd)[1] #'menus'
    first_val = list(ddd.values())[1] #{'placementArea': [[...], [...]], 'designList': {'0': {...}}}
    elem_len = len(list(ddd.values())[1]) #2
    www = {}
    www[list(ddd)[1]] = "red"
    hhh = []
    for i in range(len(ddd)): #2
        asd = []
        fff = list(ddd.values())[i] #isi dari filters (placementArea dan designList)
        for j in fff["placementArea"]:
            x = random.uniform(j[0], j[2])
            y = random.uniform(j[1], j[3])
            asd.append([x, y])
        hhh.append(asd)
    return hhh """

# hasil inner-klm untuk tiap element (didapat di perhitungan fitness algoritma genetika) disiman di var temp

def coordinate_translation(x, x1, xn , y, y1, yn): #digunakan untuk fitts law
    x1n = (x1 - x) + xn
    y1n = (y1 - y) + yn
    return x1n, y1n

def edge_translation(edges, center, new_center):
    edges_distance = [center[0]-edges[0], center[1]-edges[1], edges[2]-center[0], edges[3]-center[1]] #x1,y1 distance & x4,y4 distance
    x1 = new_center[0]-edges_distance[0]
    y1 = new_center[1]-edges_distance[1]
    x2 = new_center[0]+edges_distance[2]
    y2 = new_center[1]+edges_distance[3]
    new_edges = [[x1, y1], [x1, y2], [x2, y2], [x2, y1]]

    return new_edges

def sweep_line(placementArea):
    
    return

class ElementPlacement:
    def __init__(self, elements):
        self.elements = elements
        self.chosen_elements = {}
        self.chosen_coord = []
        self.result = {}
        self.center = []
        self.new_center = []

    def chooseElement(self):
        for i in range(len(self.elements)): #2           
            elem = list(self.elements.values())[i] #list elemen pada page home (filter dan menu)
            for elem_content in elem.values(): #isi dari filters (placementArea dan designList)
                elem_list = []
                for j in elem_content["designList"].values():
                    elem_text = j["divText"]
                    elem_list.append(elem_text)
                self.chosen_elements.update(random.sample(elem_list, 1))

        return self.chosen_elements

    def chooseCoord(self):
        for i in range(len(self.elements)): #2: filters, menus
            random_coord_each = []
            elem = list(self.elements.values())[i]
            
            chosen_elem = self.chosen_elements[i]
            chosen_elem_center = chosen_elem[0]["divCoord"][0] #center: x,y
            self.center.append(chosen_elem_center)
            chosen_elem_edges = [0, 0, chosen_elem_center[0]*2, chosen_elem_center[1]*2] #edges: x1,y1,x4,y4
            indeks = 0
            for j in list(elem["placementArea"].values()):
                j_coord = j["coord"]
                j_neighbors = j["neighbors"]
                xn = random.uniform(j_coord[0], j_coord[2])
                yn = random.uniform(j_coord[1], j_coord[3])
                new_center = [xn, yn]
                if i == 0 and indeks == 0:
                    self.new_center = [xn, yn]
                new_edges = edge_translation(chosen_elem_edges, chosen_elem_center, new_center)
                idx_k = 0 #apabila keempat k muat di placementArea, maka random_coord_each.append(new_center)
                for k in new_edges:
                    if (k[0] >= j_coord[0] and k[0] <= j_coord[2]) or (k[1] >= j_coord[1] and k[1] <= j_coord[3]): #jika muat dalam placementArea
                        idx_k += 1
                        if idx_k == len(new_edges):
                            random_coord_each.append(new_center)
                            break
                    else: #jika tidak muat di placementArea (keluar garis)
                        idx_l = 0
                        for l in j_neighbors:
                            a = list(elem["placementArea"].values())[l]
                            b = a["coord"] #isi berupa coordinate (x1,y1,x4,y4) dari area neighbor ke-l
                            if (k[0] >= b[0] and k[0] <= b[2]) or (k[1] >= b[1] and k[1] <= b[3]): #jika muat di area neighbor ke-l
                                idx_k += 1
                                if idx_k == len(new_edges):
                                    random_coord_each.append(new_center)
                                    break
                            else: #jika nggak muat di area neighbor ke-l
                                idx_l += 1
                                continue
                        if idx_l == len(j_neighbors): #jika index sudah == jumlah neighbors
                            break 
                #random_coord_each.append(new_center)            
                indeks += 1
            self.chosen_coord.append(random.sample(random_coord_each, 1)) #untuk coordinate pada placement area
            #self.new_center = random.sample(self.chosen_coord, 1)

        return self.chosen_coord, self.new_center, self.center

    def chromosome(self):
        self.chooseElement()
        self.chooseCoord()
        for i in range(len(self.elements)):
            self.result.update({list(self.elements)[i]: {}})
            self.result[list(self.elements)[i]].update({"text": self.chosen_elements[i]})
            self.result[list(self.elements)[i]].update({"coord": self.chosen_coord[i]})
        
        return self.center, self.new_center

def initialPopulation(popSize, elements):
    population = []

    for i in range(0, popSize):
        population.append(ElementPlacement(elements).chromosome())
    return population

def rankRoutes(population):
    fitnessResults = {}
    for i in range(0,len(population)):
        fitnessResults[i] = Fitness(population[i]).routeFitness()
    return sorted(fitnessResults.items(), key = operator.itemgetter(1), reverse = True)


def selection(popRanked, eliteSize):
    selectionResults = []
    df = pd.DataFrame(np.array(popRanked), columns=["Index","Fitness"])
    df['cum_sum'] = df.Fitness.cumsum()
    df['cum_perc'] = 100*df.cum_sum/df.Fitness.sum()
    
    for i in range(0, eliteSize):
        selectionResults.append(popRanked[i][0])
    for i in range(0, len(popRanked) - eliteSize):
        pick = 100*random.random()
        for i in range(0, len(popRanked)):
            if pick <= df.iat[i,3]:
                selectionResults.append(popRanked[i][0])
                break
    return selectionResults

def matingPool(population, selectionResults):
    matingpool = []
    for i in range(0, len(selectionResults)):
        index = selectionResults[i]
        matingpool.append(population[index])
    return matingpool

def breed(parent1, parent2):
    child = []
    childP1 = []
    childP2 = []
    
    geneA = int(random.random() * len(parent1))
    geneB = int(random.random() * len(parent1))
    
    startGene = min(geneA, geneB)
    endGene = max(geneA, geneB)

    for i in range(startGene, endGene):
        childP1.append(parent1[i])
        
    childP2 = [item for item in parent2 if item not in childP1]

    child = childP1 + childP2
    return child

def breedPopulation(matingpool, eliteSize):
    children = []
    length = len(matingpool) - eliteSize
    pool = random.sample(matingpool, len(matingpool))

    for i in range(0,eliteSize):
        children.append(matingpool[i])
    
    for i in range(0, length):
        child = breed(pool[i], pool[len(matingpool)-i-1])
        children.append(child)
    return children

def mutate(individual, mutationRate):
    for swapped in range(len(individual)):
        if(random.random() < mutationRate):
            swapWith = int(random.random() * len(individual))
            
            city1 = individual[swapped]
            city2 = individual[swapWith]
            
            individual[swapped] = city2
            individual[swapWith] = city1
    return individual

def mutatePopulation(population, mutationRate):
    mutatedPop = []
    
    for ind in range(0, len(population)):
        mutatedInd = mutate(population[ind], mutationRate)
        mutatedPop.append(mutatedInd)
    return mutatedPop

def nextGeneration(currentGen, eliteSize, mutationRate):
    popRanked = rankRoutes(currentGen)
    selectionResults = selection(popRanked, eliteSize)
    matingpool = matingPool(currentGen, selectionResults)
    children = breedPopulation(matingpool, eliteSize)
    nextGeneration = mutatePopulation(children, mutationRate)
    return nextGeneration

def geneticAlgorithm(population, popSize, eliteSize, mutationRate, generations):
    pop = initialPopulation(popSize, population)
    print("Initial distance: " + str(1 / rankRoutes(pop)[0][1]))
    
    for i in range(0, generations):
        pop = nextGeneration(pop, eliteSize, mutationRate)
    
    print("Final distance: " + str(1 / rankRoutes(pop)[0][1]))
    bestRouteIndex = rankRoutes(pop)[0][0]
    bestRoute = pop[bestRouteIndex]
    return bestRoute

class Fitness:
    def __init__(self, elemDesign):
        self.elemDesign = elemDesign
    
    def fittsLaw(self, coord, initPoint): #fitts law mackenzie
        a = coord['center'][0] - initPoint[0]
        b = coord['center'][1] - initPoint[1]
        distance = math.hypot(a, b)
        width = coord['size'][0]
        intercept = 0.028
        slope = 0.112

        x = (distance / width) + 1
        movement_time = intercept + slope * math.log(x, 2)
        return movement_time

    def klm(self):
        k = 0.28 #press or release keyboard button
        b = 0.10 #press or release mouse button
        bb = 0.20 #press and release mouse button
        h = 0.40 #homing (hand movement)
        m = 1.20 #mentally preparing
        p = 1.1 #mouse pointing
        f = 0 #pointing (fitts' law)
        movement_times = []

        for elem in self.elemDesign:
            elemKLM = 0 #nilai klm pada elemen
            initPoint = [0,0]
            for divCoord in elem['divCoord']:
                divKLM = 0 #nilai klm pada tiap tombol / div
                for divCoordProp in divCoord:
                    klm = divCoord[divCoordProp]['KLM']
                    coord = divCoord[divCoordProp]['coord']
                    for a in klm:
                        if a == 'p':
                            divKLM += self.fittsLaw(coord, initPoint)
                            initPoint = coord['center']
                        else:
                            divKLM += eval(a)
                    elemKLM += divKLM
                movement_times.append(elemKLM)

        return movement_times