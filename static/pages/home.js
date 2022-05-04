let home = {
    filters : {
        placementArea : {
            0: {
                coord: [3,5,5,11],
                neighbors: [1,2]
            }, 
            1: {
                coord: [5,3,9,6],
                neighbors: [0,2,3]
            }, 
            2: {
                coord: [5,6,8,8],
                neighbors: [0,1,3]
            }, 
            3: {
                coord: [8,6,10,14],
                neighbors: [1,2]
            }, 
            4: {
                coord: [0,13,1,21],
                neighbors: [5,14]
            }, 
            5: {
                coord: [1,13,2,15],
                neighbors: [4,6]
            }, 
            6: {
                coord: [2,13,3,16],
                neighbors: [5,7]
            }, 
            7: {
                coord: [3,15,4,18],
                neighbors: [6,8]
            }, 
            8: {
                coord: [4,16,7,18],
                neighbors: [7,9]
            }, 
            9: {
                coord: [6,18,7,22],
                neighbors: [8,10]
            }, 
            10: {
                coord: [5,19,6,22],
                neighbors: [9,11]
            }, 
            11: {
                coord: [4,20,5,23],
                neighbors: [10,12]
            }, 
            12: {
                coord: [3,19,4,23],
                neighbors: [11,13]
            }, 
            13: {
                coord: [2,18,3,21],
                neighbors: [12,14]
            }, 
            14: {
                coord: [1,17,2,19],
                neighbors: [4,13]
            },
        },
        designList : {
            0 : {
                divText : '<div class="portlet light bordered">'+
                            '<div class="portlet-title">'+
                                '<div class="caption font-red-sunglo">'+
                                    '<i class="icon-settings font-red-sunglo"></i>'+
                                    '<span class="caption-subject bold uppercase">Filter</span>'+
                                '</div>'+
                                '<div class="actions">'+
                                    '<div class="btn-group" data-getcoord="4 home-refreshBtn f,bb">'+
                                        '<button class="btn btn-mini btn-success btn-generate"><i class="icon-refresh"></i> Refresh</button>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="portlet-body form">'+
                                '<form action="#" class="form-horizontal" id="form-application" method="post" onsubmit="return false">'+
                                    '<div class="form-body">'+
                                        '<div class="col-md-6">'+
                                            '<div class="portlet-body form">'+
                                                '<div class="row">'+                                                  
                                                    '<div class="col-md-10">'+
                                                        '<div class="form-group">'+
                                                            '<label class="control-label col-md-4">Workshop </label>'+
                                                            '<div class="col-md-8">'+
                                                                '<select id="filter_dashboard_workshop" name="filter_dashboard_workshop" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                                    '<option value="0">--All Workshop--</option>'+
                                                                    '<option value="1143">################</option>'+	
                                                                '</select>'+
                                                                '<span class="select2 select2-container select2-container--bootstrap" data-getcoord="0 home-workshopFormFilter f,bb,m,h,k" dir="ltr" style="width: auto;">'+
                                                                    '<span class="selection">'+
                                                                        '<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_dashboard_workshop-container">'+
                                                                            '<span class="select2-selection__rendered" id="select2-filter_dashboard_workshop-container" title="--All Workshop--">'+
                                                                                '<span class="select2-selection__clear">×</span>'+
                                                                                '--All Workshop--'+
                                                                            '</span>'+
                                                                            '<span class="select2-selection__arrow" role="presentation">'+
                                                                                '<b role="presentation"></b>'+
                                                                            '</span>'+
                                                                        '</span>'+
                                                                    '</span>'+
                                                                    '<span class="dropdown-wrapper" aria-hidden="true"></span>'+
                                                                '</span>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                    '<div class="row">'+                                          
                                                        '<div class="col-md-10">'+
                                                            '<div class="form-group">'+
                                                                '<label class="control-label col-md-4">Nomor Polisi </label>'+
                                                                '<div class="col-md-8">'+
                                                                    '<div class="input-icon right" data-getcoord="1 home-inputNopolFilter f,bb,m,h,k">'+
                                                                        '<i class="fa"></i>'+
                                                                        '<input placeholder="Nomor Polisi" type="text" name="no_polisi" class="form-control">'+
                                                                    '</div>'+
                                                                '</div>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="col-md-6">'+
                                            '<div class="portlet-body form">'+
                                                '<div class="row">'+
                                                    '<div class="col-md-10">'+
                                                        '<div class="form-group">'+
                                                            '<label class="control-label col-md-4">Asuransi </label>'+
                                                            '<div class="col-md-8">'+
                                                                '<select id="filter_dashboard_company" name="filter_dashboard_company" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                                    '<option value="0">--All Asuransi--</option>'+
                                                                    '<option value="9001" selected="selected">################</option>'+										
                                                                '</select>'+
                                                                '<span class="select2 select2-container select2-container--bootstrap" data-getcoord="2 home-asuransiFormFilter f,bb,m,h,k" dir="ltr" style="width: auto;">'+
                                                                    '<span class="selection">'+
                                                                        '<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_dashboard_company-container">'+
                                                                            '<span class="select2-selection__rendered" id="select2-filter_dashboard_company-container" title="PT ASURANSI ADIRA DINAMIKA, Tbk">'+
                                                                                '<span class="select2-selection__clear">×</span>'+
                                                                                '################'+
                                                                            '</span>'+
                                                                            '<span class="select2-selection__arrow" role="presentation">'+
                                                                                '<b role="presentation"></b>'+
                                                                            '</span>'+
                                                                        '</span>'+
                                                                    '</span>'+
                                                                    '<span class="dropdown-wrapper" aria-hidden="true"></span>'+
                                                                '</span>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                    '<div class="row">'+                                                
                                                        '<div class="col-md-10">'+
                                                            '<div class="form-group">'+
                                                                '<label class="control-label col-md-4">Ticket Number </label>'+
                                                                '<div class="col-md-8">'+
                                                                    '<div class="input-icon right" data-getcoord="3 home-inputTicketNumberFilter f,bb,m,h,k">'+
                                                                        '<i class="fa"></i>'+
                                                                        '<input placeholder="Ticket Number" type="text" name="ticket_number" class="form-control">'+
                                                                    '</div>'+
                                                                '</div>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                    '<div class="col-md-10 hide">'+
                                                        '<div class="form-group">'+
                                                            '<label class="control-label col-md-4">Tanggal</label>'+
                                                            '<div class="col-md-8">'+
                                                                '<select id="filter_pencarian_tglhome" name="filter_pencarian_tglhome" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                                    '<option value=""></option>'+
                                                                    '<option value="1">################</option>'+											
                                                                '</select>'+
                                                                '<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;">'+
                                                                    '<span class="selection">'+
                                                                        '<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_pencarian_tglhome-container">'+
                                                                            '<span class="select2-selection__rendered" id="select2-filter_pencarian_tglhome-container">'+
                                                                                '<span class="select2-selection__placeholder">Select</span>'+
                                                                            '</span>'+
                                                                            '<span class="select2-selection__arrow" role="presentation">'+
                                                                                '<b role="presentation"></b>'+
                                                                            '</span>'+
                                                                        '</span>'+
                                                                    '</span>'+
                                                                    '<span class="dropdown-wrapper" aria-hidden="true"></span>'+
                                                                '</span>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                    '<div class="col-md-10 hide">'+
                                                        '<div class="form-group">'+
                                                            '<label class="control-label col-md-4"></label>'+
                                                            '<div class="col-md-1">'+
                                                                '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'+
                                                                    '<input type="checkbox" class="span0_5" id="checked_spkdate_start" name="checked_spkdate_start">'+
                                                                    '<span></span>'+
                                                                '</label>'+
                                                            '</div>'+
                                                            '<div class="col-md-6">'+
                                                                '<div id="divstartdate" class="input-group date date-picker" data-date-format="dd-mm-yyyy" data-date-start-date="-155d" data-date-end-date="+0d" style="pointer-events: none; cursor: default;">'+
                                                                    '<input type="text" id="start_filter_spkdate" name="start_filter_spkdate" class="form-control" value="15-06-2021" readonly="">'+
                                                                    '<span class="input-group-btn">'+
                                                                        '<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
                                                                    '</span>'+
                                                                '</div>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                    '<div class="col-md-10 hide">'+
                                                        '<div class="form-group">'+
                                                            '<label class="control-label col-md-4"></label>'+
                                                            '<div class="col-md-1">'+
                                                                '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'+
                                                                        '<input type="checkbox" class="span0_5" id="checked_spkdate_end" name="checked_spkdate_end">'+
                                                                        '<span></span>'+
                                                                    '</label>'+
                                                            '</div>'+
                                                            '<div cla=ss="col-md-6">'+
                                                                '<div class="input-group date date-picker" data-date-format="dd-mm-yyyy" data-date-end-date="+0d">'+
                                                                    '<input type="text" id="end_filter_spkdate" name="end_filter_spkdate" class="form-control" value="15-06-2021" readonly="">'+
                                                                    '<span class="input-group-btn">'+
                                                                        '<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
                                                                    '</span>'+
                                                                '</div>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="form-actions noborder"></div>'+
                                '</form>'+
                            '</div>'+
                        '</div>',
                divCoord : [] //diisi secara otomatis, isinya koordinat x,y
            },
            1 : {
                divText :   '<div class="card">' +
                                '<div class="card-header">FILTER' +
                                    '<a href="#" class="btn btn-primary" data-getcoord="4 home-refreshBtn f,bb">Refresh</a>' +                                 
                                '</div>' +
                                '<div class="card-body">' +
                                    '<div class="form-group">' +
                                        '<label for="exampleFormControlSelect1">Workshop</label>' +
                                        '<select class="form-control" data-getcoord="0 home-workshopFormFilter f,bb,m,h,k">' +
                                            '<option data-getcoord1="wks1">Workshop 1</option>' +
                                            '<option data-getcoord1="wks2">Workshop 2</option>' +
                                            '<option data-getcoord1="wks3">Workshop 3</option>' +
                                        '</select>' +
                                    '</div>' +
                                    '<div class="form-group">' +
                                        '<label for="exampleFormControlInput1">Nomor Polisi</label>' +
                                        '<input type="email" class="form-control" data-getcoord="1 home-inputNopolFilter f,bb,m,h,k" placeholder="Nomor Polisi">' +
                                    '</div>' +
                                    '<div class="form-group">' +
                                        '<label for="exampleFormControlSelect1">Asuransi</label>' +
                                        '<select class="form-control" data-getcoord="2 home-asuransiFormFilter f,bb,m,h,k">' +
                                            '<option data-getcoord1="wks1">################</option>' +
                                        '</select>' +
                                    '</div>' +
                                    '<div class="SSSform-group">' +
                                        '<label for="exampleFormControlInput1">Ticket Number</label>' +
                                        '<input type="email" class="form-control" data-getcoord="3 home-inputTicketNumberFilter f,bb,m,h,k" placeholder="Ticket Number">' +
                                    '</div>' +
                                '</div>' +
                            '</div>',
                divCoord : []
            }
        }   
    },
    menus : {
        placementArea : {
            0: {
                coord: [1,24,8,30], 
                neighbors: [1]
            },
            1: {
                coord: [8,21,10,30],
                neighbors: [0]
            }
        },
        designList : {
            0 : {
                divText : '<div class="portlet light bordered bengkel">'+
                            '<div class="portlet-title">'+
                            '<div class="caption font-red-sunglo">'+
                                '<i class="icon-settings font-red-sunglo"></i>'+
                                '<span class="caption-subject bold uppercase">Bengkel</span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row widget-row">'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">PREDEPLOYED</h4>'+
                                        '<div class="widget-thumb-icon bg-green-meadow dashboard predeployed" data-getcoord="0 home-predeployedWidget f,bb">'+
                                            '<span class="fa fa-external-link-square"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_predeployed" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">SPK are ready to be deployed to workshop</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">DEPLOYED</h4>'+
                                        '<div class="widget-thumb-icon bg-yellow-crusta dashboard deployed" data-getcoord="1 home-deployedWidget f,bb">'+
                                            '<span class="fa fa-sign-in"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_deployed" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">SPK are already deployed to workshop</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">################</h4>'+
                                        '<div class="widget-thumb-icon bg-yellow-crusta dashboard accepted" data-getcoord="2 home-acceptedWidget f,bb">'+
                                            '<span class="fa fa-check-square"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_accepted" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">################################</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">################</h4>'+
                                        '<div class="widget-thumb-icon bg-yellow-crusta dashboard pickup" data-getcoord1="pickupWidget">'+
                                            '<span class="fa fa-truck"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_pickup" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">################################</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                        '</div>'+
                        '<div class="row widget-row">'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">################</h4>'+
                                        '<div class="widget-thumb-icon bg-yellow-crusta dashboard unitin" data-getcoord1="unitInWidget">'+
                                            '<span class="fa fa-home"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_unitin" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">################################</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">################</h4>'+
                                        '<div class="widget-thumb-icon bg-yellow-crusta dashboard work_in_progress" data-getcoord1="workInProgressWidget">'+
                                            '<span class="fa fa-cogs"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_progress" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">################################</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">################</h4>'+
                                        '<div class="widget-thumb-icon bg-green-jungle dashboard delivered" data-getcoord1="deliveredWidget">'+
                                            '<span class="fa fa-smile-o"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_delivered" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">################################</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">################</h4>'+
                                        '<div class="widget-thumb-icon bg-red dashboard rejected" data-getcoord1="rejectedWidget">'+
                                            '<span class="fa fa-exclamation-circle"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_rejected" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">################################</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                        '</div>'+
                        '<div class="row widget-row">'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">################</h4>'+
                                        '<div class="widget-thumb-icon bg-red dashboard cancelled" data-getcoord1="cancelledWidget">'+
                                            '<span class="fa fa-times-circle-o"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_cancelled" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">################################</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">################</h4>'+
                                        '<div class="widget-thumb-icon bg-red dashboard indent" data-getcoord1="indentWidget">'+
                                            '<span class="fa fa-times-circle-o"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_indent" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">################################</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">################</h4>'+
                                        '<div class="widget-thumb-icon bg-dark dashboard terminated" data-getcoord1="terminatedWidget">'+
                                            '<span class="fa fa-minus-square"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_terminated" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">################################</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                            '<div class="col-md-3">'+
                                '<!-- BEGIN WIDGET THUMB -->'+
                                '<div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
                                    '<div class="widget-thumb-wrap">'+
                                        '<h4 class="widget-thumb-heading">################</h4>'+
                                        '<div class="widget-thumb-icon bg-dark dashboard tla" data-getcoord1="tlaWidget">'+
                                            '<span class="fa fa-ban"></span>'+
                                            '<span class="placeholder_text">Detail Click Here</span>'+
                                        '</div>'+
                                        '<div class="widget-thumb-body">'+
                                            '<div class="widget-thumb-body-stat total_tla" data-counter="counterup">000<div class="widget-thumb-title">SPK</div></div>'+
                                            '<div class="widget-thumb-subtitle">################################</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- END WIDGET THUMB -->'+
                            '</div>'+
                        '</div>'+
                    '</div>',
                divCoord : []
            },
            1 : {
                divText : '<div class="card" style="width: 18rem;">' +
                                '<div class="card-body">' +
                                    '<h5 class="card-title">Card title</h5>' +
                                    '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>' +
                                    '<a href="#" class="btn btn-primary">Go somewhere</a>' +
                                '</div>' +
                            '</div>',
                divCoord : []
            }      
        }
    }
};