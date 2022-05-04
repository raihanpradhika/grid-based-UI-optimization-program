let deployed_view = {
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
            '<input type="hidden" name="id_spk" value="136064">'+
            '<div class="form-body">'+
                '<div class="row">'+
                    '<div class="col-md-6">'+
                        '<div class="row">'+
                            '<div class="col-md-10 asuransi" style="pointer-events: none; cursor: default;">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Asuransi</label>'+
                                    '<div class="col-md-8">'+
                                        '<select id="asuransi" name="asuransi" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                            '<option value="9001" selected="selected">PT ASURANSI ADIRA DINAMIKA, Tbk</option><option value="9003">PT Zurich General Takaful Indonesia</option>'+       
                                        '</select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-asuransi-container"><span class="select2-selection__rendered" id="select2-asuransi-container" title="PT ASURANSI ADIRA DINAMIKA, Tbk"><span class="select2-selection__clear">×</span>PT ASURANSI ADIRA DINAMIKA, Tbk</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Ticket No</label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Ticket No" type="text" class="form-control" name="ticket_no" value="AMC21071176" readonly="">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Car Police No </label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Car Police No" type="text" class="form-control" name="car_police_no" value="DN1390NP" readonly="">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Claim No </label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Claim No" type="text" class="form-control" name="claim_no" value="2352132101556" readonly="">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Policy No </label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Policy No" type="text" class="form-control" name="policy_no" value="S515220000040" readonly="">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Certificated No </label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Certificated No" type="text" class="form-control" name="certificated_no" value="" readonly="">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10" style="pointer-events: none;cursor: default;">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Rawat Jalan </label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="checkbox-list">'+
                                            '<label>'+
                                                '<input type="checkbox" id="rawat_jalan" name="rawat_jalan" value="1">'+
                                            '</label>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10" style="pointer-events: none;cursor: default;">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Wait for Sparepart</label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="checkbox-list">'+
                                            '<label>'+
                                                '<input type="checkbox" id="wait_sparepart" name="wait_sparepart" value="1">'+
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
                                    '<label class="control-label col-md-4">Current Status</label>'+
                                    '<div class="col-md-8">'+
                                        '<select id="spk_status" name="spk_status" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                            '<option value="">--All SPK Status--</option>'+
                                            '<option value="PICK UP">PICK UP</option><option value="UNIT IN">UNIT IN</option><option value="PREDEPLOYED">PREDEPLOYED</option><option value="NEW" selected="selected">NEW</option><option value="ACCEPTED">ACCEPTED</option><option value="BONGKAR">BONGKAR</option><option value="LAS KETOK">LAS KETOK</option><option value="DEMPUL">DEMPUL</option><option value="EPOXY">EPOXY</option><option value="CAT">CAT</option><option value="POLES">POLES</option><option value="FINISHING">FINISHING</option><option value="WORK DONE">WORK DONE</option><option value="DELIVERED">DELIVERED</option><option value="WAITING">WAITING</option><option value="REJECTED">REJECTED</option><option value="TLA">TLA</option>                                                        </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-spk_status-container"><span class="select2-selection__rendered" id="select2-spk_status-container" title="NEW"><span class="select2-selection__clear">×</span>NEW</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Document</label>'+
                                    '<div class="col-md-8">'+
                                        '<select name="document_status" id="document_status" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                            '<option value="">--All Document--</option>'+
                                            '<option value="COMPLETED">COMPLETED</option><option value="NOTCOMPLETED">NOT COMPLETED</option>                                                        </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-document_status-container"><span class="select2-selection__rendered" id="select2-document_status-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
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
                                            '<option value="NEW" selected="selected">BARU</option><option value="REVISI">REVISI</option>                                                        </select><span class="select2 select2-container select2-container--bootstrap select2-container--disabled" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-labelledby="select2-kondisi_spk-container"><span class="select2-selection__rendered" id="select2-kondisi_spk-container" title="BARU"><span class="select2-selection__clear">×</span>BARU</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">SPK Date </label>'+
                                    '<div class="col-md-4">'+
                                        '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
                                            '<input type="text" name="spk_date" class="form-control" value="19-07-2021" readonly="">'+
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
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Progress" type="text" class="form-control" name="progress" value="5" readonly="">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                            '<div class="form-group">'+
                                '<label class="control-label col-md-4">Payment Status</label>'+
                                '<div class="col-md-8">'+
                                    '<div class="input-icon right">'+
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
                '<input type="hidden" name="app_id_workshop" value="136064">'+
                '<div class="row">'+
                    '<div class="col-md-6">'+
                        '<div class="row">'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Workshop Name Initial</label>'+
                                    '<div class="col-md-8">'+
                                        '<textarea class="form-control" name="workshop_name_initial" rows="2" data-autosize-on="false" readonly="">KARYA MANDIRI PALU (BENGKEL AUTOCILLIN GARAGE)  </textarea>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Workshop Address Initial</label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Workshop Address Initial" type="text" class="form-control" name="workshop_address_initial" value="JL.KARAJA LEMBAH LRG.ANGGREK NO.09.  RT.017RW 004 DESA MPANU KEC.SIGITBIROMARU KAB.SIGI-PALU SULAWESI TENGAH" readonly="">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Workshop Region Initial</label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Workshop Region Initial" type="text" class="form-control" name="workshop_region_initial" value="" readonly="">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">CARE Workshop ID</label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="CARE Workshop ID" type="text" class="form-control" name="care_id" value="D02KA00114" readonly="">'+
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
                                    '<label class="control-label col-md-4">Workshop [Target]</label>'+
                                    '<div class="col-md-8">'+
                                        '<select id="target_workshop" name="target_workshop" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                            '<option value="">--All Workshop--</option>'+
                                            '<option value="1385">AUTO FOCUS / PT.TRIKARYA ABADI SEJAHTERA</option><option value="1128">PAINT AUTO REPAIR - CV SUKSES MAKMUR ABADI</option><option value="1143">KARYA MURNI SENTOSA SEHA</option><option value="1155">METRO MOTOR</option><option value="1399">BESTINDO CAR UTAMA</option><option value="1400">EKA AUTO SERPONG / MOTOREKO</option><option value="1407">EKA AUTO KARAWACI / MOTOREKO</option><option value="1500">KARYA MURNI SENTOSA JOGLO</option><option value="1181">ANGKASA MAJU BERSAMA VARIASI (BENGKEL REKANAN NON AUTHORIZED)</option><option value="1234">MOLINDO INTI PERKASA</option><option value="1261">KARYA PRIMA MEDAN</option><option value="1323">BENGKEL ZUL</option><option value="1034">MEGALOS AUTO CEMERLANG</option><option value="1190">CEMERLANG TULUS PRATAMA (AUTOCILLIN GARAGE)</option><option value="1509">NEW AUTOREP (AUTOCILLIN GARAGE)</option><option value="1185">TEST BENGKEL 4</option><option value="1006">ASTRA DAIHATSU BALIKPAPAN</option><option value="1010">INDRA JAYA</option><option value="1012">PERDANA BALIKPAPAN</option><option value="1016">PRO MOTOR</option><option value="1024">ASTRA DAIHATSU BANDUNG 2</option><option value="1025">ASTRA DAIHATSU CIBEUREUM BANDUNG</option><option value="1035">MENTARI CAHAYA UTAMA</option><option value="1036">NEO MEGAH JAYA</option><option value="1048">AUTO BODY SHOP</option><option value="1049">ASTRA DAIHATSU BANJARMASIN</option><option value="1050">AUTOSERVICE DELTA NIAGA BANJARMASIN</option><option value="1051">MITRA ABADI MOTOR</option><option value="1059">ANDHIKA MOTOR (BENGKEL REKANAN NON AUTHORIZED)</option><option value="1066">JAYA MAS MAKMUR - PT. TONITA GROUP</option><option value="1081">SPEED</option><option value="1084">ASTRA DAIHATSU BOGOR YASMIN</option><option value="1094">MAZDA CIBUBUR</option><option value="1098">ANEKA WARNA PT. (BENGKEL REKANAN NON AUTHORIZED)</option><option value="1106">ASTRA DAIHATSU CIREBON</option><option value="1108">AUTO KOOL PRIMA</option><option value="1113">AGUNG AUTOMALL TABANAN (BENGKEL REKANAN AUTHORIZED)</option><option value="1115">ASTRA DAIHATSU DENPASAR 1</option><option value="1120">KARYA MANDIRI BALI 1</option><option value="1165">ASTRA ISUZU PRAMUKA</option><option value="1169">ASTRA BMW</option><option value="1175">KARYA MURNI SENTOSA CAB. CAKUNG</option><option value="1177">DELTA OTOMOTIF</option><option value="1212">HAR MOTOR</option><option value="1242">KHARISMA PUTRA MALANG</option><option value="1255">ASTRA ISUZU MEDAN</option><option value="1260">K2 MOBIL</option><option value="1263">LEO OTOMOTIF ABADI /MEDAN 2</option><option value="1267">TEKUN JAYA</option><option value="1276">BENTENG UTAMA MOTOR</option><option value="1279">KARYA MURNI SENTOSA CAB PADANG</option><option value="1281">STELLINDO MOTOR PADANG</option><option value="1283">ISTANA MOBIL</option><option value="1285">AUTOSERVICE DELTA NIAGA PALANGKARAYA</option><option value="1288">AMAN PALEMBANG  ( BENGKEL REKANAN NON AUTHORIZED )</option><option value="1290">ASTRA ISUZU PALEMBANG</option><option value="1294">KEMUNING JAYA</option><option value="1304">AUTOSERVICE DELTA NIAGA PANGKALANBUN</option><option value="1312">GT AUTO</option><option value="1316">CV. AUTO BLITZ</option><option value="1320">LEO OTOMOTIF PEKANBARU</option><option value="1322">SEJAHTERA BUANA TRADA PEKANBARU</option><option value="1326">AJ MOTOR  PONTIANAK ( AUTOCILLIN GARAGE )</option><option value="1341">ANTO JAYA MANDIRI / AJM (BENGKEL REKANAN NON AUTHORIZED)</option><option value="1344">AUTO SEJAHTERA</option><option value="1347">TRINITY AUTO</option><option value="1351">ASTRA ISUZU SEMARANG</option><option value="1363">SATRIA JAYA</option><option value="1368" selected="selected">KARYA MANDIRI PALU</option><option value="1379">KARYA MANDIRI SURABAYA</option><option value="1413">EKA AUTO BINTARO/ MOTOREKO</option><option value="1418">AMAN BERKAT MOTOR (BENGKEL REKANAN NON AUTHORIZED)</option><option value="1421">ASTRA DAIHATSU  TEGAL</option><option value="9999">BENGKEL TEST ONLY</option><option value="1501">KARYA MURNI SENTOSA CORPORATE</option><option value="1502">KARYA MANDIRI BALI 2</option><option value="1503">KARYA MANDIRI GLOBAL</option><option value="1504">SUMBER TEKNIK JAMBI</option><option value="1505">MEGALOS AUTOCEMERLANG CIANJUR</option><option value="1508">BENINDO ANUGRAH SENTOSA</option><option value="1511">GLOBAL MOBIL INDONESIA</option><option value="1512">BIZCON MOBILINDO SUKSES (BENGKEL REKANAN NON AUTHORIZED)</option><option value="1513">BESTINDO JAYA ABADI (AUTOCILLIN GARAGE)</option><option value="1514">KARYA MANDIRI MAKASSAR (AUTOCILLIN GARAGE)</option><option value="1515">KARYA MANDIRI MANADO (AUTOCILLIN GARAGE)</option><option value="1060">SUBUR JAYA MOTOR SERANG</option><option value="1072">KARYA MURNI SENTOSA</option><option value="1092">JAYA SATRIA METALINDO / JSM</option><option value="1105">ANUGRAH MOTOR ( BENGKEL REKANAN NON AUTHORIZED )</option><option value="1160">TRIAS SENABHAKTI</option><option value="1414">GLASSINDO MOBIL UTAMA</option><option value="1507">GLASSINDO KEBAYORAN LAMA</option><option value="1506">ALAM SURYA PUTRA (AUTOCILLIN GARAGE)</option><option value="1510">KARYA MURNI SENTOSA BSD</option><option value="1319">JAYA BERSAMA</option><option value="1001">CV. KOMBOS AMBON</option><option value="1002">NENGMEYPRATAMA MALUT MALUKU</option><option value="1003">PANJI WIN DJAYA MOTOR</option><option value="1004">TOP MOTOR</option><option value="1005">NEW GENERAL BALI</option><option value="1007">ASTRA ISUZU BALIKPAPAN</option><option value="1008">AUTO 2000 BALIKPAPAN</option><option value="1009">IMOLA MOTOR</option><option value="1011">OTOMOTIF BALIKPAPAN</option><option value="1013">GIFA MANDIRI</option><option value="1014">DUNIA BARUSA</option><option value="1015">CAPELLA BODY CENTRE ACEH- ISUINDOMAS PUTRA</option><option value="1017">AUTO DESIGN</option><option value="1018">HONDA LAMPUNG RAYA - PT. ISTANA LAMPUNG RAYA</option><option value="1019">KAWAN MAJU BANDAR LAMPUNG</option><option value="1020">LAUTAN BERLIAN UTAMA MOTOR</option><option value="1021">MAHKOTA KARYA SENTOSA - M21</option><option value="1022">MONTE CARLO LAMPUNG</option><option value="1023">ASIA PITSTOP</option><option value="1026">ASTRA ISUZU SOEKARNO HATTA BANDUNG</option><option value="1027">AUTO 2000 BANDUNG</option><option value="1028">CEMERLANG ABADI</option><option value="1029">CITRAKARYA PRANATA BANDUNG</option><option value="1030">GARUDA MOTOR</option><option value="1031">HONDA BANDUNG CENTER - PT. ISTANA BANDUNG RAYA MOTOR</option><option value="1032">IMPERIAL PUTRA PERDANA - HONDA A YANI</option><option value="1033">MAZDA BANDUNG - PT SUMBER TRADA MOBILINDO</option><option value="1037">NISSAN SOEKARNO HATTA BANDUNG - PT INDOSENTOSA TRADA</option><option value="1038">NISSAN VETERAN BANDUNG - PT. WAHANA SUN HUTAMA</option><option value="1039">NUSANTARA JAYA SENTOSA / NJS</option><option value="1040">OTTO SERVICE</option><option value="1041">PANEL 1</option><option value="1042">SAPPHIRE BODY &amp; PAINT BANDUNG</option><option value="1043">SONIC AUTO CENTER</option><option value="1044">WICAKSANA BERLIAN MOTOR</option><option value="1045">KARYA AGUNG BANGKA</option><option value="1046">JAYA PRATAMA</option><option value="1047">UNIVERSAL MOTORS</option><option value="1052">MITRA MEGAH PROFITAMAS</option><option value="1053">NUSANTARA INDAH BANJARMASIN</option><option value="1054">PT. ISTANA MOBIL TRIO MOTOR/HONDA TRIO MOTOR</option><option value="1055">SUMBER REZEKI MOTOR</option><option value="1056">WIRA MEGAH PROFITAMAS BANJARMASIN</option><option value="1057">AUTO 2000 SERANG</option><option value="1058">FORD TANGERANG - PT. KREASI AUTO KENCANA</option><option value="1061">FOCUZZ</option><option value="1062">INDO SURYA PERKASA GEMILANG</option><option value="1063">FUSION MOTOR - ORIENTAL KOMOBINDO</option><option value="1064">GAMA</option><option value="1065">INDOMOBIL BATAM</option><option value="1067">SAHABAT BATURAJA</option><option value="1068">ASTRA DAIHATSU NAROGONG</option><option value="1069">AUTO 2000 BEKASI BODY REPAIR</option><option value="1070">DIAN MOBIL</option><option value="1071">HONDA CIKARANG - PT. PROSPECT MOTOR</option><option value="1073">LAYANAN PRIMA SETIA JAYA</option><option value="1074">NARA CITRA OTOWARNA</option><option value="1075">PT. ANZON AUTO LESTARI</option><option value="1076">PT. CIBUBUR INDAH MOTOR</option><option value="1077">SUN STAR MOTOR</option><option value="1078">DEWI FALINDO</option><option value="1079">SUNDA MOTOR</option><option value="1080">TEST BENGKEL 3</option><option value="1082">CV BORNEO AUTO</option><option value="1083">CV. KOMBOS BIAK</option><option value="1085">ASTRA ISUZU BOGOR</option><option value="1086">AUTO 2000 YASMIN BOGOR</option><option value="1087">AUTO SINAR MAKMUR</option><option value="1088">BRAYAT KRETYA ANDARU</option><option value="1089">CV. TAJUR MOTOR</option><option value="1090">EKA MOTOR SERVICE</option><option value="1091">INTERNUSA CIBINONG</option><option value="1093">MANDIRI PERWIRA RAYA MOTOR</option><option value="1095">PLAZA AUTO PRIMA</option><option value="1096">SANDJAJA MOTOR BOGOR</option><option value="1097">NUR AUTO SOLUTION</option><option value="1099">NASMOCO BREBES</option><option value="1100">DUA TIGA EMPAT - BUKITTINGGI</option><option value="1101">NISSAN CIBUBUR - PT WAHANA PERSADA JAKARTA</option><option value="1102">SEJAHTERA BUANA TRADA LIPPO CIKARANG</option><option value="1103">ARMADA INTERNATIONAL MOTOR CILACAP</option><option value="1104">NASMOCO CILACAP</option><option value="1107">AUTO 2000 CIREBON</option><option value="1109">CINTA DAMAI PUTRA BAHAGIA</option><option value="1110">HONDA LPPM CIREBON</option><option value="1111">MULYA PUTRA KENCANA</option><option value="1112">SELECTA GRAGE JAYA</option><option value="1114">ASTRA BMW DENPASAR</option><option value="1116">AUTO 2000 DENPASAR</option><option value="1117">AUTO METALLIC GIANYAR</option><option value="1118">BUMEN REDJA ABADI, BALI</option><option value="1119">HONDA DEWATA MOTOR WITH PPN</option><option value="1121">KHARISMA SEJAHTERA DEWATA</option><option value="1122">PANJI LARAS DENPASAR</option><option value="1123">PARAMITHA ANUGERAH GOVINDA /PAG</option><option value="1124">PRIMADADI MOTOR</option><option value="1125">SEJAHTERA INDOBALI TRADA</option><option value="1126">DUTA BIMA NUSANTARA</option><option value="1127">HONDA PRADANA SAWANGAN</option><option value="1129">SETIA JAYA MOBILINDO</option><option value="1130">CV. KOMBOS  GORONTALO</option><option value="1131">ARINA PARAMA JAYA/ PT. ARINA PARAMA JAYA (BENGKEL REKANAN AUTHORIZED)</option><option value="1132">HERO PALMERAH MOTOR</option><option value="1133">LIDO JAYA PERKASA</option><option value="1134">NEW BERINGIN MOTOR</option><option value="1135">PANCA JAYA</option><option value="1136">PT. METRO AUTO KEDOYA</option><option value="1137">PT. MOBILINDO PUTRA SENTOSA - B2M</option><option value="1138">RELIEF ESA JAYA MAKMUR</option><option value="1139">ASTRA DAIHATSU JAYAKARTA</option><option value="1140">AUTO SERVICE CEMPAKA PUTIH</option><option value="1141">BUMEN REDJA ABADI, JAKARTA</option><option value="1142">HONDA TEBET - PT. SETIANITA MEGAH MOTOR</option><option value="1144">TUNAS RIDEAN BINTARO</option><option value="1145">TUNAS RIDEAN CIPUTAT</option><option value="1146">ASTRA BMW TB SIMATUPANG</option><option value="1147">ASTRA ISUZU BUNCIT</option><option value="1148">AUTO 2000 CILEDUG ADAM MALIK</option><option value="1149">CENTRO</option><option value="1150">EUROKARS PORSCHE</option><option value="1151">FAJAR SURYA MOTOR</option><option value="1152">ISTANA KEBAYORAN RAYA MOTOR FATMAWATI</option><option value="1153">ISTANA KEBAYORAN RAYA MOTOR PONDOK INDAH</option><option value="1154">MERCINDO AUTORAMA</option><option value="1156">NICO AUTO BODY REPAIR</option><option value="1157">NISSAN POS PENGUMBEN - PT. INDOBUANA AUTO RAYA</option><option value="1158">NISSAN WARUNG BUNCIT JAKARTA - PT WAHANA SENJAYA</option><option value="1159">PT. BUANA SAKTI ANEKA MOTOR</option><option value="1161">TRIDAYA EXCELLENT CIPTA SARANA</option><option value="1162">SEJAHTERA BUANA TRADA</option><option value="1163">HONDA MEGATAMA - PT. MEGATAMA MANDIRI</option><option value="1164">ARISTA SUKSES MANDIRI</option><option value="1166">CITRA SIMA</option><option value="1167">TUNAS RIDEAN RADIN INTEN</option><option value="1168">AUTO 2000 SUNTER</option><option value="1170">ASTRA BMW PLUIT</option><option value="1171">ASTRA DAIHATSU PLUIT</option><option value="1172">AUTO GLASS INDONESIA</option><option value="1173">AYUN JAYA MOTOR PT.</option><option value="1174">HONDA SUNTER</option><option value="1176">PT. ASTRA INTERNATIONAL - PEUGEOT</option><option value="1178">HANDIL MOTOR</option><option value="1179">HONDA WILTOP AUTO</option><option value="1180">TRIJAYA JAMBI</option><option value="1182">BENGKEL MOBIL WIJAYA</option><option value="1183">CV. KOMBOS JAYAPURA</option><option value="1184">INTI LOGAM</option><option value="1186">AUTO 2000 JEMBER</option><option value="1187">TOP MOBIL JEMBER</option><option value="1188">TUNAS REMAJA</option><option value="1189">AUTO 2000 KARAWANG</option><option value="1191">HONDA KUMALA KARAWANG</option><option value="1192">ISUZU KARAWANG</option><option value="1193">SINAR SURYA MOTOR</option><option value="1194">BUMEN REDJA ABADI, KEBUMEN</option><option value="1195">TEST BENGKEL 2</option><option value="1196">ASTRA DAIHATSU KEDIRI</option><option value="1197">AUTO 2000  KEDIRI</option><option value="1198">HONDA PACIFIC MOTOR, UD</option><option value="1199">TOP MOBIL KEDIRI</option><option value="1200">BENGKEL WAHYU</option><option value="1201">CAHAYA GRATIA PRATAMA</option><option value="1202">MEGAH PUTRA KENDARI</option><option value="1203">PERDANA MOBIL UTAMA</option><option value="1204">PT. HADJI KALLA KENDARI</option><option value="1205">AUTO MOBIL JAYA KETAPANG</option><option value="1206">PT. HADJI KALLA KOLAKA</option><option value="1207">CV. KOMBOS KOTAMOBAGU</option><option value="1208">HONDA KUDUS JAYA - PT. KUDUS JAYA MOTOR</option><option value="1209">OTO ONDERDIL</option><option value="1210">SURYA INDAH KUPANG</option><option value="1211">DWI KARYA MANDIRI</option><option value="1213">SAHABAT LAHAT</option><option value="1214">ASTRA DAIHATSU LAMPUNG</option><option value="1215">AUTO 2000 TANJUNG KARANG / WAY HALIM</option><option value="1216">PERSADA LAMPUNG RAYA</option><option value="1217">BUDI BERLIAN MOTOR LAMPUNG</option><option value="1218">SAHABAT LUBUK LINGGAU</option><option value="1219">CV. KOMBOS LUWUK</option><option value="1220">ASDASD</option><option value="1221">SURYA INDAH - MADIUN</option><option value="1222">ARMADA INTERNATIONAL MOTOR MAGELANG</option><option value="1223">BUMEN REDJA ABADI, MAGELANG</option><option value="1224">NASMOCO  MAGELANG</option><option value="1225">ASTRA BMW MAKASAR</option><option value="1226">FAISAL</option><option value="1227">FARHAN</option><option value="1228">HADJI KALLA URIP</option><option value="1229">PUTRA BUGIS MAKASAR</option><option value="1230">ASTRA DAIHATSU MAKASSAR</option><option value="1231">ASTRA ISUZU MAKASSAR</option><option value="1232">HONDA SANGGAR LAUT SELATAN</option><option value="1233">KARYA BARU</option><option value="1235">PT. MAKASSAR INDAH MOTOR</option><option value="1236">SMILE AUTO SERVICE MAKASSAR</option><option value="1237">ASTRA DAIHATSU MALANG</option><option value="1238">AUTO 2000 MALANG - SUPRIADI</option><option value="1239">HONDA MANDALASENA</option><option value="1240">HONDA SUKUN /BINTANG ARTHA GUNA</option><option value="1241">JUANDA MOTOR GROUP</option><option value="1243">KOKO MALANG</option><option value="1244">TOP MOBIL MALANG &amp; PROBOLINGGO</option><option value="1245">HARDY MANDIRI JAYA MAMUJU</option><option value="1246">YASDI PUTRA MOTOR</option><option value="1247">ASTRA DAIHATSU MANADO</option><option value="1248">CV. KOMBOS MANADO</option><option value="1249">DODOK HALUS</option><option value="1250">KAWANUA SEJATI</option><option value="1251">ROMAS MOTOR</option><option value="1252">SURYA WINANGUN</option><option value="1253">GALERY SERVICE STATION</option><option value="1254">ASTRA DAIHATSU MEDAN</option><option value="1256">AUTO 2000 SISINGAMANGARAJA MEDAN</option><option value="1257">AUTO STAR</option><option value="1258">CAPELLA BODY CENTRE MEDAN - ISUINDOMAS PUTRA</option><option value="1259">HONDA ISTANA DELI KENCANA</option><option value="1262">KREATIF ABADI SENTOSA</option><option value="1264">MAJU OTOMOTIF</option><option value="1265">PASS MEDAN</option><option value="1266">SUMATERA BERLIAN MOTORS</option><option value="1268">TRANS SERVICE</option><option value="1269">ASTRA DAIHATSU MEDAN KRAKATAU</option><option value="1270">CV. KOMBOS MERAUKE</option><option value="1271">RONA RAYA/AUTO STAR</option><option value="1272">CV. KOMBOS NABIRE</option><option value="1273">RANDY BROTHERS</option><option value="1274">ASTRA DAIHATSU PADANG</option><option value="1275">AUTO 2000 BYPASS PADANG</option><option value="1277">CAPELLA MEDAN  CAB. PADANG</option><option value="1278">GAJAH MOTOR</option><option value="1280">PRIMATAMA KARYA CEMERLANG</option><option value="1282">TUNAS INTERCOM - INTERMOBIL</option><option value="1284">PARSARIRAN MOTOR</option><option value="1286">ISTANA MOBIL TRIO RAYA</option><option value="1287">ORCHID MOTOR</option><option value="1289">ASTRA DAIHATSU PALEMBANG</option><option value="1291">AUTO 2000 PALEMBANG</option><option value="1292">CITRA JAYA PALEMBANG</option><option value="1293">CITRA TEHNIK PALEMBANG</option><option value="1295">LAKSHMI MOTOR</option><option value="1296">NUSANTARA ANDALAS MOTOR - MAZDA PALEMBANG</option><option value="1297">PT MAJU MOBILINDO (HONDA MAJU MOTOR TANJUNG API - API)</option><option value="1298">HARDY MANDIRI JAYA PALOPO</option><option value="1299">CV. KOMBOS PALU DURIAN</option><option value="1300">DOMIKADO TATA AUTO</option><option value="1301">RAHMAT JAYA</option><option value="1302">SINAR KARYA</option><option value="1303">HADJI KALLA PALU</option><option value="1305">PT. HADJI KALLA PARE - PARE</option><option value="1306">NASMOCO PATI</option><option value="1307">ASTRA DAIHATSU PEKALONGAN</option><option value="1308">ESA SAGARA AUTOTARA</option><option value="1309">HONDA PEKALONGAN MOTOR - PT. BANGUN TRIPATRIAJATI</option><option value="1310">NASMOCO PEKALONGAN</option><option value="1311">ASTRA DAIHATSU PEKAN BARU</option><option value="1313">CAPELLA BODY CENTRE PEKANBARU - ISUINDOMAS PUTRA</option><option value="1314">CAPELLA MEDAN CAB. PEKANBARU</option><option value="1315">CIPTA PRIMA MOBIL PEKANBARU</option><option value="1317">EKA PRIMA PEKANBARU</option><option value="1318">HONDA ARISTA SUDIRMAN</option><option value="1321">RAMA MOTOR</option><option value="1324">CAPELLA MEDAN CAB. PEMATANG SIANTAR</option><option value="1325">HARDY MANDIRI JAYA POLEWALI	</option><option value="1327">ASTRA DAIHATSU PONTIANAK</option><option value="1328">ATIE MOTOR</option><option value="1329">AUTO MOBIL JAYA PONTIANAK</option><option value="1330">SINAR SURYA</option><option value="1331">ZEBE TOKOROZAWA MOTOR</option><option value="1332">AUTO 168</option><option value="1333">ARMADA INTERNATIONAL MOTOR PURWOKERTO</option><option value="1334">BERDIKARI AUTOBODY REPAIR</option><option value="1335">HONDA SUMBER PURWOKERTO</option><option value="1336">ISTANA CARINDO</option><option value="1337">NASMOCO PURWOKERTO</option><option value="1338">ANUGRAH DELTA SEJAHTERA (BENGKEL REKANAN NON AUTHORIZED)</option><option value="1339">HONDA SALATIGA JAYA - PT. SALATIGA JAYA MOTOR</option><option value="1340">SINERGI</option><option value="1342">ASTRA DAIHATSU SAMARINDA</option><option value="1343">AUTO 2000 SAMARINDA</option><option value="1345">SERBA MULIA AUTO</option><option value="1346">SINAR ANUGERAH BORNEO</option><option value="1348">MITRA PUTRA PROFITAMAS / SUZUKI SAMPIT</option><option value="1349">ASTRA BMW SEMARANG</option><option value="1350">ASTRA DAIHATSU SEMARANG</option><option value="1352">BINTANG UTAMA SEMARANG</option><option value="1353">BUMEN REDJA ABADI, SEMARANG</option><option value="1354">C-MAESTRO</option><option value="1355">EKA AUTO SEMARANG / MOTOREKO</option><option value="1356">ISTANA CENDRAWASIH MOTOR</option><option value="1357">KARYA ZIRANG UTAMA</option><option value="1358">MANDALATAMA ARMADA MOTOR PT</option><option value="1359">MANDALATAMA ARMADA MOTOR, PT</option><option value="1360">NASMOCO  KALIGAWE SEMARANG</option><option value="1361">NASMOCO KARANGJATI MOTOR</option><option value="1362">PT. ISTANA KUSUMA INDAH MOTOR - HONDA KUSUMA</option><option value="1364">SERODJA SEMARANG</option><option value="1365">BUMEN REDJA ABADI, SIDOARJO</option><option value="1366">CENTRAL AUTOFLOX SHOP</option><option value="1367">GP AUTOMOBILE</option><option value="1369">ASTRA DAIHATSU SOLO</option><option value="1370">ASTRA ISUZU SOLO</option><option value="1371">EKA BUDI AUTO PERKASA SOLO</option><option value="1372">HONDA SOLO BARU - PT. BINTANG PUTRA MOBILINDO</option><option value="1373">MANDIRI MOTOR SOLO</option><option value="1374">MITRA PRATAMA MOBILINDO</option><option value="1375">MONTE CARLO SOLO</option><option value="1376">CV. KOMBOS SORONG</option><option value="1377">SURYA KENCANA</option><option value="1378">CIPENDAWA MOTOR</option><option value="1380">ARMADA INTERNATIONAL MOTOR SURABAYA</option><option value="1381">ASTRA BMW SURABAYA</option><option value="1382">ASTRA DAIHATSU WARU SIDOARJO</option><option value="1383">ASTRA ISUZU WARU SIDOARJO</option><option value="1384">AUTO 2000 KENJERAN - SURABAYA</option><option value="1386">FIGO BODY REPAIR</option><option value="1387">HONDA CITRA CAKRA</option><option value="1388">HONDA JEMUR SARI - PT. CITRA CAKRA PERSADA</option><option value="1389">KARSTEN SURABAYA</option><option value="1390">KARYA AGUNG SIDOARJO &amp; GRESIK</option><option value="1391">M MISCHAN</option><option value="1392">PLUS JAYA MANDIRI</option><option value="1393">SAFARI UTAMA</option><option value="1394">SEJAHTERA BUANA TRADA KENJERAN</option><option value="1395">UTOMO INTERNATIONAL / HONDA PLAZA TUBAN</option><option value="1396">BINTANG AUTO SEMESTA / HONDA CIMONE</option><option value="1397">ASTRA BMW SERPONG</option><option value="1398">AUTO 2000 PASAR KEMIS</option><option value="1401">HONDA GADING PRIMA PERKASA BINTARO</option><option value="1402">HONDA PRADANA</option><option value="1403">NUSANTARA BATAVIA MOTOR - MAZDA CIKOKOL</option><option value="1404">SMS AUTO SERVICE - SUTRACO MITRA SEJATI</option><option value="1405">TRIMEGAH AUTO PLAZA</option><option value="1406">AUTO 2000 PONDOK JAGUNG</option><option value="1408">KARYA ZIRANG UTAMA TANGGERANG</option><option value="1409">NOVA TRI JAYA</option><option value="1410">PT. ASTRA DAIHATSU CILEDUG</option><option value="1411">LAYANAN PRIMA SEJAHTERA</option><option value="1412">CAKRAWALA AUTOMOTIF RABHASA</option><option value="1415">MITRA KARYA SUBUR</option><option value="1416">MITRA PINASTHIKA MUSTIKA RENT</option><option value="1417">MANGGALA JAYA SAKTI</option><option value="1419">SUMBER HARAPAN</option><option value="1420">SINAR CEMERLANG</option><option value="1422">HERRY BODY REPAIR</option><option value="1423">HONDA TEGAL RAYA - PT. DOVA PUTRA MANUNGGAL SEJATI</option><option value="1424">KENCANA ABADI</option><option value="1425">CV. KOMBOS TIMIKA</option><option value="1426">HELIOS</option><option value="1427">HONDA ANUGERAH KASIH PUTRA</option><option value="1428">NASMOCO BAHANA MOTOR</option><option value="1429">ARMADA INTERNATIONAL MOTOR YOGYAKARTA</option><option value="1430">ASTRA DAIHATSU YOGYAKARTA</option><option value="1431">ATLANTA - FORMULA PRIMA AUTOSINDO</option><option value="1432">GRAND STAR YOGYAKARTA</option><option value="1433">HONDA TUGU - PT. TUGU MOTOR</option><option value="1434">NEW GENERAL MOTOR YOGYAKARTA</option><option value="1435">SUMBER BARU PERKASA CV</option><option value="1516">ASTRA ISUZU YOGYAKARTA</option>                                                                </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-target_workshop-container"><span class="select2-selection__rendered" id="select2-target_workshop-container" title="KARYA MANDIRI PALU"><span class="select2-selection__clear">×</span>KARYA MANDIRI PALU</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Workshop [Target] Variant</label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Workshop [Target] Variant" type="text" class="form-control" name="workshop_variant" value="AutocillinGarage" readonly="">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Workshop [Target] Address</label>'+
                                    '<div class="col-md-8">'+
                                        '<textarea class="form-control" name="workshop_address" rows="2" data-autosize-on="false" readonly="">JL.Karaja Lembah, Lrg. Anggrek, No.9, RT17/RW04, Desa Mpanu, Kab.Sigi, Palu, Sul-Tengah</textarea>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Workshop [Target] City</label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Workshop Address Initial" type="text" class="form-control" name="workshop_city" value="PALU" readonly="">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-10">'+
                                '<div class="form-group">'+
                                    '<label class="control-label col-md-4">Workshop [Target] Supplier Default</label>'+
                                    '<div class="col-md-8">'+
                                        '<div class="input-icon right">'+
                                            '<i class="fa"></i>'+
                                            '<input placeholder="Workshop Region Initial" type="text" class="form-control" name="workshop_default" value="WORKSHOP" readonly="">'+
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
                            '<button type="submit" class="btn blue btn-set-target">Set Target</button>'+
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
            '<li class="active"><a href="#form_data" data-toggle="tab">Data</a></li>'+
            '<li><a href="#form_workshop" data-toggle="tab">Information Workshop</a></li>'+
            '<li class="tab_form_jasa"><a href="#form_jasa" data-toggle="tab">Jasa</a></li>'+
            '<li class="tab_form_parts"><a href="#form_parts" data-toggle="tab">Parts</a></li>'+
            '<li class="tab_form_photo"><a href="#form_photo" data-toggle="tab">Photo</a></li>'+
            '<li class="tab_form_pdf"><a href="#form_pdf" data-toggle="tab">PDF File</a></li>'+
            '<li class="tab_form_history_spk"><a href="#form_history_spk" data-toggle="tab">History SPK</a></li>'+
            '<li class="tab_form_history_spk_pdf"><a href="#form_history_spk_pdf" data-toggle="tab">History SPK (PDF)</a></li>'+
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
                                    '<input type="hidden" name="app_id" value="136064">'+
                                    '<div class="row">'+
                                        '<div class="col-md-6">'+
                                            '<div class="row">'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Insured Name</label>'+
                                                        '<div class="col-md-8">'+
                                                            '<textarea class="form-control" name="insured_name" rows="2" data-autosize-on="false" readonly="">################</textarea>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Reporter Name </label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Reporter Name" type="text" class="form-control" name="reporter_name" value="################" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Reporter Hp </label>'+
                                                        '<div class="col-md-4">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Reporter HP1" type="text" class="form-control" name="reporter_hp1" value="################" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                        '<div class="col-md-4">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Reporter HP2" type="text" class="form-control" name="reporter_hp2" value="################" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Reporter Email </label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Reporter Email" type="text" class="form-control" name="reporter_email" value="################" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Car Chassis </label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Car Chassis" type="text" class="form-control" name="car_chassis" value="################" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Car Machine </label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Car Machine" type="text" class="form-control" name="car_machine" value="################" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Car Handling </label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Car Handling" type="text" class="form-control" name="car_handling" value="dropCar" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Date of Incident </label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
                                                                '<input type="text" name="date_of_incident" class="form-control" value="12-07-2021" readonly="">'+
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
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Incident Type" type="text" class="form-control" name="incident_type" value="collision" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Incident City </label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Incident City" type="text" class="form-control" name="incident_city" value="PALU" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Incident Province </label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Incident Province" type="text" class="form-control" name="incident_province" value="Sulawesi Tengah" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Car Speed (km/h)</label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Car Speed" type="text" class="form-control" name="car_speed" value="0" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Incident Description </label>'+
                                                        '<div class="col-md-8">'+
                                                            '<textarea class="form-control" name="incident_desc" cols="5" rows="5" data-autosize-on="false">################</textarea>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Incident Remarks</label>'+
                                                        '<div class="col-md-8">'+
                                                            '<textarea class="form-control" name="incident_remarks" cols="5" rows="5" data-autosize-on="false">################</textarea>'+
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
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Surveyor Name" type="text" class="form-control" name="surveyor_name" value="################" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Assesor Name</label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-icon right">'+
                                                                '<i class="fa"></i>'+
                                                                '<input placeholder="Assesor Name" type="text" class="form-control" name="assesor_name" value="################" readonly="">'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Ticket Status</label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-icon right">'+
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
                                                            '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
                                                                '<input type="text" name="submitted_date" class="form-control" value="19-07-2021" readonly="">'+
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
                                                            '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                            '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                            '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                            '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                            '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                            '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                            '<textarea class="form-control" name="docnot_completed_remarks" rows="2" data-autosize-on="false" readonly="">null</textarea>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Start Repair Date</label>'+
                                                        '<div class="col-md-8">'+
                                                            '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                            '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
                                                                '<input type="text" name="report_date" class="form-control" value="19-07-2021" readonly="">'+
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
                                                            '<textarea class="form-control" name="decline_remarks" rows="2" data-autosize-on="false" readonly=""></textarea>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="form-group">'+
                                                        '<label class="control-label col-md-4">Remarks Cancelled / Terminated</label>'+
                                                        '<div class="col-md-8">'+
                                                            '<textarea class="form-control" name="remarks_cancelled" rows="5" data-autosize-on="false" readonly=""></textarea>'+
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
                                            '<a href="javascript:;" class="btn green-seagreen yellow-stripe btn-view-editspk" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_edit_spk/136064"><i class="fa fa-pencil"></i><span class="hidden-480">&nbsp;&nbsp;Edit </span></a>&nbsp;&nbsp;<a href="javascript:;" class="btn green-seagreen yellow-stripe  btn-Print-SPK" data-id="136064" data-url="spk/manajemen_ajax/print_spk/"><i class="fa fa-print"></i><span class="hidden-480">&nbsp;&nbsp;Print SPK </span></a>                                                                </div>'+
                                    '</div>'+
                                '</div>'+
                            '</form>'+
                            '<!-- END FORM-->'+
                        '</div>                                    '+
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
                            '<input type="hidden" name="app_id" value="136064">'+
                            '<div class="col-md-6">'+
                                '<div class="row">'+
                                    '<div class="col-md-10">'+
                                        '<div class="form-group">'+
                                            '<label class="control-label col-md-4">Deloyed Date</label>'+
                                            '<div class="col-md-8">'+
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
                                                    '<input type="text" name="deployed_date" class="form-control" value="19-07-2021" readonly="">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<textarea class="form-control" name="reject_reason" rows="2" data-autosize-on="false" readonly=""></textarea>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="col-md-10">'+
                                        '<div class="form-group">'+
                                            '<label class="control-label col-md-4">Reject Cause </label>'+
                                            '<div class="col-md-8">'+
                                                '<div class="input-icon right">'+
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
                                                '<div class="input-icon right">'+
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
                                                '<div class="input-icon right">'+
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
                                                '<textarea class="form-control" name="reject_note" rows="2" data-autosize-on="false" readonly=""></textarea>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="col-md-10">'+
                                        '<div class="form-group">'+
                                            '<label class="control-label col-md-4">Rework Counter </label>'+
                                            '<div class="col-md-8">'+
                                                '<div class="input-icon right">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
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
                                                '<div class="input-group date" data-date-format="dd-mm-yyyy">'+
                                                    '<input type="text" name="last_status_date" class="form-control" value="19-07-2021" readonly="">'+
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
                                                '<div class="input-icon right">'+
                                                    '<i class="fa"></i>'+
                                                    '<input placeholder="Last User" type="text" class="form-control" name="last_user" value="TITIK.WULAN" readonly="">'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="col-md-10">'+
                                        '<div class="form-group">'+
                                            '<label class="control-label col-md-4">Last User Deploy </label>'+
                                            '<div class="col-md-8">'+
                                                '<div class="input-icon right">'+
                                                    '<i class="fa"></i>'+
                                                    '<input placeholder="Last User Deploy" type="text" class="form-control" name="last_user_deploy" value="TITIK.WULAN" readonly="">'+
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
                            '<input type="hidden" name="app_idjasa" value="136064">'+
                            '<div class="row" id="jasa-data">'+
                                '<div class="col-md-6">'+
                                    '<div class="row">'+
                                        '<div class="col-md-10" style="pointer-events: none;cursor: default;">'+
                                            '<div class="form-group">'+
                                                '<label class="control-label col-md-4">Template Jasa</label>'+
                                                '<div class="col-md-8">'+
                                                    '<select id="template_jasa" name="template_jasa" class="form-control select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true"><option value="AUTOCILLINGARAGE-1">AUTOCILLINGARAGE-1</option><option value="AUTOCILLINGARAGE-2">AUTOCILLINGARAGE-2</option><option value="MOLINDO">MOLINDO</option><option value="GLASSINDO">GLASSINDO</option><option value="GLASSINDO-SDR">GLASSINDO-SDR</option><option value="GLASURIT">GLASURIT</option><option value="AG28">AG28</option><option value="AUTO360">AUTO360</option><option value="BUS">BUS</option><option value="GLASURIT-2019">GLASURIT-2019</option><option value="SIKKENS-2019" selected="selected">SIKKENS-2019</option><option value="TRUCK">TRUCK</option><option value="ANGKASAJAYAPURA2021">ANGKASAJAYAPURA2021</option></select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-template_jasa-container"><span class="select2-selection__rendered" id="select2-template_jasa-container" title="SIKKENS-2019"><span class="select2-selection__clear">×</span>SIKKENS-2019</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="col-md-10">'+
                                            '<div class="form-group">'+
                                                '<label class="control-label col-md-4">Vehicle Brand </label>'+
                                                '<div class="col-md-8">'+
                                                    '<div class="input-icon right">'+
                                                        '<i class="fa"></i>'+
                                                        '<input placeholder="Vehicle Brand " type="text" class="form-control" name="vehicle_brand" value="SIGRA 1.2 X" readonly="">'+
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
                                                        '<option value="Standar" selected="selected">Standar (Biasa &lt; 500 Juta) </option><option value="Mewah">Mewah (Mewah &gt; 500 Juta) </option>                                                                            </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-vehicle_type-container"><span class="select2-selection__rendered" id="select2-vehicle_type-container" title="Standar (Biasa < 500 Juta) "><span class="select2-selection__clear">×</span>Standar (Biasa &lt; 500 Juta) </span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="col-md-10">'+
                                            '<div class="form-group">'+
                                                '<label class="control-label col-md-4">Painting Type </label>'+
                                                '<div class="col-md-8">'+
                                                    '<select id="cat" name="cat" class="form-control select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                        '<option value="">--All Vehicle Type--</option>'+
                                                        '<option value="Solid">SOLID</option><option value="Metalic" selected="selected">METALIC</option><option value="Cyralic">CYRALIC</option><option value="Morphoblue">MORPHOBLUE</option><option value="Bunglon">BUNGLON</option>                                                                            </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-cat-container"><span class="select2-selection__rendered" id="select2-cat-container" title="METALIC"><span class="select2-selection__clear">×</span>METALIC</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
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
                                                                                                                                                '<div class="btn-group">'+
                                                                '<a class="btn btn-sm red dropdown-toggle" href="javascript:;" data-toggle="dropdown">'+
                                                                    'Add Panel'+
                                                                    '<i class="fa fa-angle-down"></i>'+
                                                                '</a>'+
                                                                '<ul class="dropdown-menu pull-right">'+
                                                                    '<li><a href="javascript:;" class="btn-view-listpanel" data-pengerjaan="" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_list_detil_panel_jasa/136064">Panel</a></li><li><a href="javascript:;" class="btn-view-otherservice" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_other_service/0/136064">Other Service</a></li>                                                                                        </ul>'+
                                                            '</div>'+
                                                                                                                                            '</div>'+
                                                    '</div>'+
                                                    '<div class="portlet-body table-responsive">'+
                                                        '<div class="col-md-12" style="padding-bottom: 90px;">'+
                                                            '<div id="datatable_ajax_jasa_wrapper" class="dataTables_wrapper dataTables_extended_wrapper dataTables_extended_wrapper"><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" id="datatable_ajax_jasa_paginate"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">1</span></div></div><div class="dataTables_length" id="datatable_ajax_jasa_length"><label><span class="seperator">|</span>View <select name="datatable_ajax_jasa_length" aria-controls="datatable_ajax_jasa" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info" id="datatable_ajax_jasa_info" role="status" aria-live="polite"><span class="seperator">|</span>Found total 9 records</div></div><div class="col-md-4 col-sm-12"><div class="table-group-actions pull-right"></div></div><div id="datatable_ajax_jasa_processing" class="dataTables_processing" style="display: none;">Processing...</div></div><table class="table table-striped table-bordered table-hover dt-responsive dataTable dtr-inline collapsed" id="datatable_ajax_jasa" aria-describedby="datatable_ajax_jasa_info" role="grid">'+
                                                                '<thead>'+
                                                                    '<tr role="row" class="heading"><th width="5px" class="text-center sorting_disabled" rowspan="1" colspan="1" aria-label="#">#</th><th width="350px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Nama Panel: activate to sort column ascending">Nama Panel</th><th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Jenis Kerja: activate to sort column ascending">Jenis Kerja</th><th width="20px" class="text-center sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Qty: activate to sort column ascending">Qty</th><th width="60px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Pengerjaan: activate to sort column ascending">Pengerjaan</th><th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Total (Rp): activate to sort column ascending">Total (Rp)</th><th width="5px" class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Input User: activate to sort column ascending" style="display: none;">Input User</th><th width="5px" class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_jasa" rowspan="1" colspan="1" aria-label="Input Date: activate to sort column ascending" style="display: none;">Input Date</th><th width="120px" class="text-center sorting_disabled" rowspan="1" colspan="1" aria-label="Action">Action</th></tr>'+
                                                                    '<tr role="row" class="filter bg-grey-steel"><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
                                                                            '<input type="text" class="form-control form-filter input-sm" name="filter_panel">'+
                                                                        '</td><td rowspan="1" colspan="1">'+
                                                                            '<select name="filter_tipe_kerja" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                                                '<option value="">--All Tipe Kerja--</option>'+
                                                                                '<option value="REPAIR">REPAIR</option><option value="REPLACE">REPLACE</option><option value="SPESIAL REPAIR">SPESIAL REPAIR</option><option value="JASA LAIN">JASA LAIN</option><option value="POLES">POLES</option>                                                                                                    </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_tipe_kerja-p8-container"><span class="select2-selection__rendered" id="select2-filter_tipe_kerja-p8-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
                                                                        '</td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
                                                                            '<select name="filter_pengerjaan" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                                                '<option value="">--All Pengerjaan--</option>'+
                                                                                '<option value="IN">IN</option>                                                                                                    </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_pengerjaan-53-container"><span class="select2-selection__rendered" id="select2-filter_pengerjaan-53-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
                                                                        '</td><td rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
                                                                            '<div class="text-center">'+
                                                                                '<button class="btn btn-sm yellow filter-submit margin-bottom tooltips" data-original-title="Filter" data-placement="top" data-container="body"><i class="fa fa-search"></i></button>'+
                                                                                '<button class="btn btn-sm red filter-cancel tooltips" data-original-title="Reset" data-placement="top" data-container="body"><i class="fa fa-times"></i></button>'+
                                                                            '</div>'+
                                                                        '</td></tr>'+
                                                                '</thead>'+
                                                                '<tbody><tr role="row" class="odd"><td class=" text-center" tabindex="0">1.</td><td class=" text-left">BUMPER BELAKANG</td><td class=" text-left"><span class="badge bg-blue bg-font-blue badge-roundless"> REPAIR </span></td><td class=" text-center">1</td><td class=" text-left">IN</td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">510,000</span></td><td class=" text-left" style="display: none;">TITIK.WULAN</td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-center"><div class="btn-group">'+
'<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">'+
'Action&nbsp;&nbsp;<i class="fa fa-angle-down"></i>'+
'</button>'+
'<ul class="dropdown-menu pull-right" role="menu">'+
'<li><a href="javascript:;" class="btn-viewpanel" data-urlgetpanel="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/getListPanelJasa" data-idjasa="0129223" data-pengerjaan="IN" data-biayajasa="510000" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel/362006/136064">View</a></li><li><a href="javascript:;" class="btn-view-poles" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_poles/362006/136064">Convert to Poles</a></li><li><a href="javascript:;" class="btn-delPanel" data-action="19" data-condition="0" data-id="362006" data-url="spk/manajemen_ajax/DeletePanel">Delete</a></li>'+
'</ul>'+
'</div></td></tr><tr role="row" class="even"><td class=" text-center" tabindex="0">2.</td><td class=" text-left">COVER SPION KIRI (CAT)</td><td class=" text-left"><span class="badge bg-blue bg-font-blue badge-roundless"> REPAIR </span></td><td class=" text-center">1</td><td class=" text-left">IN</td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">66,000</span></td><td class=" text-left" style="display: none;">TITIK.WULAN</td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-center"><div class="btn-group">'+
'<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">'+
'Action&nbsp;&nbsp;<i class="fa fa-angle-down"></i>'+
'</button>'+
'<ul class="dropdown-menu pull-right" role="menu">'+
'<li><a href="javascript:;" class="btn-viewpanel" data-urlgetpanel="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/getListPanelJasa" data-idjasa="0129257" data-pengerjaan="IN" data-biayajasa="66000" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel/362011/136064">View</a></li><li><a href="javascript:;" class="btn-view-poles" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_poles/362011/136064">Convert to Poles</a></li><li><a href="javascript:;" class="btn-delPanel" data-action="19" data-condition="0" data-id="362011" data-url="spk/manajemen_ajax/DeletePanel">Delete</a></li>'+
'</ul>'+
'</div></td></tr><tr role="row" class="odd"><td class=" text-center" tabindex="0">3.</td><td class=" text-left">DOP VELG DEPAN KANAN (NON CAT)</td><td class=" text-left"><span class="badge bg-red-thunderbird badge-roundless"> REPLACE </span></td><td class=" text-center">1</td><td class=" text-left">IN</td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">25,000</span></td><td class=" text-left" style="display: none;">TITIK.WULAN</td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-center"><div class="btn-group">'+
'<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">'+
'Action&nbsp;&nbsp;<i class="fa fa-angle-down"></i>'+
'</button>'+
'<ul class="dropdown-menu pull-right" role="menu">'+
'<li><a href="javascript:;" class="btn-viewpanel" data-urlgetpanel="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/getListPanelJasa" data-idjasa="0157813" data-pengerjaan="IN" data-biayajasa="25000" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel/362015/136064">View</a></li><li><a href="javascript:;" class="btn-view-poles" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_poles/362015/136064">Convert to Poles</a></li><li><a href="javascript:;" class="btn-notification-delPanel" data-action="19" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_notification_delete/362015">Delete</a></li>'+
'</ul>'+
'</div></td></tr><tr role="row" class="even"><td class=" text-center" tabindex="0">4.</td><td class=" text-left">FENDER BELAKANG KANAN</td><td class=" text-left"><span class="badge bg-blue bg-font-blue badge-roundless"> REPAIR </span></td><td class=" text-center">1</td><td class=" text-left">IN</td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">510,000</span></td><td class=" text-left" style="display: none;">TITIK.WULAN</td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-center"><div class="btn-group">'+
'<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">'+
'Action&nbsp;&nbsp;<i class="fa fa-angle-down"></i>'+
'</button>'+
'<ul class="dropdown-menu pull-right" role="menu">'+
'<li><a href="javascript:;" class="btn-viewpanel" data-urlgetpanel="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/getListPanelJasa" data-idjasa="0129314" data-pengerjaan="IN" data-biayajasa="510000" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel/362013/136064">View</a></li><li><a href="javascript:;" class="btn-view-poles" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_poles/362013/136064">Convert to Poles</a></li><li><a href="javascript:;" class="btn-delPanel" data-action="19" data-condition="0" data-id="362013" data-url="spk/manajemen_ajax/DeletePanel">Delete</a></li>'+
'</ul>'+
'</div></td></tr><tr role="row" class="odd"><td class=" text-center" tabindex="0">5.</td><td class=" text-left">FENDER BELAKANG KIRI</td><td class=" text-left"><span class="badge bg-blue bg-font-blue badge-roundless"> REPAIR </span></td><td class=" text-center">1</td><td class=" text-left">IN</td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">510,000</span></td><td class=" text-left" style="display: none;">TITIK.WULAN</td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-center"><div class="btn-group">'+
'<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">'+
'Action&nbsp;&nbsp;<i class="fa fa-angle-down"></i>'+
'</button>'+
'<ul class="dropdown-menu pull-right" role="menu">'+
'<li><a href="javascript:;" class="btn-viewpanel" data-urlgetpanel="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/getListPanelJasa" data-idjasa="0129316" data-pengerjaan="IN" data-biayajasa="510000" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel/362007/136064">View</a></li><li><a href="javascript:;" class="btn-view-poles" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_poles/362007/136064">Convert to Poles</a></li><li><a href="javascript:;" class="btn-delPanel" data-action="19" data-condition="0" data-id="362007" data-url="spk/manajemen_ajax/DeletePanel">Delete</a></li>'+
'</ul>'+
'</div></td></tr><tr role="row" class="even"><td class=" text-center" tabindex="0">6.</td><td class=" text-left">FENDER DEPAN KIRI</td><td class=" text-left"><span class="badge bg-blue bg-font-blue badge-roundless"> REPAIR </span></td><td class=" text-center">1</td><td class=" text-left">IN</td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">510,000</span></td><td class=" text-left" style="display: none;">TITIK.WULAN</td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-center"><div class="btn-group">'+
'<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">'+
'Action&nbsp;&nbsp;<i class="fa fa-angle-down"></i>'+
'</button>'+
'<ul class="dropdown-menu pull-right" role="menu">'+
'<li><a href="javascript:;" class="btn-viewpanel" data-urlgetpanel="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/getListPanelJasa" data-idjasa="0129319" data-pengerjaan="IN" data-biayajasa="510000" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel/362010/136064">View</a></li><li><a href="javascript:;" class="btn-view-poles" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_poles/362010/136064">Convert to Poles</a></li><li><a href="javascript:;" class="btn-delPanel" data-action="19" data-condition="0" data-id="362010" data-url="spk/manajemen_ajax/DeletePanel">Delete</a></li>'+
'</ul>'+
'</div></td></tr><tr role="row" class="odd"><td class=" text-center" tabindex="0">7.</td><td class=" text-left">PINTU BELAKANG KANAN</td><td class=" text-left"><span class="badge bg-blue bg-font-blue badge-roundless"> REPAIR </span></td><td class=" text-center">1</td><td class=" text-left">IN</td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">510,000</span></td><td class=" text-left" style="display: none;">TITIK.WULAN</td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-center"><div class="btn-group">'+
'<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">'+
'Action&nbsp;&nbsp;<i class="fa fa-angle-down"></i>'+
'</button>'+
'<ul class="dropdown-menu pull-right" role="menu">'+
'<li><a href="javascript:;" class="btn-viewpanel" data-urlgetpanel="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/getListPanelJasa" data-idjasa="0129458" data-pengerjaan="IN" data-biayajasa="510000" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel/362012/136064">View</a></li><li><a href="javascript:;" class="btn-view-poles" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_poles/362012/136064">Convert to Poles</a></li><li><a href="javascript:;" class="btn-delPanel" data-action="19" data-condition="0" data-id="362012" data-url="spk/manajemen_ajax/DeletePanel">Delete</a></li>'+
'</ul>'+
'</div></td></tr><tr role="row" class="even"><td class=" text-center" tabindex="0">8.</td><td class=" text-left">PINTU BELAKANG KIRI</td><td class=" text-left"><span class="badge bg-blue bg-font-blue badge-roundless"> REPAIR </span></td><td class=" text-center">1</td><td class=" text-left">IN</td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">510,000</span></td><td class=" text-left" style="display: none;">TITIK.WULAN</td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-center"><div class="btn-group">'+
'<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">'+
'Action&nbsp;&nbsp;<i class="fa fa-angle-down"></i>'+
'</button>'+
'<ul class="dropdown-menu pull-right" role="menu">'+
'<li><a href="javascript:;" class="btn-viewpanel" data-urlgetpanel="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/getListPanelJasa" data-idjasa="0129459" data-pengerjaan="IN" data-biayajasa="510000" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel/362008/136064">View</a></li><li><a href="javascript:;" class="btn-view-poles" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_poles/362008/136064">Convert to Poles</a></li><li><a href="javascript:;" class="btn-delPanel" data-action="19" data-condition="0" data-id="362008" data-url="spk/manajemen_ajax/DeletePanel">Delete</a></li>'+
'</ul>'+
'</div></td></tr><tr role="row" class="odd"><td class=" text-center" tabindex="0">9.</td><td class=" text-left">PINTU DEPAN KIRI</td><td class=" text-left"><span class="badge bg-blue bg-font-blue badge-roundless"> REPAIR </span></td><td class=" text-center">1</td><td class=" text-left">IN</td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">510,000</span></td><td class=" text-left" style="display: none;">TITIK.WULAN</td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-center"><div class="btn-group">'+
'<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">'+
'Action&nbsp;&nbsp;<i class="fa fa-angle-down"></i>'+
'</button>'+
'<ul class="dropdown-menu pull-right" role="menu">'+
'<li><a href="javascript:;" class="btn-viewpanel" data-urlgetpanel="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/getListPanelJasa" data-idjasa="0129463" data-pengerjaan="IN" data-biayajasa="510000" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel/362009/136064">View</a></li><li><a href="javascript:;" class="btn-view-poles" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_poles/362009/136064">Convert to Poles</a></li><li><a href="javascript:;" class="btn-delPanel" data-action="19" data-condition="0" data-id="362009" data-url="spk/manajemen_ajax/DeletePanel">Delete</a></li>'+
'</ul>'+
'</div></td></tr></tbody>'+
                                                                '<tfoot>'+
                                                                '<tr class="heading"><th colspan="3" class="text-right text-center text-left" rowspan="1">Total Panel</th><th class="text-center" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">9</span></th><th class="text-left" rowspan="1" colspan="1"></th><th class="text-left" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">3,661,000</span></th><th class="text-center none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="text-center none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="text-center" rowspan="1" colspan="1">'+
                                                                    '<a href="javascript:;" class="btn green-seagreen yellow-stripe btn-deleteall-jasa" data-spk="136064" data-url="spk/manajemen_ajax/delete_all_jasa"><i class="fa fa-trash"></i><span class="hidden-480">&nbsp;&nbsp;Delete All </span></a>                                                                                            </th></tr>'+
                                                                '</tfoot>'+
                                                            '</table><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">1</span></div></div><div class="dataTables_length"><label><span class="seperator">|</span>View <select name="datatable_ajax_jasa_length" aria-controls="datatable_ajax_jasa" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info"><span class="seperator">|</span>Found total 9 records</div></div><div class="col-md-4 col-sm-12"></div></div></div>'+
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
                                                                                    '<ul class="list-unstyled" style="margin-left:-15px;"><li class="margin-bottom-5"><h6>INSERT SPK on 19/07/2021 19:52:46 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Insert SPK Jasa <br>(Kode Panel :  =&gt; 1103)<br>(Nama Jasa :  =&gt; DOP VELG DEPAN KANAN (NON CAT))<br>(Jumlah Jasa :  =&gt; 1)<br>(Pengerjaan :  =&gt; IN)<br>(Jenis Kerja :  =&gt; Replace)<br>(Biaya Jasa :  =&gt; 25000)</h6></div></li><li class="margin-bottom-5"><h6>DELETE SPK Jasa on 19/07/2021 19:52:28 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>DELETE SPK Jasa <br>(Kode Panel 162)<br>(Nama Panel DOP VELG DEPAN KANAN)<br>(Jenis Kerja REPLACE)</h6></div></li><li class="margin-bottom-5"><h6>INSERT SPK on 19/07/2021 19:52:19 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Insert SPK Jasa <br>(Kode Panel :  =&gt; 162)<br>(Nama Jasa :  =&gt; DOP VELG DEPAN KANAN)<br>(Jumlah Jasa :  =&gt; 1)<br>(Pengerjaan :  =&gt; IN)<br>(Jenis Kerja :  =&gt; REPLACE)<br>(Biaya Jasa :  =&gt; 0)</h6></div></li><li class="margin-bottom-5"><h6>INSERT SPK on 19/07/2021 19:51:43 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Insert SPK Jasa <br>(Kode Panel :  =&gt; 193)<br>(Nama Jasa :  =&gt; FENDER BELAKANG KANAN)<br>(Jumlah Jasa :  =&gt; 1)<br>(Pengerjaan :  =&gt; IN)<br>(Jenis Kerja :  =&gt; Repair)<br>(Biaya Jasa :  =&gt; 510000)</h6></div></li><li class="margin-bottom-5"><h6>INSERT SPK on 19/07/2021 19:51:36 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Insert SPK Jasa <br>(Kode Panel :  =&gt; 337)<br>(Nama Jasa :  =&gt; PINTU BELAKANG KANAN)<br>(Jumlah Jasa :  =&gt; 1)<br>(Pengerjaan :  =&gt; IN)<br>(Jenis Kerja :  =&gt; Repair)<br>(Biaya Jasa :  =&gt; 510000)</h6></div></li><li class="margin-bottom-5"><h6>INSERT SPK on 19/07/2021 19:51:15 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Insert SPK Jasa <br>(Kode Panel :  =&gt; 136)<br>(Nama Jasa :  =&gt; COVER SPION KIRI (CAT))<br>(Jumlah Jasa :  =&gt; 1)<br>(Pengerjaan :  =&gt; IN)<br>(Jenis Kerja :  =&gt; Repair)<br>(Biaya Jasa :  =&gt; 66000)</h6></div></li><li class="margin-bottom-5"><h6>INSERT SPK on 19/07/2021 19:50:16 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Insert SPK Jasa <br>(Kode Panel :  =&gt; 198)<br>(Nama Jasa :  =&gt; FENDER DEPAN KIRI)<br>(Jumlah Jasa :  =&gt; 1)<br>(Pengerjaan :  =&gt; IN)<br>(Jenis Kerja :  =&gt; Repair)<br>(Biaya Jasa :  =&gt; 510000)</h6></div></li><li class="margin-bottom-5"><h6>INSERT SPK on 19/07/2021 19:50:09 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Insert SPK Jasa <br>(Kode Panel :  =&gt; 342)<br>(Nama Jasa :  =&gt; PINTU DEPAN KIRI)<br>(Jumlah Jasa :  =&gt; 1)<br>(Pengerjaan :  =&gt; IN)<br>(Jenis Kerja :  =&gt; Repair)<br>(Biaya Jasa :  =&gt; 510000)</h6></div></li><li class="margin-bottom-5"><h6>INSERT SPK on 19/07/2021 19:49:23 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Insert SPK Jasa <br>(Kode Panel :  =&gt; 338)<br>(Nama Jasa :  =&gt; PINTU BELAKANG KIRI)<br>(Jumlah Jasa :  =&gt; 1)<br>(Pengerjaan :  =&gt; IN)<br>(Jenis Kerja :  =&gt; Repair)<br>(Biaya Jasa :  =&gt; 510000)</h6></div></li><li class="margin-bottom-5"><h6>INSERT SPK on 19/07/2021 19:48:59 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Insert SPK Jasa <br>(Kode Panel :  =&gt; 195)<br>(Nama Jasa :  =&gt; FENDER BELAKANG KIRI)<br>(Jumlah Jasa :  =&gt; 1)<br>(Pengerjaan :  =&gt; IN)<br>(Jenis Kerja :  =&gt; Repair)<br>(Biaya Jasa :  =&gt; 510000)</h6></div></li><li class="margin-bottom-5"><h6>INSERT SPK on 19/07/2021 19:48:52 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Insert SPK Jasa <br>(Kode Panel :  =&gt; 102)<br>(Nama Jasa :  =&gt; BUMPER BELAKANG)<br>(Jumlah Jasa :  =&gt; 1)<br>(Pengerjaan :  =&gt; IN)<br>(Jenis Kerja :  =&gt; Repair)<br>(Biaya Jasa :  =&gt; 510000)</h6></div></li></ul>'+
                                                                                '</div>'+
                                                                                '<div style="clear:both;"></div>'+
                                                                            '</div>                                                                                        </div>'+
                                                            '</div>'+
                                                            '<div class="row">'+
                                                                '<div class="col-md-12">'+
                                                                    '<div class="note note-info" style="margin:10px;">'+
                                                                                '<div class="col-md-12">'+
                                                                                    
                                                                                '</div>'+
                                                                                '<div style="clear:both;"></div>'+
                                                                            '</div>                                                                                        </div>'+
                                                            '</div>'+
                                                            '<!-- History -->                   '+
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
                                                                        '</div>                                                                                        </div>'+
                                                            '</div>        '+
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
                            '<input type="hidden" name="app_idparts" value="136064">'+
                            '<div class="row" id="parts-data">'+
                                '<div class="col-md-6">'+
                                    '<div class="row">'+
                                        '<div class="col-md-10">'+
                                            '<div class="form-group">'+
                                                '<label class="control-label col-md-4">Vehicle Brand Reported</label>'+
                                                '<div class="col-md-8">'+
                                                    '<div class="input-icon right">'+
                                                        '<i class="fa"></i>'+
                                                        '<input placeholder="Vehicle Brand Reported" type="text" class="form-control" name="vehicle_brand_reported" value="SIGRA 1.2 X">'+
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
                                                        '<option value="AUDI">AUDI</option><option value="BMW">BMW</option><option value="CHEVROLET">CHEVROLET</option><option value="DAIHATSU">DAIHATSU</option><option value="DATSUN">DATSUN</option><option value="DFSK">DFSK</option><option value="DODGE">DODGE</option><option value="FORD">FORD</option><option value="HINO">HINO</option><option value="HONDA">HONDA</option><option value="HYUNDAI">HYUNDAI</option><option value="ISUZU">ISUZU</option><option value="JEEP">JEEP</option><option value="KIA">KIA</option><option value="LANDROVER">LANDROVER</option><option value="LEXUS">LEXUS</option><option value="MAZDA">MAZDA</option><option value="MERCEDES">MERCEDES</option><option value="MINI">MINI</option><option value="MITSUBISHI">MITSUBISHI</option><option value="NISSAN">NISSAN</option><option value="PORSCHE">PORSCHE</option><option value="PROTON">PROTON</option><option value="RANGE ROVER">RANGE ROVER</option><option value="SUBARU">SUBARU</option><option value="SUZUKI">SUZUKI</option><option value="TOYOTA" selected="selected">TOYOTA</option><option value="UDTRUCKS">UDTRUCKS</option><option value="VW">VW</option><option value="WULING">WULING</option><option value="RENAULT">RENAULT</option><option value="PEUGEOT">PEUGEOT</option><option value="LAMBORGHINI">LAMBORGHINI</option><option value="VOLVO">VOLVO</option>                                                                            </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-brand_update-container"><span class="select2-selection__rendered" id="select2-brand_update-container" title="TOYOTA"><span class="select2-selection__clear">×</span>TOYOTA</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
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
                                                        '<option value="NONPASSENGER">NONPASSENGER</option><option value="TRUCK">TRUCK</option><option value="PASSENGER" selected="selected">PASSENGER</option><option value="TERLAMPIR">TERLAMPIR</option><option value="OTHER">OTHER</option>                                                                            </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-vehicle_category-container"><span class="select2-selection__rendered" id="select2-vehicle_category-container" title="PASSENGER"><span class="select2-selection__clear">×</span>PASSENGER</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="col-md-10">'+
                                            '<div class="form-group">'+
                                                '<label class="control-label col-md-4">Vehicle Year</label>'+
                                                '<div class="col-md-8">'+
                                                    '<div class="input-icon right">'+
                                                        '<i class="fa"></i>'+
                                                        '<input placeholder="Vehicle Year" type="text" class="form-control" name="vehicle_year" value="2020" readonly="">'+
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
                                                                                                                                                '<div class="btn-group">'+
                                                                '<a class="btn btn-sm red dropdown-toggle" href="javascript:;" data-toggle="dropdown">'+
                                                                    'Add Parts'+
                                                                    '<i class="fa fa-angle-down"></i>'+
                                                                '</a>'+
                                                                '<ul class="dropdown-menu pull-right">'+
                                                                    '<li><a href="javascript:;" class="btn-view-viewparts" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_parts/0/136064">Parts</a></li><li><a href="javascript:;" class="btn-view-ongkir" data-supplier="0" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_ongkir/0/136064">Others</a></li>                                                                                        </ul>'+
                                                            '</div>'+
                                                                                                                                            '</div>'+
                                                    '</div>'+
                                                    '<div class="portlet-body table-responsive">'+
                                                        '<div class="col-md-12" style="padding-bottom: 90px;">'+
                                                            '<div id="datatable_ajax_parts_wrapper" class="dataTables_wrapper dataTables_extended_wrapper dataTables_extended_wrapper dataTables_extended_wrapper"><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended" id="datatable_ajax_parts_paginate"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">1</span></div></div><div class="dataTables_length" id="datatable_ajax_parts_length"><label><span class="seperator">|</span>View <select name="datatable_ajax_parts_length" aria-controls="datatable_ajax_parts" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info" id="datatable_ajax_parts_info" role="status" aria-live="polite"><span class="seperator">|</span>Found total 1 records</div></div><div class="col-md-4 col-sm-12"><div class="table-group-actions pull-right"></div></div><div id="datatable_ajax_parts_processing" class="dataTables_processing" style="display: none;">Processing...</div></div><table class="table table-striped table-bordered table-hover dt-responsive dataTable dtr-inline collapsed" id="datatable_ajax_parts" aria-describedby="datatable_ajax_parts_info" role="grid">'+
                                                                '<thead>'+
                                                                    '<tr role="row" class="heading"><th width="5px" class="all text-center sorting_disabled" rowspan="1" colspan="1" aria-label="#">#</th><th width="140px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Part Ordered: activate to sort column ascending">Part Ordered</th><th width="200px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Part Supplied: activate to sort column ascending">Part Supplied</th><th width="140px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Part Code: activate to sort column ascending">Part Code</th><th width="20px" class="text-center all sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Qty: activate to sort column ascending">Qty</th><th width="120px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Unit Price (Rp): activate to sort column ascending">Unit Price (Rp)</th><th width="120px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Disc (%): activate to sort column ascending">Disc (%)</th><th width="120px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Unit Disc (Rp): activate to sort column ascending">Unit Disc (Rp)</th><th width="120px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Total Net (Rp): activate to sort column ascending">Total Net (Rp)</th><th width="80px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Supplier: activate to sort column ascending">Supplier</th><th width="80px" class="text-center all text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Payment Status: activate to sort column ascending" style="display: none;">Payment Status</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Payment Date: activate to sort column ascending" style="display: none;">Payment Date</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Order to Supplier: activate to sort column ascending" style="display: none;">Order to Supplier</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Order Accepted: activate to sort column ascending" style="display: none;">Order Accepted</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Est Delivery: activate to sort column ascending" style="display: none;">Est Delivery</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Sending by Supplier: activate to sort column ascending" style="display: none;">Sending by Supplier</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Received by Workshop: activate to sort column ascending" style="display: none;">Received by Workshop</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Reject Date: activate to sort column ascending" style="display: none;">Reject Date</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Reject Reason: activate to sort column ascending" style="display: none;">Reject Reason</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Input User: activate to sort column ascending" style="display: none;">Input User</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Input Date: activate to sort column ascending" style="display: none;">Input Date</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Return Date: activate to sort column ascending" style="display: none;">Return Date</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Note: activate to sort column ascending" style="display: none;">Note</th><th class="text-center none text-left sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Est. Sparepart Ready Date: activate to sort column ascending" style="display: none;">Est. Sparepart Ready Date</th><th class="text-center none sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Indent Note: activate to sort column ascending" style="display: none;">Indent Note</th><th width="120px" class="text-center all sorting" tabindex="0" aria-controls="datatable_ajax_parts" rowspan="1" colspan="1" aria-label="Wreck: activate to sort column ascending">Wreck</th><th width="80px" class="text-center all sorting_disabled" rowspan="1" colspan="1" aria-label="Action">Action</th></tr>'+
                                                                    '<tr role="row" class="filter bg-grey-steel"><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
                                                                            '<input type="text" class="form-control form-filter input-sm" name="filter_part_ordered">'+
                                                                        '</td><td rowspan="1" colspan="1">'+
                                                                            '<input type="text" class="form-control form-filter input-sm" name="filter_part_supplied">'+
                                                                        '</td><td rowspan="1" colspan="1">'+
                                                                            '<input type="text" class="form-control form-filter input-sm" name="filter_part_code">'+
                                                                        '</td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
                                                                            '<a href="javascript:;" class="btn green btn-xs btn-set-supplier" data-pengerjaan="" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/set_supplier_parts/136064"><i class="fa fa-plus"></i><span class="hidden-480">&nbsp;&nbsp;Set Supplier </span></a>                                                                                                </td><td rowspan="1" colspan="1">'+
                                                                            '<select id="filter_statuspart" name="filter_statuspart" width="100px;" class="form-control form-filter select2me select2-hidden-accessible" tabindex="-1" aria-hidden="true">'+
                                                                            '<option value="">--All Status--</option>'+
                                                                            '<option value="PO">PO</option><option value="DO">DO</option><option value="ACCEPTED">ACCEPTED</option><option value="SENDING">SENDING</option><option value="REJECTED">REJECTED</option><option value="CANCELLED">CANCELLED</option><option value="RETURNED">RETURNED</option><option value="INDENT">INDENT</option>                                                                                                    </select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-filter_statuspart-container"><span class="select2-selection__rendered" id="select2-filter_statuspart-container"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'+
                                                                        '</td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="hide" rowspan="1" colspan="1"></td><td class="text-center all" rowspan="1" colspan="1"></td><td rowspan="1" colspan="1">'+
                                                                            '<div class="text-center">'+
                                                                                '<button class="btn btn-sm yellow filter-submit margin-bottom tooltips" data-original-title="Filter" data-placement="top" data-container="body"><i class="fa fa-search"></i></button>'+
                                                                                '<button class="btn btn-sm red filter-cancel tooltips" data-original-title="Reset" data-placement="top" data-container="body"><i class="fa fa-times"></i></button>'+
                                                                            '</div>'+
                                                                        '</td></tr>'+
                                                                '</thead>'+
                                                                '<tbody><tr role="row" class="odd"><td class=" text-center" tabindex="0">1.</td><td class=" text-left">DOP VELG DEPAN KANAN (NON CAT)</td><td class=" text-left"></td><td class=" text-left"></td><td class=" text-center">1</td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">0</span></td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">0</span></td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">0</span></td><td class=" text-left"><span class="mask_decimal" style="text-align: right;">0</span></td><td class=" text-left">WORKSHOP</td><td class=" text-left"><span class="badge bg-blue bg-font-blue badge-roundless"> PO </span></td><td class=" text-left" style="display: none;"></td><td class=" text-left" style="display: none;"></td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-left" style="display: none;"></td><td class=" text-left" style="display: none;"></td><td class=" text-left" style="display: none;"></td><td class=" text-left" style="display: none;"></td><td class=" text-left" style="display: none;"></td><td class=" text-left" style="display: none;"></td><td class=" text-left" style="display: none;">TITIK.WULAN</td><td class=" text-left" style="display: none;">19-07-2021</td><td class=" text-left" style="display: none;"></td><td class=" text-left" style="display: none;"><span style="color:red;"></span></td><td class=" text-left" style="display: none;"></td><td class=" text-center" style="display: none;"><span style="color:red;"></span></td><td class=" text-center"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="span0_5" data-id="144202" name="isWreckKept" id="isWreckKept" checked=""><span></span></label></td><td class=" text-center"><div class="btn-group">'+
'<button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;">'+
'Action&nbsp;&nbsp;<i class="fa fa-angle-down"></i>'+
'</button>'+
'<ul class="dropdown-menu pull-right" role="menu">'+
'<li><a href="javascript:;" class="btn-view-viewparts" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_panel_parts/144202/136064/8999" data-status="PO">View</a></li><li><a href="javascript:;" class="btn-delParts" data-namapartsadira="DOP VELG DEPAN KANAN (NON CAT)" data-action="19" data-id="144202" data-url="spk/manajemen_ajax/DeleteParts">Delete</a></li>'+
'</ul>'+
'</div></td></tr></tbody>'+
                                                                '<tfoot>'+
                                                                '<tr class="heading"><th colspan="4" class="text-right all text-center text-left" rowspan="1">Total</th><th class="all text-center" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">1</span></th><th class="all text-left" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">0</span></th><th class="all text-left" rowspan="1" colspan="1"></th><th class="all text-left" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">0</span></th><th class="none text-left" rowspan="1" colspan="1"><span class="mask_decimal" style="text-align: right;">0</span></th><th class="none text-left" rowspan="1" colspan="1"></th><th class="none text-left" rowspan="1" colspan="1"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="none text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="all text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="all text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="all text-left" rowspan="1" colspan="1" style="display: none;"></th><th class="all text-center" rowspan="1" colspan="1" style="display: none;"></th><th class="all text-center" rowspan="1" colspan="1"></th><th class="all text-center" rowspan="1" colspan="1">'+
                                                                        '<a href="javascript:;" class="btn green-seagreen yellow-stripe btn-deleteall-parts" data-spk="136064" data-url="spk/manajemen_ajax/delete_all_parts"><i class="fa fa-trash"></i><span class="hidden-480">&nbsp;&nbsp;Delete All </span></a>                                                                                            </th></tr>'+
                                                                '</tfoot>'+
                                                            '</table><div class="row"><div class="col-md-8 col-sm-12"><div class="dataTables_paginate paging_bootstrap_extended"><div class="pagination-panel"> Page <a href="#" class="btn btn-sm default prev disabled"><i class="fa fa-angle-left"></i></a><input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;"><a href="#" class="btn btn-sm default next disabled"><i class="fa fa-angle-right"></i></a> of <span class="pagination-panel-total">1</span></div></div><div class="dataTables_length"><label><span class="seperator">|</span>View <select name="datatable_ajax_parts_length" aria-controls="datatable_ajax_parts" class="form-control input-xs input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> records</label></div><div class="dataTables_info"><span class="seperator">|</span>Found total 1 records</div></div><div class="col-md-4 col-sm-12"></div></div></div>'+
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
                                                                        '<ul class="list-unstyled" style="margin-left:-15px;"><li class="margin-bottom-5"><h6>DELETE SPK on 19/07/2021 19:52:28 by User TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>DELETE SPK Parts <br>(SPK 136064)<br>(Nama Parts Adira DOP VELG DEPAN KANAN)<br>(Nama Parts Supplier )<br>(Kode Parts )<br>(Harga Parts Supplier 0)<br>(Jumlah Parts 1)<br>(Discount Parts Percent )<br>(Discount Parts Rupiah 0)<br>(Supplier 8999)<br>(Supplier Workshop1368)</h6></div></li></ul>'+
                                                                    '</div>'+
                                                                    '<div style="clear:both;"></div>'+
                                                                '</div>                                                                                        </div>'+
                                                            '</div>'+
                                                            '<div class="row">'+
                                                                '<div class="col-md-12">'+
                                                                    '<div class="note note-info" style="margin:10px;">'+
                                                                    '<div class="col-md-12">'+
                                                                        
                                                                    '</div>'+
                                                                    '<div style="clear:both;"></div>'+
                                                                '</div>                                                                                        </div>'+
                                                            '</div>'+
                                                            '<!-- History -->                   '+
                                                        '</div><div class="slimScrollBar" style="background: rgb(161, 178, 189); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: yellow; opacity: 0.2; z-index: 90; right: 1px;"></div></div>'+
                                                    '</div>'+
                                                '</div>  '+
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
                                                                                '</div>                                                                                        </div>'+
                                                            '</div>        '+
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
                            '<input type="hidden" name="app_idphoto" value="136064">'+
                            '<div class="row">'+
                                '<div class="portlet box blue" style="margin-left:2.5%;width:95%;">'+
                                    '<div class="portlet-title">'+
                                        '<div class="caption font-white">'+
                                            '<i class="icon-bulb"></i>'+
                                            '<span class="caption-subject bold uppercase"> List Photo </span>'+
                                        '</div>'+
                                        '<div class="actions">'+
                                                                                                                '<div class="btn-group">'+
                                                '<a class="btn btn-sm red dropdown-toggle" href="javascript:;" data-toggle="dropdown"> Upload'+
                                                    '<i class="fa fa-angle-down"></i>'+
                                                '</a>'+
                                                '<ul class="dropdown-menu pull-right">'+
                                                    '<li><a href="javascript:;" class="btn-addphoto" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_upload_photo/0/136064/AMC21071176">Photo</a></li><li><a href="javascript:;" class="btn-sync-photo" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/sync_photo">Photo From AMC</a></li>                                                                        </ul>'+
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
                                                    '<a href="javascript:;" class="btn green-seagreen yellow-stripe btn-save-all-photo" data-spk="136064" data-url="spk/manajemen_ajax/save_all_photo"><i class="fa fa-trash"></i><span class="hidden-480">&nbsp;&nbsp;Save All </span></a>                                                                            </th></tr>'+
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
                            '<input type="hidden" name="app_idpdf" value="136064">'+
                            '<div class="row">'+
                                '<div class="portlet box blue" style="margin-left:2.5%;width:95%;">'+
                                    '<div class="portlet-title">'+
                                        '<div class="caption font-white">'+
                                            '<i class="icon-bulb"></i>'+
                                            '<span class="caption-subject bold uppercase"> List PDF </span>'+
                                        '</div>'+
                                        '<div class="actions">'+
                                                                                                                '<div class="btn-group">'+
                                                '<a class="btn btn-sm red dropdown-toggle" href="javascript:;" data-toggle="dropdown"> Upload'+
                                                    '<i class="fa fa-angle-down"></i>'+
                                                '</a>'+
                                                '<ul class="dropdown-menu pull-right">'+
                                                    '<li><a href="javascript:;" class="btn-addpdf" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_upload_pdf/0/136064/AMC21071176">PDF</a></li>                                                                        </ul>'+
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
                                                '<ul class="list-unstyled" style="margin-left:-15px;"><li class="margin-bottom-5"><h6>UPDATE SPK on 19/07/2021 19:53:51 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>Update SPK<br>(Kode OR : MVR07.01)<br>(Description OR : Kerugian sebagian : Rp. 300.000,- per kejadian di Bengkel Rekanan Authorized (untuk Mobil Baru jenis Sedan, Jeep, MPV, SUV, Minibus, Double Cabin), atau Rekanan Non Authorized (untuk Mobil Baru &amp; Bekas jenis Sedan, Jeep, MPV, SUV, Minibus, Double Cabin))<br>(Jenis OR : FIX)<br>(Kondisi OR : )<br>(Or Ke : 1)<br>(Minimal OR : 300000)<br>(Nominal OR : 300000)<br>(Nominal Klaim : )<br>(Nominal TSI : )</h6></div></li><li class="margin-bottom-5"><h6>UPDATE SPK  on 19/07/2021 19:53:50 by TITIK WULAN SARI-</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br><br>(Status : PREDEPLOYED =&gt; NEW)</h6></div></li><li class="margin-bottom-5"><h6>VEHICLE TYPE  on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Vehicle Type : Standar)</h6></div></li><li class="margin-bottom-5"><h6>VEHICLE TYPE  on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Vehicle Type : Standar)</h6></div></li><li class="margin-bottom-5"><h6>VEHICLE TYPE  on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Vehicle Type : Standar)</h6></div></li><li class="margin-bottom-5"><h6>VEHICLE TYPE  on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Vehicle Type : Standar)</h6></div></li><li class="margin-bottom-5"><h6>PAINTING TYPE on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Painting Type : Metalic)</h6></div></li><li class="margin-bottom-5"><h6>PAINTING TYPE on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Painting Type : Metalic)</h6></div></li><li class="margin-bottom-5"><h6>PAINTING TYPE on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Painting Type : Metalic)</h6></div></li><li class="margin-bottom-5"><h6>PAINTING TYPE on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Painting Type : Metalic)</h6></div></li><li class="margin-bottom-5"><h6>VEHICLE TYPE  on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Vehicle Type : Standar)</h6></div></li><li class="margin-bottom-5"><h6>VEHICLE TYPE  on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Vehicle Type : Standar)</h6></div></li><li class="margin-bottom-5"><h6>VEHICLE TYPE  on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Vehicle Type : Standar)</h6></div></li><li class="margin-bottom-5"><h6>VEHICLE TYPE  on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Vehicle Type : Standar)</h6></div></li><li class="margin-bottom-5"><h6>PAINTING TYPE on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Painting Type : Metalic)</h6></div></li><li class="margin-bottom-5"><h6>PAINTING TYPE on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Painting Type : Metalic)</h6></div></li><li class="margin-bottom-5"><h6>PAINTING TYPE on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Painting Type : Metalic)</h6></div></li><li class="margin-bottom-5"><h6>PAINTING TYPE on 19/07/2021 19:48:02 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>UPDATE SPK <br>(Painting Type : Metalic)</h6></div></li><li class="margin-bottom-5"><h6>SET Target SPK  on 19/07/2021 19:48:01 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>SET Target <br>(Workshop ID : =&gt; 1368)<br>Template Jasa : =&gt; SIKKENS-2019)<br>Jenis Kendaraan : =&gt; Standar)<br>Jenis Cat : =&gt; Metalic)</h6></div></li><li class="margin-bottom-5"><h6>SET Target SPK  on 19/07/2021 19:48:01 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>SET Target <br>(Workshop ID : =&gt; 1368)<br>Template Jasa : =&gt; SIKKENS-2019)<br>Jenis Kendaraan : =&gt; Standar)<br>Jenis Cat : =&gt; Metalic)</h6></div></li><li class="margin-bottom-5"><h6>SET Target SPK  on 19/07/2021 19:48:01 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>SET Target <br>(Workshop ID : =&gt; 1368)<br>Template Jasa : =&gt; SIKKENS-2019)<br>Jenis Kendaraan : =&gt; Standar)<br>Jenis Cat : =&gt; Metalic)</h6></div></li><li class="margin-bottom-5"><h6>SET Target SPK  on 19/07/2021 19:48:01 by TITIK.WULAN</h6><div class="note note-warning"><h6 style="margin:0px;">Remark : <br>SET Target <br>(Workshop ID : =&gt; 1368)<br>Template Jasa : =&gt; SIKKENS-2019)<br>Jenis Kendaraan : =&gt; Standar)<br>Jenis Cat : =&gt; Metalic)</h6></div></li></ul>'+
                                            '</div>'+
                                            '<div style="clear:both;"></div>'+
                                        '</div>                                                    </div>'+
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
                                        '</div>                                                    </div>'+
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
                '<input type="hidden" name="id_spk" value="136064">'+
                '<input type="hidden" name="min_or" value="300000">'+
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
                                                '<input placeholder="Estimasi Kerugian" type="text" class="form-control mask_decimal" name="estimasi_kerugian" value="0" style="text-align: right;">'+
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
                                                '<input placeholder="Jenis OR" type="text" class="form-control" name="kategoriOR" id="kategoriOR" value="MVR07.01" readonly="">'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="col-md-2">'+
                                            '<div class="actions">'+
                                                '<div class="btn-group">'+
                                                    '<a class="btn btn-sm red dropdown-toggle" href="javascript:;" data-toggle="dropdown"> OR'+
                                                        '<i class="fa fa-angle-down"></i>'+
                                                    '</a>'+
                                                    '<ul class="dropdown-menu pull-right">'+
                                                        '<li><a href="javascript:;" class="btn-add-own-risk">Care</a></li><li><a href="javascript:;" class="btn-add-ownrisk" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_list_own_risk/MVR07.01">Manual</a></li>                                                                </ul>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-10">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Deskripsi </label>'+
                                        '<div class="col-md-6">'+
                                            '<textarea class="form-control" name="desc_or" rows="2" data-autosize-on="false" readonly="">Kerugian sebagian : Rp. 300.000,- per kejadian di Bengkel Rekanan Authorized (untuk Mobil Baru jenis Sedan, Jeep, MPV, SUV, Minibus, Double Cabin), atau Rekanan Non Authorized (untuk Mobil Baru &amp; Bekas jenis Sedan, Jeep, MPV, SUV, Minibus, Double</textarea>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-10 jenisor">'+
                                    '<div class="form-group">'+
                                        '<label class="control-label col-md-4">Jenis OR </label>'+
                                        '<div class="col-md-6">'+
                                            '<div class="input-icon right">'+
                                                '<i class="fa"></i>'+
                                                '<input placeholder="Jenis OR" type="text" class="form-control" name="jenisOR" value="FIX" readonly="">'+
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
                                                '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span><input placeholder="Jumlah Parts " type="text" name="ORKe" class="form-control touchspin_3" value="1" readonly="" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn-vertical"><button class="btn btn-default bootstrap-touchspin-up" type="button"><i class="glyphicon glyphicon-chevron-up"></i></button><button class="btn btn-default bootstrap-touchspin-down" type="button"><i class="glyphicon glyphicon-chevron-down"></i></button></span></div>'+
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
                                                '<input placeholder="Nominal / Persen" type="text" class="form-control mask_decimal" name="nominalOR" value="300000" style="text-align: right;">'+
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
                                                '<input placeholder="Of Claim" type="text" class="form-control mask_decimal" name="ofclaim_or" value="0" readonly="" style="text-align: right;">'+
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
                                                '<input placeholder="Of TSI" type="text" class="form-control mask_decimal" name="oftsi_or" value="0" readonly="" style="text-align: right;">'+
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
                                            '<a href="javascript:;" class="btn blue btn-calculate" data-url="https://primasis.net/BengkelNet_Insurance/spk/manajemen_ajax/form_list_own_risk/MVR07.01">Calculate</a>                                                    </div>'+
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