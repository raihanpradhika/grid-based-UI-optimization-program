let deployed = {
    elem1 : {
        placementArea : {

        },
        designList : {
            0 : {

            }
        }
    }
}
let filter1 = '<div class="col-md-24">'+
                '<div class="portlet light bordered">'+
                    '<div class="portlet-title">'+
                        '<div class="caption font-red-sunglo">'+
                            '<i class="icon-settings font-red-sunglo"></i>'+
                            '<span class="caption-subject bold uppercase"> Filter</span>'+
                        '</div>'+
                        '<div class="actions">'+
                            '<div class="btn-group" data-getcoord="15 predeployed-eksportBtn p,bb">'+
                                '<a class="btn btn-sm green dropdown-toggle" href="javascript:;" data-toggle="dropdown"> Eksport'+
                                    '<i class="fa fa-angle-down"></i>'+
                                '</a>'+
                                '<ul class="dropdown-menu pull-right">'+
                                    '<li>'+
                                        '<a href="javascript:;" class="btn-eksport" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_notification_export/100/2">'+
                                            '<i class="fa fa-file-excel-o"></i> to Excel '+
                                        '</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="javascript:;" class="btn-eksport" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_notification_export/100/3">'+
                                            '<i class="fa fa-file"></i> to Csv '+
                                        '</a>'+
                                    '</li>'+
                                '</ul>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="portlet-body form">'+
                    '<form enctype="multipart/form-data" method="post" role="form" id="form-list-spk" onsubmit="return false">'+
                            '<div class="form-body">'+
                                '<div class="col-md-6">'+
                                    '<div class="portlet-body form">'+
                                        '<div class="row">'+
                                            '<input type="hidden" name="poststatus" value="1">'+
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Asuransi </label>'+
                                                    '<div class="col-md-8">'+
                                                        '<select name="filter_list_company" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                            '<option value="0">--All Asuransi--</option>'+
                                                            '<option value="9001" selected="selected">############</option>'+
                                                        '</select>'+
                                                        '<span class="select2 select2-container select2-container--bootstrap" data-getcoord="0 predeployed-selectAsuransi p,bb,m,h,k" dir="ltr" style="width: auto;">'+
                                                            '<span class="selection">'+
                                                                '<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_list_company-3g-container">'+
                                                                    '<span class="select2-selection__rendered" id="select2-filter_list_company-3g-container" title="########">'+
                                                                        '<span class="select2-selection__clear">×</span>########'+
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
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Workshop </label>'+
                                                    '<div class="col-md-8">'+
                                                        '<select name="filter_list_workshop" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                            '<option value="0">--All Workshop--</option>'+
                                                            '<option value="1385">#############</option>'+
                                                        '</select>'+
                                                        '<span class="select2 select2-container select2-container--bootstrap" data-getcoord="1 predeployed-inputWorkshop p,bb,m,h,k" dir="ltr" style="width: auto;">'+
                                                            '<span class="selection">'+
                                                                '<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_list_workshop-vf-container">'+
                                                                    '<span class="select2-selection__rendered" id="select2-filter_list_workshop-vf-container" title="--All Workshop--">'+
                                                                        '<span class="select2-selection__clear">×</span>--All Workshop--'+
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
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Ticket No</label>'+
                                                    '<div class="col-md-8">'+
                                                        '<div class="input-icon right" data-getcoord="2 predeployed-inputTicketNo p,bb,m,h,k">'+
                                                            '<i class="fa"></i>'+
                                                            '<input placeholder="Ticket No" type="text" class="form-control" name="filter_tiketno" value="">'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Reporter Name</label>'+
                                                    '<div class="col-md-8">'+
                                                        '<div class="input-icon right" data-getcoord="3 predeployed-inputReporterName p,bb,m,h,k">'+
                                                            '<i class="fa"></i>'+
                                                            '<input placeholder="Reporter Name" type="text" class="form-control" name="filter_reporter_name">'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Car Police No</label>'+
                                                    '<div class="col-md-8">'+
                                                        '<div class="input-icon right" data-getcoord="4 predeployed-inputCarPoliceNo p,bb,m,h,k">'+
                                                            '<i class="fa"></i>'+
                                                            '<input placeholder="Car Police No" type="text" class="form-control" name="filter_car_polisno" value="">'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Status Date</label>'+
                                                    '<div class="col-md-8">'+
                                                        '<select id="filter_pencarian_tgl" name="filter_pencarian_tgl" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                            '<option value=""></option>'+
                                                            '<option value="1">SPK DATE</option>'+
                                                            '<option value="2">DEPLOYED DATE</option>'+
                                                            '<option value="3">ACCEPTED DATE</option>'+
                                                            '<option value="4">PICK UP DATE</option>'+
                                                            '<option value="5">UNIT IN DATE</option>'+
                                                            '<option value="6">INPROGRESS DATE</option>'+
                                                            '<option value="7">DELIVERED DATE</option>'+                      
                                                        '</select>'+
                                                        '<span class="select2 select2-container select2-container--bootstrap" data-getcoord="5 predeployed-inputStatusDate p,bb,m,h,k" dir="ltr" style="width: auto;">'+
                                                            '<span class="selection">'+
                                                                '<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_pencarian_tgl-container">'+
                                                                    '<span class="select2-selection__rendered" id="select2-filter_pencarian_tgl-container">'+
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
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">From</label>'+
                                                    '<div class="col-md-1">'+
                                                        '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'+
                                                            '<input type="checkbox" class="span0_5" id="checked_spkdate_start" name="checked_spkdate_start">'+
                                                            '<span data-getcoord="6 predeployed-checkFrom p,bb,m,h,k"></span>'+
                                                        '</label>'+
                                                    '</div>'+
                                                    '<div class="col-md-6">'+
                                                        '<div class="input-group date date-picker" data-date-format="dd-mm-yyyy" data-getcoord="7 predeployed-selectFrom p,bb,m,h,k">'+
                                                            '<input type="text" name="start_spkdate" id="start_spkdate" class="form-control" value="11-07-2021" readonly="">'+
                                                            '<span class="input-group-btn">'+
                                                                '<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
                                                            '</span>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">To</label>'+
                                                    '<div class="col-md-1">'+
                                                        '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'+
                                                            '<input type="checkbox" class="span0_5" id="checked_spkdate_end" name="checked_spkdate_end">'+
                                                            '<span data-getcoord="8 predeployed-checkTo p,bb,m,h,k"></span>'+
                                                        '</label>'+
                                                    '</div>'+
                                                    '<div class="col-md-6">'+
                                                        '<div class="input-group date date-picker" data-date-format="dd-mm-yyyy" data-date-end-date="+0d" data-getcoord="9 predeployed-selectTo p,bb,m,h,k">'+
                                                            '<input type="text" name="end_spkdate" id="end_spkdate" class="form-control" value="11-07-2021" readonly="">'+
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
                                '<div class="col-md-6">'+
                                    '<div class="portlet-body form">'+
                                        '<div class="row">'+
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Last User Deploy</label>'+
                                                    '<div class="col-md-8">'+
                                                        '<div class="input-icon right" data-getcoord="10 predeployed-inputLastUserDeploy p,bb,m,h,k">'+
                                                            '<i class="fa"></i>'+
                                                            '<input placeholder="Last User Deploy" type="text" class="form-control" name="filter_lastuser_deploy">'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Policy No</label>'+
                                                    '<div class="col-md-8">'+
                                                        '<div class="input-icon right" data-getcoord="11 predeployed-inputPolicyNo p,bb,m,h,k">'+
                                                            '<i class="fa"></i>'+
                                                            '<input placeholder="Policy No" type="text" class="form-control" name="filter_policy_no">'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Claim No</label>'+
                                                    '<div class="col-md-8">'+
                                                        '<div class="input-icon right" data-getcoord="12 predeployed-inputClaimNo p,bb,m,h,k">'+
                                                            '<i class="fa"></i>'+
                                                            '<input placeholder="Claim No" type="text" class="form-control" name="filter_claim_no">'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">SPK Status</label>'+
                                                    '<div class="col-md-8">'+
                                                        '<select name="filter_spkstatus[]" class="form-control span3 select2me select2-hidden-accessible" multiple="" tabindex="-1" aria-hidden="true">'+
                                                            '<option value="">--All Status--</option>'+
                                                            '<option value="SUBMITTED">[AMC]SUBMITTED</option>'+
                                                            '<option value="PROCESSED">[AMC]PROCESSED</option>'+
                                                            '<option value="APPROVED">[AMC]APPROVED</option>'+
                                                            '<option value="REPAIRINPROGRESS">[AMC]REPAIRINPROGRESS</option>'+
                                                            '<option value="DOCUMENTNOTCOMPLETED">[AMC]DOCUMENTNOTCOMPLETED</option>'+
                                                            '<option value="DECLINED">[AMC]DECLINED</option>'+
                                                            '<option value="AMCREJECTED">[AMC]REJECTED</option>'+
                                                            '<option value="FINISHED">[AMC]FINISHED</option>'+
                                                            '<option value="PICK UP">PICK UP</option>'+
                                                            '<option value="UNIT IN">UNIT IN</option>'+
                                                            '<option value="PREDEPLOYED" selected="selected">PREDEPLOYED</option>'+
                                                            '<option value="NEW">NEW</option>'+
                                                            '<option value="ACCEPTED">ACCEPTED</option>'+
                                                            '<option value="BONGKAR">BONGKAR</option>'+
                                                            '<option value="LAS KETOK">LAS KETOK</option>'+
                                                            '<option value="DEMPUL">DEMPUL</option>'+
                                                            '<option value="EPOXY">EPOXY</option>'+
                                                            '<option value="CAT">CAT</option>'+
                                                            '<option value="POLES">POLES</option>'+
                                                            '<option value="FINISHING">FINISHING</option>'+
                                                            '<option value="WORK DONE">WORK DONE</option>'+
                                                            '<option value="DELIVERED">DELIVERED</option>'+
                                                            '<option value="REJECTED">REJECTED</option>'+
                                                            '<option value="CANCELLED">CANCELLED</option>'+
                                                            '<option value="WAITING">WAITING</option>'+
                                                            '<option value="TERMINATED">TERMINATED</option>'+
                                                            '<option value="TLA">TLA</option>'+
                                                        '</select>'+
                                                        '<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord="13 predeployed-inputSPKStatus p,bb,m,h,k">'+
                                                            '<span class="selection">'+
                                                                '<span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1">'+
                                                                    '<ul class="select2-selection__rendered">'+
                                                                        '<span class="select2-selection__clear">×</span>'+
                                                                        '<li class="select2-selection__choice" title="PREDEPLOYED">'+
                                                                            '<span class="select2-selection__choice__remove" role="presentation">×</span>PREDEPLOYED'+
                                                                        '</li>'+
                                                                        '<li class="select2-search select2-search--inline">'+
                                                                            '<input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="" style="width: 0.75em;">'+
                                                                        '</li>'+
                                                                    '</ul>'+
                                                                '</span>'+
                                                            '</span>'+
                                                            '<span class="dropdown-wrapper" aria-hidden="true"></span>'+
                                                        '</span>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-10 rejected" style="display: none;">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Reject Reason</label>'+
                                                    '<div class="col-md-8">'+
                                                        '<select name="filter_reject_reason" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                            '<option value="">--All Reject Reason--</option>'+
                                                            '<option value="Perlu SPK Tambahan">Perlu SPK Tambahan</option>'+
                                                            '<option value="SPK Belum Diterima">SPK Belum Diterima</option>'+
                                                            '<option value="Customer Tidak Bisa Dihubungi">Customer Tidak Bisa Dihubungi</option>'+
                                                            '<option value="Customer Batal Claim">Customer Batal Claim</option>'+
                                                            '<option value="Customer Pindah Bengkel">Customer Pindah Bengkel</option>'+
                                                            '<option value="Unit Belum Masuk Bengkel">Unit Belum Masuk Bengkel</option>'+
                                                            '<option value="Sparepart Problem">Sparepart Problem</option>'+
                                                            '<option value="Jenis Cat Berbeda">Jenis Cat Berbeda</option>'+
                                                            '<option value="Bengkel Full">Bengkel Full</option>'+
                                                        '</select>'+
                                                        '<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;">'+
                                                            '<span class="selection">'+
                                                                '<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_reject_reason-1r-container">'+
                                                                    '<span class="select2-selection__rendered" id="select2-filter_reject_reason-1r-container">'+
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
                                            '<div class="col-md-10">'+
                                                '<div class="form-group">'+
                                                    '<label class="control-label col-md-4">Document</label>'+
                                                    '<div class="col-md-8">'+
                                                        '<select name="filter_document_status" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                            '<option value="">--All Document--</option>'+
                                                            '<option value="COMPLETED">COMPLETED</option><option value="NOTCOMPLETED">NOT COMPLETED</option>'+                                                                 
                                                        '</select>'+
                                                        '<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord="14 predeployed-inputDocument p,bb,m,h,k">'+
                                                            '<span class="selection">'+
                                                                '<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_document_status-zb-container">'+
                                                                    '<span class="select2-selection__rendered" id="select2-filter_document_status-zb-container">'+
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
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="form-actions noborder"></div>'+
                        '</form>'+
                    '</div>'+
                '</div>'+
            '</div>';

let menu1 = '<div class="col-md-12" style="padding-bottom: 50px;">'+
                '<div id="datatable_ajax_wrapper" class="dataTables_wrapper dataTables_extended_wrapper no-footer">'+
                    '<div class="row">'+
                        '<div class="col-md-8 col-sm-12">'+
                            '<div class="dataTables_paginate paging_bootstrap_extended" id="datatable_ajax_paginate">'+
                                '<div class="pagination-panel"> Page '+
                                    '<a href="#" class="btn btn-sm default prev disabled">'+
                                        '<i class="fa fa-angle-left"></i>'+
                                    '</a>'+
                                    '<input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;">'+
                                    '<a href="#" class="btn btn-sm default next">'+
                                        '<i class="fa fa-angle-right"></i>'+
                                    '</a> of '+
                                    '<span class="pagination-panel-total">1880</span>'+
                                '</div>'+
                            '</div>'+
                            '<div class="dataTables_length" id="datatable_ajax_length">'+
                                '<label>'+
                                    '<span class="seperator">|</span>View '+
                                    '<select name="datatable_ajax_length" aria-controls="datatable_ajax" class="form-control input-xs input-sm input-inline">'+
                                        '<option value="10">10</option>'+
                                        '<option value="20">20</option>'+
                                        '<option value="50">50</option>'+
                                        '<option value="100">100</option>'+
                                        '<option value="150">150</option>'+
                                        '<option value="-1">All</option>'+
                                    '</select> records'+
                                '</label>'+
                            '</div>'+
                            '<div class="dataTables_info" id="datatable_ajax_info" role="status" aria-live="polite">'+
                                '<span class="seperator">|</span>Found total 18,792 records'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-md-4 col-sm-12">'+
                            '<div class="table-group-actions pull-right"></div>'+
                        '</div>'+
                        '<div id="datatable_ajax_processing" class="dataTables_processing" style="display: none;">Processing...</div>'+
                    '</div>'+
                    '<table class="table table-striped table-bordered table-hover dataTable no-footer" id="datatable_ajax" aria-describedby="datatable_ajax_info" role="grid">'+
                        '<thead>'+
                            '<tr role="row" class="heading">'+
                                '<th width="5px" class="text-center sorting_disabled" rowspan="1" colspan="1" aria-label="#">#</th>'+
                                '<th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Asuransi: activate to sort column ascending">Asuransi</th>'+
                                '<th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Tiket: activate to sort column ascending">Tiket</th>'+
                                '<th width="50px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Plat: activate to sort column ascending">Plat</th>'+
                                '<th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Policy: activate to sort column ascending">Policy</th>'+
                                '<th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Claim: activate to sort column ascending">Claim</th>'+
                                '<th width="60px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="SPK: activate to sort column ascending">SPK</th>'+
                                '<th width="120px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Reporter: activate to sort column ascending">Reporter</th>'+
                                '<th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Workshop: activate to sort column ascending">Workshop</th>'+
                                '<th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Surveyor: activate to sort column ascending">Surveyor</th>'+
                                '<th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="User: activate to sort column ascending">User</th>'+
                                '<th width="140px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th>'+
                                '<th width="80px" class="text-center sorting_disabled" rowspan="1" colspan="1" aria-label="Action">Action</th>'+
                            '</tr>'+
                            '<tr role="row" class="filter bg-grey-steel">'+
                                '<th width="5px" rowspan="1" colspan="1"></th>'+
                                '<th width="80px" class="text-center" rowspan="1" colspan="1"></th>'+
                                '<th width="80px" class="text-center" colspan="4" rowspan="1">Nomor</th>'+
                                '<th width="60px" class="text-center" rowspan="1" colspan="1">Date</th>'+
                                '<th width="80px" class="text-center" rowspan="1" colspan="1">Name</th>'+
                                '<th width="80px" class="text-center" rowspan="1" colspan="1"></th>'+
                                '<th width="80px" class="text-center" rowspan="1" colspan="1">Name</th>'+
                                '<th width="80px" class="text-center" rowspan="1" colspan="1">Deploy</th>'+
                                '<th width="140px" class="text-center" rowspan="1" colspan="1"></th>'+
                                '<th width="80px" class="text-center" rowspan="1" colspan="1">'+
                                    '<div class="text-center">'+
                                        '<button class="btn btn-sm yellow filter-submit margin-bottom tooltips" data-original-title="Filter" data-placement="top" data-container="body">'+
                                            '<i class="fa fa-search"></i>'+
                                        '</button>'+
                                    '</div>'+
                                '</th>'+
                            '</tr>'+
                            '<tr role="row" class="filter bg-grey-steel">'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                                '<td rowspan="1" colspan="1"></td>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>'+
                            '<tr role="row" class="odd">'+
                                '<td class=" text-center">1.</td>'+
                                '<td class=" text-left">'+
                                    '<span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless">PT ASURANSI</span>'+
                                '</td>'+
                                '<td class=" text-left">Data 1</td>'+
                                '<td class=" text-left">Data 2</td>'+
                                '<td class=" text-left">Data 3</td>'+
                                '<td class=" text-left">Data 4</td>'+
                                '<td class=" text-left">Data 5</td>'+
                                '<td class=" text-left">Data 6</td>'+
                                '<td class=" text-left">Data 7</td>'+
                                '<td class=" text-left">Data 8</td>'+
                                '<td class=" text-left">Data 9</td>'+
                                '<td class=" text-left">'+
                                    '<span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PREDEPLOYED </span>'+
                                '</td>'+
                                '<td class=" text-center">'+
                                    '<div class="btn-group" data-getcoord="0 predeployed-spkBtn p,bb">'+
                                        '<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">SPK&nbsp;&nbsp;'+
                                            '<i class="fa fa-angle-down"></i>'+
                                        '</button>'+
                                        '<ul class="dropdown-menu pull-right" role="menu">'+
                                            '<li>'+
                                                '<a href="javascript:;" class="btn-view" data-id="135579" data-kodeor="" data-jenisor="" data-kondisior="" data-spkstatus="PREDEPLOYED" data-template="" data-workshop="1509" data-documents="" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form/135579/9">View</a>'+
                                            '</li>'+
                                            '<li>'+
                                                '<a href="javascript:;" class="btn-view-cancel-terminated" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_cancel_terminated/135579/14">Cancel</a>'+
                                            '</li>'+
                                            '<li>'+
                                                '<a href="javascript:;" class="btn-view-cancel-terminated" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_cancel_terminated/135579/22">Terminate</a>'+
                                            '</li>'+
                                            '<li>'+
                                                '<a href="javascript:;" class="btn-delSPK" data-ticketno="########" data-carpolice="########" data-reportername="########" data-action="19" data-id="135579" data-url="spk/manajemen_ajax/DeleteSPK">Delete</a>'+
                                            '</li>'+
                                        '</ul>'+
                                    '</div>'+
                                '</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+
                    '<div class="row">'+
                        '<div class="col-md-8 col-sm-12">'+
                            '<div class="dataTables_paginate paging_bootstrap_extended">'+
                                '<div class="pagination-panel"> Page '+
                                    '<a href="#" class="btn btn-sm default prev disabled">'+
                                        '<i class="fa fa-angle-left"></i>'+
                                    '</a>'+
                                    '<input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;">'+
                                    '<a href="#" class="btn btn-sm default next">'+
                                        '<i class="fa fa-angle-right"></i>'+
                                    '</a> of '+
                                    '<span class="pagination-panel-total">1880</span>'+
                                '</div>'+
                            '</div>'+
                            '<div class="dataTables_length">'+
                                '<label>'+
                                    '<span class="seperator">|</span>View '+
                                    '<select name="datatable_ajax_length" aria-controls="datatable_ajax" class="form-control input-xs input-sm input-inline">'+
                                        '<option value="10">10</option>'+
                                        '<option value="20">20</option>'+
                                        '<option value="50">50</option>'+
                                        '<option value="100">100</option>'+
                                        '<option value="150">150</option>'+
                                        '<option value="-1">All</option>'+
                                    '</select> records'+
                                '</label>'+
                            '</div>'+
                            '<div class="dataTables_info">'+
                                '<span class="seperator">|</span>Found total 18,792 records'+
                            '</div>'+
                            '</div>'+
                        '<div class="col-md-4 col-sm-12"></div>'+
                    '</div>'+
                '</div>'+
            '</div>';