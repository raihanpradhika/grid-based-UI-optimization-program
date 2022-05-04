let navigation = {
    element : {
        placementArea : {
            0: {
                coord: [3,5,5,11],
                neighbors: [1,2]
            },
            1: {
                coord: [5,3,9,6],
                neighbors: [0,2,3]
            }
        },
        designList : {
            0 : { //hamburger (horizontal text-aligned sidebar)
                divText : '<div class="page-sidebar-wrapper">'+
                            '<div class="row">'+
                                '<div class="col-3">'+
                                    '<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">'+
                                        '<a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home">Home</a>'+
                                        '<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-manajemen">Manajemen</a>'+
                                        '<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-upload">Upload</a>'+
                                        '<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-monitoring">Monitoring</a>'+
                                        '<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-master-data">Master Data</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>',
                divCoord : []
            },
            1 : { //vertical text-aligned sidebar
                divText : '<div class="page-sidebar-wrapper">'+
                            '<div class="row">'+
                                '<div class="col-3">'+
                                    '<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">'+
                                        '<a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home">Home</a>'+
                                        '<a class="nav-link" id="v-pills-manajemen-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-manajemen">Manajemen</a>'+
                                        '<a class="nav-link" id="v-pills-upload-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-upload">Upload</a>'+
                                        '<a class="nav-link" id="v-pills-monitoring-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-monitoring">Monitoring</a>'+
                                        '<a class="nav-link" id="v-pills-master-data-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-master-data">Master Data</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>',
                divCoord : []
            },
            2 : { //navigation bar (horizontal)
                divText : '<nav class="navbar fixed navbar-expand-lg navbar-light bg-light">'+
                            '<a class="navbar-brand" href="#">Navbar</a>'+
                            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">'+
                                '<span class="navbar-toggler-icon"></span>'+
                            '</button>'+
                            '<div class="collapse navbar-collapse" id="navbarNav">'+
                                '<ul class="navbar-nav">'+
                                    '<li class="nav-item active">'+
                                        '<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>'+
                                    '</li>'+
                                    '<li class="nav-item">'+
                                        '<a class="nav-link" href="#">Manajemen</a>'+
                                    '</li>'+
                                   '<li class="nav-item">'+
                                        '<a class="nav-link" href="#">Upload</a>'+
                                    '</li>'+
                                    '<li class="nav-item">'+
                                        '<a class="nav-link" href="#">Monitoring</a>'+
                                    '</li>'+
                                    '<li class="nav-item">'+
                                        '<a class="nav-link" href="#">Master Data</a>'+
                                    '</li>'+
                                '</ul>'+
                            '</div>'+
                        '</nav>',
                divCoord : []
            },
            3 : {
                divText : '',
                divCoord : []
            },
            4 : {
                divText : '',
                divCoord : []
            }
        }
    }
}