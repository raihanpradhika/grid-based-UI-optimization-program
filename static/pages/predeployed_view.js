let predeployed_view = {
    elem1 : {
        placementArea : {

        },
        designList : {
            0 : {

            }
        }
    }
}
let a = '<div class="portlet light bordered">'+
'<div class="portlet-title">'+
'<div class="caption font-red-sunglo">'+
'<i class="icon-settings font-red-sunglo"></i>'+
'<span class="caption-subject bold uppercase"> Information Ticket</span>'+
'</div>'+
'</div>'+
'<div class="portlet-body form">'+
'<form role="form">'+
'<input type="hidden" name="id_spk" value="135786">'+
'<div class="form-body">'+
'<div class="row">'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10 asuransi" style="pointer-events: none; cursor: default;">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">1 ######</label>'+
'<div class="col-md-8">'+
'<select id="asuransi" name="asuransi" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="9001" selected="selected">############</option>'+
'</select>'+
'<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord="0 predeployed_view-asuransi p,bb,m,h,k">'+
'<span class="selection">'+
'<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-asuransi-container">'+
'<span class="select2-selection__rendered" id="select2-asuransi-container" title="############">'+
'<span class="select2-selection__clear">×</span>############'+
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
'<label class="control-label col-md-4">2 ######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="1 predeployed_view-ticketNo ">'+
'<i class="fa"></i>'+
'<input placeholder="######" type="text" class="form-control" name="ticket_no" value="############" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">3 ######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="2 predeployed_view-carPoliceNo ">'+
'<i class="fa"></i>'+
'<input placeholder="######" type="text" class="form-control" name="car_police_no" value="############" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">4 ######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="3 predeployed_view-claimNo ">'+
'<i class="fa"></i>'+
'<input placeholder="Claim No" type="text" class="form-control" name="claim_no" value="2302122111742" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">5 ######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="4 predeployed_view-policyNo ">'+
'<i class="fa"></i>'+
'<input placeholder="Policy No" type="text" class="form-control" name="policy_no" value="330220010279" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">6 ######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="5 predeployed_view-certificatedNo ">'+
'<i class="fa"></i>'+
'<input placeholder="Certificated No" type="text" class="form-control" name="certificated_no" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10" style="pointer-events: none;cursor: default;">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">7 ######</label>'+
'<div class="col-md-8">'+
'<div class="checkbox-list">'+
'<label>'+
'<input type="checkbox" id="rawat_jalan" name="rawat_jalan" value="1" data-getcoord="6 predeployed_view-rawatJalan ">'+
'</label>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10" style="pointer-events: none;cursor: default;">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">8 ######</label>'+
'<div class="col-md-8">'+
'<div class="checkbox-list">'+
'<label>'+
'<input type="checkbox" id="wait_sparepart" name="wait_sparepart" value="1" data-getcoord="7 predeployed_view-waitForSparepart ">'+
'</label>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">9 ######</label>'+
'<div class="col-md-8">'+
'<select id="spk_status" name="spk_status" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All SPK Status--</option>'+
'<option value="SUBMITTED">[AMC]SUBMITTED</option><option value="PROCESSED">[AMC]PROCESSED</option><option value="APPROVED">[AMC]APPROVED</option><option value="REPAIRINPROGRESS">[AMC]REPAIRINPROGRESS</option><option value="DOCUMENTNOTCOMPLETED">[AMC]DOCUMENTNOTCOMPLETED</option><option value="DECLINED">[AMC]DECLINED</option><option value="AMCREJECTED">[AMC]REJECTED</option><option value="FINISHED">[AMC]FINISHED</option><option value="PREDEPLOYED" selected="selected">PREDEPLOYED</option>'+                                                       
'</select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord="8 predeployed_view-currentStatus "><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-spk_status-container"><span class="select2-selection__rendered" id="select2-spk_status-container" title="PREDEPLOYED"><span class="select2-selection__clear">×</span>PREDEPLOYED</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">10 ######</label>'+
'<div class="col-md-8">'+
'<select name="document_status" id="document_status" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Document--</option>'+
'<option value="COMPLETED">COMPLETED</option><option value="NOTCOMPLETED">NOT COMPLETED</option>'+                                                       
'</select>'+
'<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord="9 predeployed_view-Document ">'+
    '<span class="selection">'+
        '<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-document_status-container">'+
            '<span class="select2-selection__rendered" id="select2-document_status-container">'+
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
'<div class="col-md-10 condDocument" style="display: none;">'+
'<div class="form-group">'+
'<label class="control-label col-md-4"></label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="document_reason" rows="6" data-autosize-on="false"></textarea>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10 rejected" style="display: none;">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Reject Reason</label>'+
'<div class="col-md-8">'+
'<select name="filter_reject_reason" id="filter_reject_reason" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Reject Reason--</option>'+
'<option value="Perlu SPK Tambahan">Perlu SPK Tambahan</option><option value="SPK Belum Diterima">SPK Belum Diterima</option><option value="Customer Tidak Bisa Dihubungi">Customer Tidak Bisa Dihubungi</option><option value="Customer Batal Claim">Customer Batal Claim</option><option value="Customer Pindah Bengkel">Customer Pindah Bengkel</option><option value="Unit Belum Masuk Bengkel">Unit Belum Masuk Bengkel</option><option value="Sparepart Problem">Sparepart Problem</option><option value="Jenis Cat Berbeda">Jenis Cat Berbeda</option><option value="Bengkel Full">Bengkel Full</option>                                                        </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_reject_reason-container"><span class="select2-selection__rendered" id="select2-filter_reject_reason-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10 rejected" style="display: none;">'+
'<div class="form-group">'+
'<label class="control-label col-md-4"></label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="reject_reason" rows="6" data-autosize-on="false"></textarea>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10 rejected" style="display: none;">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">SPK Status [Before Rejected]</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right">'+
'<i class="fa"></i>'+
'<input placeholder="SPK Status [Before Rejected]" type="text" name="partsname" class="form-control" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10 ConditionSPK">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Kondisi SPK </label>'+
'<div class="col-md-4">'+
'<select id="kondisi_spk" name="kondisi_spk" class="form-control select2me select2-hidden-accessible" disabled="" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Kondisi SPK--</option>'+
'<option value="NEW" selected="selected">BARU</option><option value="REVISI">REVISI</option>'+                                                        
'</select><span class="select2 select2-container select2-container--bootstrap select2-container--disabled" dir="ltr" style="width: auto;" data-getcoord="10 predeployed_view-kondisiSPK "><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-labelledby="select2-kondisi_spk-container"><span class="select2-selection__rendered" id="select2-kondisi_spk-container" title="BARU"><span class="select2-selection__clear">×</span>BARU</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">SPK Date </label>'+
'<div class="col-md-4">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="11 predeployed_view-spkDate ">'+
'<input type="text" name="spk_date" class="form-control" value="14-07-2021" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Progress % </label>'+
'<div class="col-md-4">'+
'<div class="input-icon right" data-getcoord="12 predeployed_view-progress ">'+
'<i class="fa"></i>'+
'<input placeholder="Progress" type="text" class="form-control" name="progress" value="0" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Payment Status</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="13 predeployed_view-paymentStatus ">'+
'<i class="fa"></i>'+
'<input placeholder="Payment Status" type="text" class="form-control" name="spk_status" value="UNPAID" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Payment Date </label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy">'+
'<input type="text" name="payment_date" class="form-control" value="" readonly="">'+
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
'</div>';

let b = '<div class="portlet box blue" style="margin-left:2.5%;width:95%;">'+
'<div class="portlet-title">'+
'<div class="caption">'+
'<i class="fa fa-gift"></i>'+
'Target Workshop'+
'</div>'+
'</div>'+
'<div class="portlet-body form">'+
'<!-- BEGIN FORM-->'+
'<form action="#" class="form-horizontal" id="form-application-workshop" method="post" onsubmit="return false">'+
'<div class="form-body">'+
'<input type="hidden" name="app_id_workshop" value="135827">'+
'<div class="row">'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">######</label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="workshop_name_initial" rows="2" data-autosize-on="false" readonly="" data-getcoord="">################</textarea>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="######" type="text" class="form-control" name="workshop_address_initial" value="################" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="################" type="text" class="form-control" name="workshop_region_initial" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="CARE Workshop ID" type="text" class="form-control" name="care_id" value="################" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">######</label>'+
'<div class="col-md-8">'+
'<select id="target_workshop" name="target_workshop" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Workshop--</option>'+
'<option value="1385" selected="selected">################</option>'+
'</select>'+
'<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord="">'+
'<span class="selection">'+
'<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-target_workshop-container">'+
'<span class="select2-selection__rendered" id="select2-target_workshop-container" title="################">'+
'<span class="select2-selection__clear">×</span>################'+
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
'<label class="control-label col-md-4">######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Workshop [Target] Variant" type="text" class="form-control" name="workshop_variant" value="################" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">######</label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="workshop_address" rows="2" data-autosize-on="false" readonly="" data-getcoord="">################</textarea>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Workshop Address Initial" type="text" class="form-control" name="workshop_city" value="################" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">######</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Workshop Region Initial" type="text" class="form-control" name="workshop_default" value="################" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="form-actions">'+
'<div class="row">'+
'<div class="col-md-2">'+
'<button type="submit" class="btn blue btn-set-target" data-getcoord="">Set Target</button>'+
'</div>'+
'</div>'+
'</div>'+
'</form>'+
'<!-- END FORM-->'+
'</div>'+
'</div>';


let c = '<div class="portlet box blue">'+
'<div class="portlet-title">'+
'<ul class="nav nav-tabs">'+
'<li class="active"><a href="#form_data" data-toggle="tab" data-getcoord="">Data</a></li>'+
'<li><a href="#form_workshop" data-toggle="tab" data-getcoord="">Information Workshop</a></li>'+
'<li class="tab_form_jasa"><a href="#form_jasa" data-toggle="tab" data-getcoord="">Jasa</a></li>'+
'<li class="tab_form_parts"><a href="#form_parts" data-toggle="tab" data-getcoord="">Parts</a></li>'+
'<li class="tab_form_photo"><a href="#form_photo" data-toggle="tab" data-getcoord="">Photo</a></li>'+
'<li class="tab_form_pdf"><a href="#form_pdf" data-toggle="tab" data-getcoord="">PDF File</a></li>'+
'<li class="tab_form_history_spk"><a href="#form_history_spk" data-toggle="tab" data-getcoord="">History SPK</a></li>'+
'<li class="tab_form_history_spk_pdf"><a href="#form_history_spk_pdf" data-toggle="tab" data-getcoord="">History SPK (PDF)</a></li>'+
'</ul>'+
'</div>'+
'<div class="portlet-body">'+
'<div class="tab-content">'+
'<!-- Tab Data Detail -->'+
'<div class="tab-pane active" id="form_data">'+
'<div class="tabbable-line">'+
'<div class="portlet box blue" style="margin-left:2.5%;width:95%;">'+
'<div class="portlet-title">'+
'<div class="caption">'+
'<i class="fa fa-gift"></i>'+
'Main Data'+
'</div>'+
'</div>'+
'<div class="portlet-body form">'+
'<!-- BEGIN FORM-->'+
'<form action="#" class="form-horizontal" id="form-application" method="post" onsubmit="return false">'+
'<div class="form-body">'+
'<input type="hidden" name="app_id" value="135839">'+
'<div class="row">'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Insured Name</label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="insured_name" rows="2" data-autosize-on="false" readonly="" data-getcoord=""></textarea>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Reporter Name </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Reporter Name" type="text" class="form-control" name="reporter_name" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Reporter Hp </label>'+
'<div class="col-md-4">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Reporter HP1" type="text" class="form-control" name="reporter_hp1" value="" readonly="">'+
'</div>'+
'</div>'+
'<div class="col-md-4">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Reporter HP2" type="text" class="form-control" name="reporter_hp2" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Reporter Email </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Reporter Email" type="text" class="form-control" name="reporter_email" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Car Chassis </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Car Chassis" type="text" class="form-control" name="car_chassis" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Car Machine </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Car Machine" type="text" class="form-control" name="car_machine" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Car Handling </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Car Handling" type="text" class="form-control" name="car_handling" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Date of Incident </label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="date_of_incident" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Incident Type </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Incident Type" type="text" class="form-control" name="incident_type" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Incident City </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Incident City" type="text" class="form-control" name="incident_city" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Incident Province </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Incident Province" type="text" class="form-control" name="incident_province" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Car Speed (km/h)</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Car Speed" type="text" class="form-control" name="car_speed" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Incident Description </label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="incident_desc" cols="5" rows="5" data-autosize-on="false" data-getcoord=""></textarea>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Incident Remarks</label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="incident_remarks" cols="5" rows="5" data-autosize-on="false" data-getcoord=""></textarea>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Surveyor Name</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Surveyor Name" type="text" class="form-control" name="surveyor_name" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Assesor Name</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Assesor Name" type="text" class="form-control" name="assesor_name" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Ticket Status</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Ticket Status" type="text" class="form-control" name="ticket_status" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Submitted Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="submitted_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Vehicle Date IN</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="vehicle_date_in" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Processed Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="processed_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Approved Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="approved_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Resubmit Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="resubmit_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Document Complete Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="doc_completed_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Document Not Complete Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="doc_not_completed_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Document Not Completed Remarks</label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="docnot_completed_remarks" rows="2" data-autosize-on="false" readonly="" data-getcoord=""></textarea>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Start Repair Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="start_repair_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Report Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="report_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Decline Remarks</label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="decline_remarks" rows="2" data-autosize-on="false" readonly="" data-getcoord=""></textarea>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Remarks Cancelled / Terminated</label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="remarks_cancelled" rows="5" data-autosize-on="false" readonly="" data-getcoord=""></textarea>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="form-actions">'+
'<div class="row">'+
'<div class="col-md-3">'+
'<a href="javascript:;" class="btn green-seagreen yellow-stripe btn-view-editspk" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_edit_spk/135839" data-getcoord=""><i class="fa fa-pencil"></i><span class="hidden-480">&nbsp;&nbsp;Edit </span></a>&nbsp;&nbsp;<a href="javascript:;" class="btn green-seagreen yellow-stripe  btn-Print-SPK" data-id="135839" data-url="spk/manajemen_ajax/print_spk/"><i class="fa fa-print"></i><span class="hidden-480">&nbsp;&nbsp;Print SPK </span></a>'+
'</div>'+
'</div>'+
'</div>'+
'</form>'+
'<!-- END FORM-->'+
'</div>'+                        
'</div>'+
'</div>'+
'</div>'+
'<br><br>'+
'<!-- Main Data -->'+
'<!-- Workshop -->'+
'<div class="tab-pane" id="form_workshop">'+
'<div class="row">'+
'<form action="#" class="form-horizontal" id="form-application" method="post" onsubmit="return false">'+
'<div class="form-body">'+
'<input type="hidden" name="app_id" value="135839">'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Deloyed Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="deployed_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Accept Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="accept_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Estimate Completion Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="estimate_completion_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Unit In Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="unit_in_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Pickup Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="pickup_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Bongkar Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="bongkar_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Las Ketok Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="last_ketok_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Dempul Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="dempul_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Epoxy Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="epoxy_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Cat Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="cat_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Poles Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="poles_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Finishing Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="finishing_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Finish Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="finish_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Deliver Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="deliver_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Reject Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="reject_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Reject Reason </label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="reject_reason" rows="2" data-autosize-on="false" readonly="" data-getcoord=""></textarea>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Reject Cause </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Reject Cause" type="text" class="form-control" name="reject_cause" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Status Before Reject </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Status Before Reject" type="text" class="form-control" name="status_before_rejects" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Rework Require </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Rework Require" type="text" class="form-control" name="rework_require" value="" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Reject Note </label>'+
'<div class="col-md-8">'+
'<textarea class="form-control" name="reject_note" rows="2" data-autosize-on="false" readonly="" data-getcoord=""></textarea>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Rework Counter </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Rework Counter" type="text" class="form-control" name="rework_counter" value="0" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Rework Last Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="rework_last_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Last Status Date</label>'+
'<div class="col-md-8">'+
'<div class="input-group date" data-date-format="dd-mm-yyyy" data-getcoord="">'+
'<input type="text" name="last_status_date" class="form-control" value="" readonly="">'+
'<span class="input-group-btn">'+
'<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
'</span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Last User </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Last User" type="text" class="form-control" name="last_user" value="SYSTEM" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Last User Deploy </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Last User Deploy" type="text" class="form-control" name="last_user_deploy" value="SYSTEM" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</form>'+
'</div>'+
'</div>'+
'<!-- Workshop -->'+
'<!-- Panel Jasa -->'+
'<div class="tab-pane" id="form_jasa">'+
'<div class="row">'+
'<form action="#" class="form-horizontal" id="form-application-jasa" method="post" onsubmit="return false">'+
'<div class="form-body">'+
'<input type="hidden" name="app_idjasa" value="135839">'+
'<div class="row" id="jasa-data">'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10" style="pointer-events: none;cursor: default;">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Template Jasa</label>'+
'<div class="col-md-8">'+
'<select id="template_jasa" name="template_jasa" class="form-control select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Template Jasa--</option>'+
'</select>'+
'<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord="">'+
'<span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-template_jasa-container"><span class="select2-selection__rendered" id="select2-template_jasa-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Vehicle Brand </label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Vehicle Brand " type="text" class="form-control" name="vehicle_brand" value="TOYOTA KIJANG INNOVA G 2.0 M/T." readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Vehicle Type</label>'+
'<div class="col-md-8">'+
'<select id="vehicle_type" name="vehicle_type" class="form-control select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Vehicle Type--</option>'+
'<option value="Standar">Standar (Biasa &lt; 500 Juta) </option><option value="Mewah">Mewah (Mewah &gt; 500 Juta) </option>'+
'</select>'+
'<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord="">'+
    '<span class="selection">'+
        '<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-vehicle_type-container">'+
            '<span class="select2-selection__rendered" id="select2-vehicle_type-container">'+
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
'<label class="control-label col-md-4">Painting Type </label>'+
'<div class="col-md-8">'+
'<select id="cat" name="cat" class="form-control select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Vehicle Type--</option>'+
'<option value="Solid">SOLID</option><option value="Metalic">METALIC</option><option value="Cyralic">CYRALIC</option><option value="Morphoblue">MORPHOBLUE</option><option value="Bunglon">BUNGLON</option>'+
'</select>'+
'<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord=""><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-cat-container"><span class="select2-selection__rendered" id="select2-cat-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="row">'+
'<div class="portlet box blue">'+
'<div class="portlet-title">'+
'<ul class="nav nav-tabs">'+
'<li class="active">'+
'<a href="#list_jasa" data-toggle="tab">List  </a>'+
'</li>'+
'<li>'+
'<a href="#history_jasa" data-toggle="tab">History </a>'+
'</li>'+
'<li>'+
'<a href="#history_invoice" data-toggle="tab">History Invoice </a>'+
'</li>'+
'</ul>'+
'</div>'+
'<div class="portlet-body">'+
'<div class="tab-content">'+
'<div class="tab-pane active" id="list_jasa">'+
'<div class="portlet light bordered">'+
'<div class="portlet-title">'+
'<div class="actions">'+
'<div class="btn-group" data-getcoord="">'+ //add panel
'<a class="btn btn-sm red dropdown-toggle" href="javascript:;" data-toggle="dropdown">'+
'Add Panel'+
'<i class="fa fa-angle-down"></i>'+
'</a>'+
'<ul class="dropdown-menu pull-right">'+
'<li><a href="javascript:;" class="btn-view-listpanel" data-pengerjaan="" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_list_detil_panel_jasa/135839">Panel</a></li>'+
'<li><a href="javascript:;" class="btn-view-otherservice" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_other_service/0/135839">Other Service</a></li>'+                                                                             
'</ul>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="portlet-body table-responsive">'+
'<div class="col-md-12" style="padding-bottom: 90px;">'+
'<div id="datatable_ajax_jasa_wrapper" class="dataTables_wrapper dataTables_extended_wrapper dataTables_extended_wrapper"><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" id="datatable_ajax_jasa_paginate" style="display: none;"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">0</span></div></div><div class="dataTables_length" id="datatable_ajax_jasa_length" style="display: none;"><label><span class="seperator" style="display: none;">|</span>View <select name="datatable_ajax_jasa_length" aria-controls="datatable_ajax_jasa" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info" id="datatable_ajax_jasa_info" role="status" aria-live="polite">No records found to show</div></div><div class="col-md-4 col-sm-12"><div class="table-group-actions pull-right"></div></div><div id="datatable_ajax_jasa_processing" class="dataTables_processing" style="display: none;">Processing...</div></div><table class="table table-striped table-bordered table-hover dt-responsive dataTable dtr-inline collapsed" id="datatable_ajax_jasa" aria-describedby="datatable_ajax_jasa_info" role="grid">'+
'<thead>'+
'<tr role="row" class="heading"><th width="5px" class="text-center sorting_disabled" rowspan="1" colspan="1" aria-label="#">#</th><th width="350px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Nama Panel: activate to sort column ascending">Nama Panel</th><th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Jenis Kerja: activate to sort column ascending">Jenis Kerja</th><th width="20px" class="text-center sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Qty: activate to sort column ascending">Qty</th><th width="60px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Pengerjaan: activate to sort column ascending">Pengerjaan</th><th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Total (Rp): activate to sort column ascending">Total (Rp)</th><th width="5px" class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" style="display: none;" aria-label="Input User: activate to sort column ascending">Input User</th><th width="5px" class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" style="display: none;" aria-label="Input Date: activate to sort column ascending">Input Date</th><th width="120px" class="text-center sorting_disabled" rowspan="1" colspan="1" aria-label="Action">Action</th></tr>'+
'<tr role="row" class="filter bg-grey-steel"><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<input type="text" class="form-control form-filter input-sm" name="filter_panel">'+
'</td><td rowspan="1" colspan="1">'+
'<select name="filter_tipe_kerja" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Tipe Kerja--</option>'+
'<option value="REPAIR">REPAIR</option><option value="REPLACE">REPLACE</option><option value="SPESIAL REPAIR">SPESIAL REPAIR</option><option value="JASA LAIN">JASA LAIN</option><option value="POLES">POLES</option>                                                                                                    </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_tipe_kerja-kz-container"><span class="select2-selection__rendered" id="select2-filter_tipe_kerja-kz-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
'</td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<select name="filter_pengerjaan" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Pengerjaan--</option>'+
'<option value="IN">IN</option>'+               
'</select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_pengerjaan-oe-container"><span class="select2-selection__rendered" id="select2-filter_pengerjaan-oe-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
'</td><td rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<div class="text-center">'+
'<button class="btn btn-sm yellow filter-submit margin-bottom tooltips" data-original-title="Filter" data-placement="top" data-container="body"><i class="fa fa-search"></i></button>'+
'<button class="btn btn-sm red filter-cancel tooltips" data-original-title="Reset" data-placement="top" data-container="body"><i class="fa fa-times"></i></button>'+
'</div>'+
'</td></tr>'+
'</thead>'+
'<tbody><tr class="odd"><td valign="top" colspan="7" class="dataTables_empty">No data available in table</td></tr></tbody>'+
'<tfoot>'+
'<tr class="heading"><th colspan="3" class="text-right text-center text-left" rowspan="1">Total Panel</th><th class="text-center" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">0</span></th><th class="text-left" rowspan="1" colspan="1"></th><th class="text-left" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">0</span></th><th class="text-center none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="text-center none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="text-center" rowspan="1" colspan="1">'+
'<a href="javascript:;" class="btn green-seagreen yellow-stripe btn-deleteall-jasa" data-spk="135839" data-url="spk/manajemen_ajax/delete_all_jasa"><i class="fa fa-trash"></i><span class="hidden-480">&nbsp;&nbsp;Delete All </span></a>                                                                                            </th></tr>'+
'</tfoot>'+
'</table><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" style="display: none;"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">0</span></div></div><div class="dataTables_length" style="display: none;"><label><span class="seperator" style="display: none;">|</span>View <select name="datatable_ajax_jasa_length" aria-controls="datatable_ajax_jasa" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info">No records found to show</div></div><div class="col-md-4 col-sm-12"></div></div></div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="tab-pane" id="history_jasa">'+
'<div class="portlet light bordered">'+
'<div class="portlet-body">'+
'<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 600px;"><div class="scroller" style="height: 600px; overflow: hidden; width: auto;" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd" data-initialized="1">'+
'<!-- History -->'+
'<div class="row">'+
'<div class="col-md-12">'+
'<div class="note note-info" style="margin:10px;">'+
'<div class="col-md-12">'+
'</div>'+
'<div style="clear:both;"></div>'+
'</div>'+                                                             
'</div>'+
'</div>'+
'<div class="row">'+
'<div class="col-md-12">'+
'<div class="note note-info" style="margin:10px;">'+
'<div class="col-md-12">'+
'</div>'+
'<div style="clear:both;"></div>'+
'</div>'+                                                             
'</div>'+
'</div>'+
'<!-- History -->'+             
'</div><div class="slimScrollBar" style="background: rgb(161, 178, 189); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: yellow; opacity: 0.2; z-index: 90; right: 1px;"></div></div>'+
'</div>'+
'</div>'+
'</div>'+
'<!-- History Invoice-->'+
'<div class="tab-pane" id="history_invoice">'+
'<div class="portlet light bordered">'+
'<div class="portlet-body">'+
'<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 600px;"><div class="scroller" style="height: 600px; overflow: hidden; width: auto;" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd" data-initialized="1">'+
'<div class="row">'+
'<div class="col-md-12">'+
'<div class="note note-info" style="margin:10px;">'+
'<div class="col-md-12">'+
'</div>'+
'<div style="clear:both;"></div>'+
'</div>                           '+                                                             
'</div>'+
'</div>  '+      
'</div><div class="slimScrollBar" style="background: rgb(161, 178, 189); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: yellow; opacity: 0.2; z-index: 90; right: 1px;"></div></div>'+
'</div>'+
'</div>'+
'</div>'+
'<!-- History Invoice-->'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="form-actions hide">'+
'<div class="row">'+
'<div class="col-md-2">'+
'<button type="submit" class="btn blue btn-print">Print Invoice</button>'+
'</div>'+
'</div>'+
'</div>'+
'</form>'+
'</div>'+
'</div>'+
'<!-- Panel Jasa -->'+
'<!-- Panel Parts -->'+
'<div class="tab-pane" id="form_parts">'+
'<div class="row">'+
'<form action="#" class="form-horizontal" id="form-application-parts" method="post" onsubmit="return false">'+
'<div class="form-body">'+
'<input type="hidden" name="app_idparts" value="135839">'+
'<div class="row" id="parts-data">'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Vehicle Brand Reported</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Vehicle Brand Reported" type="text" class="form-control" name="vehicle_brand_reported" value="TOYOTA KIJANG INNOVA G 2.0 M/T.">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Vehicle Brand Update </label>'+
'<div class="col-md-8">'+
'<select id="brand_update" name="brand_update" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Vehicle Brand Update--</option>'+
'<option value="AUDI">AUDI</option><option value="BMW">BMW</option><option value="CHEVROLET">CHEVROLET</option><option value="DAIHATSU">DAIHATSU</option><option value="DATSUN">DATSUN</option><option value="DFSK">DFSK</option><option value="DODGE">DODGE</option><option value="FORD">FORD</option><option value="HINO">HINO</option><option value="HONDA">HONDA</option><option value="HYUNDAI">HYUNDAI</option><option value="ISUZU">ISUZU</option><option value="JEEP">JEEP</option><option value="KIA">KIA</option><option value="LANDROVER">LANDROVER</option><option value="LEXUS">LEXUS</option><option value="MAZDA">MAZDA</option><option value="MERCEDES">MERCEDES</option><option value="MINI">MINI</option><option value="MITSUBISHI">MITSUBISHI</option><option value="NISSAN">NISSAN</option><option value="PORSCHE">PORSCHE</option><option value="PROTON">PROTON</option><option value="RANGE ROVER">RANGE ROVER</option><option value="SUBARU">SUBARU</option><option value="SUZUKI">SUZUKI</option><option value="TOYOTA">TOYOTA</option><option value="UDTRUCKS">UDTRUCKS</option><option value="VW">VW</option><option value="WULING">WULING</option><option value="RENAULT">RENAULT</option><option value="PEUGEOT">PEUGEOT</option><option value="LAMBORGHINI">LAMBORGHINI</option><option value="VOLVO">VOLVO</option>'+
'</select>'+
'<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord=""><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-brand_update-container"><span class="select2-selection__rendered" id="select2-brand_update-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-6">'+
'<div class="row">'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Vehicle Category</label>'+
'<div class="col-md-8">'+
'<select id="vehicle_category" name="vehicle_category" class="form-control select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Vehicle Category--</option>'+
'<option value="NONPASSENGER">NONPASSENGER</option><option value="TRUCK">TRUCK</option><option value="PASSENGER">PASSENGER</option><option value="TERLAMPIR">TERLAMPIR</option><option value="OTHER">OTHER</option>'+
'</select>'+
'<span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;" data-getcoord=""><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-vehicle_category-container"><span class="select2-selection__rendered" id="select2-vehicle_category-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-md-10">'+
'<div class="form-group">'+
'<label class="control-label col-md-4">Vehicle Year</label>'+
'<div class="col-md-8">'+
'<div class="input-icon right" data-getcoord="">'+
'<i class="fa"></i>'+
'<input placeholder="Vehicle Year" type="text" class="form-control" name="vehicle_year" value="2011" readonly="">'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="row">'+
'<div class="portlet box blue">'+
'<div class="portlet-title">'+
'<ul class="nav nav-tabs">'+
'<li class="active">'+
'<a href="#list" data-toggle="tab">List  </a>'+
'</li>'+
'<li>'+
'<a href="#invoice" data-toggle="tab">Invoice </a>'+
'</li>'+
'<li>'+
'<a href="#history" data-toggle="tab">History </a>'+
'</li>'+
'<li>'+
'<a href="#history_invoice_supplier" data-toggle="tab">History Invoice</a>'+
'</li>'+
'</ul>'+
'</div>'+
'<div class="portlet-body">'+
'<div class="tab-content">'+
'<div class="tab-pane active" id="list">'+
'<div class="portlet light bordered">'+
'<div class="portlet-title">'+
'<div class="actions">'+
'<div class="btn-group" data-getcoord="">'+
'<a class="btn btn-sm red dropdown-toggle" href="javascript:;" data-toggle="dropdown">'+
'Add Parts'+
'<i class="fa fa-angle-down"></i>'+
'</a>'+
'<ul class="dropdown-menu pull-right">'+
'<li><a href="javascript:;" class="btn-view-viewparts" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_parts/0/135839">Parts</a></li><li><a href="javascript:;" class="btn-view-ongkir" data-supplier="0" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_ongkir/0/135839">Others</a></li>'+
'</ul>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="portlet-body table-responsive">'+
'<div class="col-md-12" style="padding-bottom: 90px;">'+
'<div id="datatable_ajax_parts_wrapper" class="dataTables_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper"><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" id="datatable_ajax_parts_paginate" style="display: none;"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">0</span></div></div><div class="dataTables_length" id="datatable_ajax_parts_length" style="display: none;"><label><span class="seperator" style="display: none;">|</span>View <select name="datatable_ajax_parts_length" aria-controls="datatable_ajax_parts" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info" id="datatable_ajax_parts_info" role="status" aria-live="polite">No records found to show</div></div><div class="col-md-4 col-sm-12"><div class="table-group-actions pull-right"></div></div><div id="datatable_ajax_parts_processing" class="dataTables_processing" style="display: none;">Processing...</div></div><table class="table table-striped table-bordered table-hover dt-responsive dataTable dtr-inline collapsed" id="datatable_ajax_parts" aria-describedby="datatable_ajax_parts_info" role="grid">'+
'<thead>'+
'<tr role="row" class="heading"><th width="5px" class="all text-center sorting_disabled" rowspan="1" colspan="1" aria-label="#">#</th><th width="140px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Part Ordered: activate to sort column ascending">Part Ordered</th><th width="200px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Part Supplied: activate to sort column ascending">Part Supplied</th><th width="140px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Part Code: activate to sort column ascending">Part Code</th><th width="20px" class="text-center all sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Qty: activate to sort column ascending">Qty</th><th width="120px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Unit Price (Rp): activate to sort column ascending">Unit Price (Rp)</th><th width="120px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Disc (%): activate to sort column ascending">Disc (%)</th><th width="120px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Unit Disc (Rp): activate to sort column ascending">Unit Disc (Rp)</th><th width="120px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Total Net (Rp): activate to sort column ascending">Total Net (Rp)</th><th width="80px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Supplier: activate to sort column ascending">Supplier</th><th width="80px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Payment Status: activate to sort column ascending" style="display: none;">Payment Status</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Payment Date: activate to sort column ascending" style="display: none;">Payment Date</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Order to Supplier: activate to sort column ascending" style="display: none;">Order to Supplier</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Order Accepted: activate to sort column ascending" style="display: none;">Order Accepted</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Est Delivery: activate to sort column ascending" style="display: none;">Est Delivery</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Sending by Supplier: activate to sort column ascending" style="display: none;">Sending by Supplier</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Received by Workshop: activate to sort column ascending" style="display: none;">Received by Workshop</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Reject Date: activate to sort column ascending" style="display: none;">Reject Date</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Reject Reason: activate to sort column ascending" style="display: none;">Reject Reason</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Input User: activate to sort column ascending" style="display: none;">Input User</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Input Date: activate to sort column ascending" style="display: none;">Input Date</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Return Date: activate to sort column ascending" style="display: none;">Return Date</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Note: activate to sort column ascending" style="display: none;">Note</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Est. Sparepart Ready Date: activate to sort column ascending" style="display: none;">Est. Sparepart Ready Date</th><th class="text-center none sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Indent Note: activate to sort column ascending" style="display: none;">Indent Note</th><th width="120px" class="text-center all sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Wreck: activate to sort column ascending">Wreck</th><th width="80px" class="text-center all sorting_disabled" rowspan="1" colspan="1" aria-label="Action">Action</th></tr>'+
'<tr role="row" class="filter bg-grey-steel"><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<input type="text" class="form-control form-filter input-sm" name="filter_part_ordered">'+
'</td><td rowspan="1" colspan="1">'+
'<input type="text" class="form-control form-filter input-sm" name="filter_part_supplied">'+
'</td><td rowspan="1" colspan="1">'+
'<input type="text" class="form-control form-filter input-sm" name="filter_part_code">'+
'</td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<a href="javascript:;" class="btn green btn-xs btn-set-supplier" data-pengerjaan="" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/set_supplier_parts/135839"><i class="fa fa-plus"></i><span class="hidden-480">&nbsp;&nbsp;Set Supplier </span></a>'+
'</td><td rowspan="1" colspan="1">'+
'<select id="filter_statuspart" name="filter_statuspart" width="100px;" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
'<option value="">--All Status--</option>'+
'<option value="PO">PO</option><option value="DO">DO</option><option value="ACCEPTED">ACCEPTED</option><option value="SENDING">SENDING</option><option value="REJECTED">REJECTED</option><option value="CANCELLED">CANCELLED</option><option value="RETURNED">RETURNED</option><option value="INDENT">INDENT</option>'+                                                                                                    
'</select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_statuspart-container"><span class="select2-selection__rendered" id="select2-filter_statuspart-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
'</td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="text-center all" rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<div class="text-center">'+
'<button class="btn btn-sm yellow filter-submit margin-bottom tooltips" data-original-title="Filter" data-placement="top" data-container="body"><i class="fa fa-search"></i></button>'+
'<button class="btn btn-sm red filter-cancel tooltips" data-original-title="Reset" data-placement="top" data-container="body"><i class="fa fa-times"></i></button>'+
'</div>'+
'</td></tr>'+
'</thead>'+
'<tbody><tr class="odd"><td valign="top" colspan="13" class="dataTables_empty">No data available in table</td></tr></tbody>'+
'<tfoot>'+
'<tr class="heading"><th colspan="4" class="text-right all text-center text-left" rowspan="1">Total</th><th class="all text-center" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">0</span></th><th class="all text-left" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">0</span></th><th class="all text-left" rowspan="1" colspan="1"></th><th class="all text-left" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">0</span></th><th class="none text-left" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">0</span></th><th class="none text-left" rowspan="1" colspan="1"></th><th class="none text-left" rowspan="1" colspan="1"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="all text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="all text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="all text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="all text-center" rowspan="1" colspan="1" style="display: none;"></th><th class="all text-center" rowspan="1" colspan="1"></th><th class="all text-center" rowspan="1" colspan="1">'+
'<a href="javascript:;" class="btn green-seagreen yellow-stripe btn-deleteall-parts" data-spk="135839" data-url="spk/manajemen_ajax/delete_all_parts"><i class="fa fa-trash"></i><span class="hidden-480">&nbsp;&nbsp;Delete All </span></a>                                                                                            </th></tr>'+
'</tfoot>'+
'</table><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" style="display: none;"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">0</span></div></div><div class="dataTables_length" style="display: none;"><label><span class="seperator" style="display: none;">|</span>View <select name="datatable_ajax_parts_length" aria-controls="datatable_ajax_parts" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info">No records found to show</div></div><div class="col-md-4 col-sm-12"></div></div></div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="tab-pane" id="invoice">'+
'<div class="portlet-body table-responsive">'+
'<div class="col-md-12" style="padding-bottom: 90px;">'+
'<div id="datatable_ajax_parts_invoice_wrapper" class="dataTables_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper no-footer"><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" id="datatable_ajax_parts_invoice_paginate" style="display: none;"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">0</span></div></div><div class="dataTables_length" id="datatable_ajax_parts_invoice_length" style="display: none;"><label><span class="seperator" style="display: none;">|</span>View <select name="datatable_ajax_parts_invoice_length" aria-controls="datatable_ajax_parts_invoice" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info" id="datatable_ajax_parts_invoice_info" role="status" aria-live="polite">No records found to show</div></div><div class="col-md-4 col-sm-12"><div class="table-group-actions pull-right"></div></div><div id="datatable_ajax_parts_invoice_processing" class="dataTables_processing" style="display: none;">Processing...</div></div><table class="table table-striped table-bordered table-hover dataTable no-footer" id="datatable_ajax_parts_invoice" aria-describedby="datatable_ajax_parts_invoice_info" role="grid">'+
'<thead>'+
'<tr role="row" class="heading"><th width="5px" class="all text-center sorting_disabled" rowspan="1" colspan="1" aria-label="#">#</th><th width="140px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts_invoice" rowspan="1" colspan="1" aria-label="Part Supplier: activate to sort column ascending">Part Supplier</th><th width="80px" class="text-center all sorting_disabled" rowspan="1" colspan="1" aria-label="Action">Action</th></tr>'+
'<tr role="row" class="filter bg-grey-steel"><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<input type="text" class="form-control form-filter input-sm" name="filter_part_supplier">'+
'</td><td rowspan="1" colspan="1">'+
'<div class="text-center">'+
'<button class="btn btn-sm yellow filter-submit margin-bottom tooltips" data-original-title="Filter" data-placement="top" data-container="body"><i class="fa fa-search"></i></button>'+
'<button class="btn btn-sm red filter-cancel tooltips" data-original-title="Reset" data-placement="top" data-container="body"><i class="fa fa-times"></i></button>'+
'</div>'+
'</td></tr>'+
'</thead>'+
'<tbody><tr class="odd"><td valign="top" colspan="3" class="dataTables_empty">No data available in table</td></tr></tbody>'+
'</table><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" style="display: none;"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">0</span></div></div><div class="dataTables_length" style="display: none;"><label><span class="seperator" style="display: none;">|</span>View <select name="datatable_ajax_parts_invoice_length" aria-controls="datatable_ajax_parts_invoice" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info">No records found to show</div></div><div class="col-md-4 col-sm-12"></div></div></div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="tab-pane" id="history">'+
'<div class="portlet light bordered">'+
'<div class="portlet-body">'+
'<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 600px;"><div class="scroller" style="height: 600px; overflow: hidden; width: auto;" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd" data-initialized="1">'+
'<!-- History -->'+
'<div class="row">'+
'<div class="col-md-12">'+
'<div class="note note-info" style="margin:10px;">'+
'<div class="col-md-12">'+
'</div>'+
'<div style="clear:both;"></div>'+
'</div>'+                                                             
'</div>'+
'</div>'+
'<div class="row">'+
'<div class="col-md-12">'+
'<div class="note note-info" style="margin:10px;">'+
'<div class="col-md-12">'+
'</div>'+
'<div style="clear:both;"></div>'+
'</div>'+                                                             
'</div>'+
'</div>'+
'<!-- History -->'+
'</div><div class="slimScrollBar" style="background: rgb(161, 178, 189); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: yellow; opacity: 0.2; z-index: 90; right: 1px;"></div></div>'+
'</div>'+
'</div>'+
'</div>'+
'<!-- History Invoice Supplier -->'+
'<div class="tab-pane" id="history_invoice_supplier">'+
'<div class="portlet light bordered">'+
'<div class="portlet-body">'+
'<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 600px;"><div class="scroller" style="height: 600px; overflow: hidden; width: auto;" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd" data-initialized="1">'+
'<div class="row">'+
'<div class="col-md-12">'+
'<div class="note note-info" style="margin:10px;">'+
'<div class="col-md-12">'+
'</div>'+
'<div style="clear:both;"></div>'+
'</div>'+                                                             
'</div>'+
'</div>  '+      
'</div><div class="slimScrollBar" style="background: rgb(161, 178, 189); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: yellow; opacity: 0.2; z-index: 90; right: 1px;"></div></div>'+
'</div>'+
'</div>'+
'</div>'+
'<!-- History Invoice Supplier -->'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</form>'+
'</div>'+
'</div>'+
'<!-- Panel Parts -->'+
'<!-- Panel Photo -->'+
'<div class="tab-pane" id="form_photo">'+
'<div class="row">'+
'<form action="#" class="form-horizontal" id="form-application-photo" method="post" onsubmit="return false">'+
'<div class="form-body">'+
'<input type="hidden" name="app_idphoto" value="135839">'+
'<div class="row">'+
'<div class="portlet box blue" style="margin-left:2.5%;width:95%;">'+
'<div class="portlet-title">'+
'<div class="caption font-white">'+
'<i class="icon-bulb"></i>'+
'<span class="caption-subject bold uppercase"> List Photo </span>'+
'</div>'+
'<div class="actions">'+
'<div class="btn-group" data-getcoord="">'+
'<a class="btn btn-sm red dropdown-toggle" href="javascript:;" data-toggle="dropdown"> Upload'+
'<i class="fa fa-angle-down"></i>'+
'</a>'+
'<ul class="dropdown-menu pull-right">'+
'<li><a href="javascript:;" class="btn-addphoto" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_upload_photo/0/135839/AMC2107928">Photo</a></li><li><a href="javascript:;" class="btn-sync-photo" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/sync_photo">Photo From AMC</a></li>'+
'</ul>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="portlet-body table-responsive">'+
'<div class="col-md-12" style="padding-bottom: 90px;">'+
'<div id="datatable_ajax_photo_wrapper" class="dataTables_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper"><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" id="datatable_ajax_photo_paginate" style="display: none;"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">0</span></div></div><div class="dataTables_length" id="datatable_ajax_photo_length" style="display: none;"><label><span class="seperator" style="display: none;">|</span>View <select name="datatable_ajax_photo_length" aria-controls="datatable_ajax_photo" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info" id="datatable_ajax_photo_info" role="status" aria-live="polite">No records found to show</div></div><div class="col-md-4 col-sm-12"><div class="table-group-actions pull-right"></div></div><div id="datatable_ajax_photo_processing" class="dataTables_processing" style="display: none;">Processing...</div></div><table class="table table-striped table-bordered table-hover dataTable" id="datatable_ajax_photo" aria-describedby="datatable_ajax_photo_info" role="grid">'+
'<thead>'+
'<tr role="row" class="heading"><th width="5px" class="all text-center sorting_disabled" rowspan="1" colspan="1" aria-label="#">#</th><th width="150px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax_photo" rowspan="1" colspan="1" aria-label=" Comment: activate to sort column ascending"> Comment</th><th width="55px" class="text-center sorting" tabindex="0" aria-controls="datatable_ajax_photo" rowspan="1" colspan="1" aria-label=" Photo: activate to sort column ascending"> Photo</th><th width="80px" class="text-center sorting_disabled" rowspan="1" colspan="1" aria-label=" Action"> Action</th></tr>'+
'<tr role="row" class="filter bg-grey-steel"><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<input type="text" class="form-control form-filter input-sm" name="filter_comment">'+
'</td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<div class="text-center">'+
'<button class="btn btn-sm yellow filter-submit margin-bottom tooltips" data-original-title="Filter" data-placement="top" data-container="body"><i class="fa fa-search"></i></button>'+
'<button class="btn btn-sm red filter-cancel tooltips" data-original-title="Reset" data-placement="top" data-container="body"><i class="fa fa-times"></i></button>'+
'</div>'+
'</td></tr>'+
'</thead>'+
'<tbody><tr class="odd"><td valign="top" colspan="4" class="dataTables_empty">No data available in table</td></tr></tbody>'+
'<tfoot>'+
'<tr class="heading"><th class="text-center" rowspan="1" colspan="1"></th><th class="text-left" rowspan="1" colspan="1"></th><th class="text-center" rowspan="1" colspan="1"></th><th class="text-center" rowspan="1" colspan="1">'+
'<a href="javascript:;" class="btn green-seagreen yellow-stripe btn-save-all-photo" data-spk="135839" data-url="spk/manajemen_ajax/save_all_photo"><i class="fa fa-trash"></i><span class="hidden-480">&nbsp;&nbsp;Save All </span></a>'+
'</th></tr>'+
'</tfoot>'+
'</table><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" style="display: none;"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">0</span></div></div><div class="dataTables_length" style="display: none;"><label><span class="seperator" style="display: none;">|</span>View <select name="datatable_ajax_photo_length" aria-controls="datatable_ajax_photo" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info">No records found to show</div></div><div class="col-md-4 col-sm-12"></div></div></div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</form>'+
'</div>'+
'</div>'+
'<!-- Panel Photo -->'+
'<!-- Panel PDF -->'+
'<div class="tab-pane" id="form_pdf">'+
'<div class="row">'+
'<form action="#" class="form-horizontal" id="form-application-parts" method="post" onsubmit="return false">'+
'<div class="form-body">'+
'<input type="hidden" name="app_idpdf" value="135839">'+
'<div class="row">'+
'<div class="portlet box blue" style="margin-left:2.5%;width:95%;">'+
'<div class="portlet-title">'+
'<div class="caption font-white">'+
'<i class="icon-bulb"></i>'+
'<span class="caption-subject bold uppercase"> List PDF </span>'+
'</div>'+
'<div class="actions">'+
'<div class="btn-group" data-getcoord="">'+
'<a class="btn btn-sm red dropdown-toggle" href="javascript:;" data-toggle="dropdown"> Upload'+
'<i class="fa fa-angle-down"></i>'+
'</a>'+
'<ul class="dropdown-menu pull-right">'+
'<li><a href="javascript:;" class="btn-addpdf" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_upload_pdf/0/135839/AMC2107928">PDF</a></li>'+
'</ul>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="portlet-body table-responsive">'+
'<div class="col-md-12" style="padding-bottom: 90px;">'+
'<div id="datatable_ajax_pdf_wrapper" class="dataTables_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper no-footer"><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" id="datatable_ajax_pdf_paginate" style="display: none;"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">0</span></div></div><div class="dataTables_length" id="datatable_ajax_pdf_length" style="display: none;"><label><span class="seperator" style="display: none;">|</span>View <select name="datatable_ajax_pdf_length" aria-controls="datatable_ajax_pdf" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info" id="datatable_ajax_pdf_info" role="status" aria-live="polite">No records found to show</div></div><div class="col-md-4 col-sm-12"><div class="table-group-actions pull-right"></div></div><div id="datatable_ajax_pdf_processing" class="dataTables_processing" style="display: none;">Processing...</div></div><table class="table table-striped table-bordered table-hover dataTable no-footer" id="datatable_ajax_pdf" aria-describedby="datatable_ajax_pdf_info" role="grid">'+
'<thead>'+
'<tr role="row" class="heading"><th width="5px" class="all text-center sorting_disabled" rowspan="1" colspan="1" aria-label="#">#</th><th width="150px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax_pdf" rowspan="1" colspan="1" aria-label=" Note: activate to sort column ascending"> Note</th><th width="55px" class="text-center sorting" tabindex="0" aria-controls="datatable_ajax_pdf" rowspan="1" colspan="1" aria-label=" File: activate to sort column ascending"> File</th><th width="80px" class="text-center all sorting_disabled" rowspan="1" colspan="1" aria-label="Action">Action</th></tr>'+
'<tr role="row" class="filter bg-grey-steel"><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<input type="text" class="form-control form-filter input-sm" name="filter_note">'+
'</td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
'<div class="text-center">'+
'<button class="btn btn-sm yellow filter-submit margin-bottom tooltips" data-original-title="Filter" data-placement="top" data-container="body"><i class="fa fa-search"></i></button>'+
'<button class="btn btn-sm red filter-cancel tooltips" data-original-title="Reset" data-placement="top" data-container="body"><i class="fa fa-times"></i></button>'+
'</div>'+
'</td></tr>'+
'</thead>'+
'<tbody><tr class="odd"><td valign="top" colspan="4" class="dataTables_empty">No data available in table</td></tr></tbody>'+
'</table><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" style="display: none;"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">0</span></div></div><div class="dataTables_length" style="display: none;"><label><span class="seperator" style="display: none;">|</span>View <select name="datatable_ajax_pdf_length" aria-controls="datatable_ajax_pdf" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info">No records found to show</div></div><div class="col-md-4 col-sm-12"></div></div></div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</form>'+
'</div>'+
'</div>'+
'<!-- Panel PDF -->'+
'<!-- History SPK -->'+
'<div class="tab-pane" id="form_history_spk">'+
'<div class="portlet box blue">'+
'<div class="portlet-title">'+
'<div class="caption">'+
'<i class="fa fa-user"></i> History SPK'+
'</div>'+
'</div>'+
'<div class="portlet-body form">'+
'<!-- History -->'+
'<div class="row">'+
'<div class="col-md-12">'+
'<div class="note note-info" style="margin:10px;">'+
'<div class="col-md-12">'+
'</div>'+
'<div style="clear:both;"></div>'+
'</div>'+                         
'</div>'+
'</div>'+
'<!-- History -->'+
'</div>'+
'</div>'+
'</div>'+
'<!-- History SPK -->'+
'<!-- History SPK PDF -->'+
'<div class="tab-pane" id="form_history_spk_pdf">'+
'<div class="portlet box blue">'+
'<div class="portlet-title">'+
'<div class="caption">'+
'<i class="fa fa-user"></i> History SPK (PDF)'+
'</div>'+
'</div>'+
'<div class="portlet-body form">'+
'<!-- History -->'+
'<div class="row">'+
'<div class="col-md-12">'+
'<div class="note note-info" style="margin:10px;">'+
'<div class="col-md-12">'+
'</div>'+
'<div style="clear:both;"></div>'+
'</div>'+                   
'</div>'+
'</div>'+
'<!-- History -->'+
'</div>'+
'</div>'+
'</div>'+
'<!-- History SPK PDF -->'+
'</div>'+
'</div>'+
'</div>';

let d = '<div class="col-md-12">'+
    '<div class="portlet light bordered">'+
        '<div class="portlet-title">'+
            '<div class="caption font-red-sunglo">'+
                '<i class="icon-settings font-red-sunglo"></i>'+
                '<span class="caption-subject bold uppercase"> Own Risk </span>'+
            '</div>'+
        '</div>'+
        '<div class="portlet-body form">'+
            '<form action="#" class="form-horizontal" id="form-application-own-risk" method="post" onsubmit="return false">'+
            '<!-- <form role="form"> -->'+
                '<input type="hidden" name="id_spk" value="136049">'+
                '<input type="hidden" name="min_or" value="0">'+
                '<div class="form-body">'+
                    '<div class="row">'+
                        '<div class="col-md-6">'+
                            '<div class="row">'+
                                '<div class="col-md-10 ConditionSPK">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Estimasi Kerugian</label>'+
                                        '<div class="col-md-6">'+
                                            '<div class="input-icon right">'+
                                                '<i class="fa"></i>'+
                                                '<input placeholder="Estimasi Kerugian" type="text" class="form-control mask_decimal" name="estimasi_kerugian" value="" style="text-align: right;">'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-10">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Kategori </label>'+
                                        '<div class="col-md-6">'+
                                            '<div class="input-icon right">'+
                                                '<i class="fa"></i>'+
                                                '<input placeholder="Jenis OR" type="text" class="form-control" name="kategoriOR" id="kategoriOR" value="" readonly="">'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="col-md-2">'+
                                            '<div class="actions">'+
                                                '<div class="btn-group">'+
                                                    '<a class="btn btn-sm red dropdown-toggle" href="javascript:;" data-toggle="dropdown"> OR'+
                                                        '<i class="fa fa-angle-down"></i>'+
                                                    '</a>'+
                                                    '<ul class="dropdown-menu pull-right">'+
                                                        '<li><a href="javascript:;" class="btn-add-own-risk">Care</a></li><li><a href="javascript:;" class="btn-add-ownrisk" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_list_own_risk/0">Manual</a></li>'+
                                                    '</ul>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-10">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Deskripsi </label>'+
                                        '<div class="col-md-6">'+
                                            '<textarea class="form-control" name="desc_or" rows="2" data-autosize-on="false" readonly=""></textarea>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-10 jenisor">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Jenis OR </label>'+
                                        '<div class="col-md-6">'+
                                            '<div class="input-icon right">'+
                                                '<i class="fa"></i>'+
                                                '<input placeholder="Jenis OR" type="text" class="form-control" name="jenisOR" value="" readonly="">'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-10 kondisi" style="display: none;">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Kondisi OR </label>'+
                                        '<div class="col-md-6">'+
                                            '<div class="input-icon right">'+
                                                '<i class="fa"></i>'+
                                                '<input placeholder="Kondisi OR" type="text" class="form-control" name="kondisi_OR" value="" readonly="">'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-md-6">'+
                            '<div class="row">'+
                                '<div class="col-md-10 orfix">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Jumlah Kejadian </label>'+
                                        '<div class="col-md-1 orfix" style="width:95px;">'+
                                            '<div class="input-icon right">'+
                                                '<i class="fa"></i>'+
                                                '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span><input placeholder="Jumlah Parts " type="text" name="ORKe" class="form-control touchspin_3" value="0" readonly="" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn-vertical"><button class="btn btn-default bootstrap-touchspin-up" type="button"><i class="glyphicon glyphicon-chevron-up"></i></button><button class="btn btn-default bootstrap-touchspin-down" type="button"><i class="glyphicon glyphicon-chevron-down"></i></button></span></div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-10">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Nominal / Persen </label>'+
                                        '<div class="col-md-5">'+
                                            '<div class="input-icon right">'+
                                                '<i class="fa"></i>'+
                                                '<input placeholder="Nominal / Persen" type="text" class="form-control mask_decimal" name="nominalOR" value="" style="text-align: right;">'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-10 ofclaim" style="display: none;">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Of Claim </label>'+
                                        '<div class="col-md-6">'+
                                            '<div class="input-icon right">'+
                                                '<i class="fa"></i>'+
                                                '<input placeholder="Of Claim" type="text" class="form-control mask_decimal" name="ofclaim_or" value="" readonly="" style="text-align: right;">'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-10 oftsi" style="display: none;">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Of TSI </label>'+
                                        '<div class="col-md-6">'+
                                            '<div class="input-icon right">'+
                                                '<i class="fa"></i>'+
                                                '<input placeholder="Of TSI" type="text" class="form-control mask_decimal" name="oftsi_or" value="" readonly="" style="text-align: right;">'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-10">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Owner Risk (Rp) </label>'+
                                        '<div class="col-md-6">'+
                                            '<div class="input-icon right">'+
                                                '<i class="fa"></i>'+
                                                '<input placeholder="Owner Risk (Rp)" type="text" class="form-control mask_decimal" name="owner_risk" value="300000" readonly="" style="text-align: right;">'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="col-md-2">'+
                                            '<a href="javascript:;" class="btn blue btn-calculate" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_list_own_risk/0" style="pointer-events: none; cursor: default;">Calculate</a>'+
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