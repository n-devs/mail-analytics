async function emailTemplat(name, email, age, phone, date) {
    const html = `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">

<head>
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta charset="UTF-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New email 3</title>
    <!--[if (mso 16)]><style type="text/css">     a {text-decoration: none;}     </style><![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
    <!--[if !mso]>
<!-- -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
    <!--<![endif]-->
    <style type="text/css">
        /* latin */
        @font-face {
            font-family: 'DB Ozone X';
            font-style: normal;
            font-weight: 400;
            src: url(http://www.xn--72c5awjx9b4esc6c.com/assets/fonts/DB%20Ozone%20X.ttf) format('ttf');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        html,
        body,
        tbody,
        a,
        p,
        b,
        span,
        em,
        td {
            font-family: 'Sukhumvit Set';
        }

        .text-link {
            color: #2880FF;
            text-decoration: auto;
        }

        .rollover div {
            font-size: 0;
        }

        #outlook a {
            padding: 0;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        .es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        .es-button-border:hover a.es-button,
        .es-button-border:hover button.es-button {
            background: #16a1f7 !important;
            border-color: #16a1f7 !important;
        }

        .es-button-border:hover {
            border-color: #42d159 #42d159 #42d159 #42d159 !important;
            background: transparent !important;
            border-style: dashed dashed dashed dashed !important;
        }

        td .es-button-border:hover a.es-button-1 {
            background: #104bf4 !important;
            border-color: #104bf4 !important;
        }

        td .es-button-border-2:hover {
            background: #104bf4 !important;
        }

        td .es-button-border:hover a.es-button-3 {
            background: #0c2f5b !important;
            border-color: #0c2f5b !important;
            color: #ffffff !important;
        }

        td .es-button-border-4:hover {
            background: #0c2f5b !important;
            border-style: dashed dashed dashed dashed !important;
            border-color: #42d159 #42d159 #42d159 #42d159 !important;
        }

        td .es-button-border:hover a.es-button-5 {
            background: #0065f4 !important;
            border-color: #0065f4 !important;
        }

        td .es-button-border-6:hover {
            background: #0065f4 !important;
            border-style: solid solid solid solid !important;
            border-color: transparent transparent transparent transparent !important;
        }

        td .es-button-border-7:hover {
            border-style: dashed dashed dashed dashed !important;
            background: transparent !important;
            border-color: #42d159 #42d159 #42d159 #42d159 !important;
        }

        td .es-button-border:hover a.es-button-8 {
            background: #ffffff !important;
            border-color: #ffffff !important;
            color: #000000 !important;
        }

        td .es-button-border:hover a.es-button-9 {
            background: #424242 !important;
            border-color: #424242 !important;
            color: #ffffff !important;
        }

        td .es-button-border-10:hover {
            background: #424242 !important;
        }

        @media only screen and (max-width:600px) {

            p,
            ul li,
            ol li,
            a {
                font-size: 16px !important;
                line-height: 150% !important
            }

            h1 {
                font-size: 30px !important;
                text-align: center;
                line-height: 120% !important
            }

            h2 {
                font-size: 26px !important;
                text-align: center;
                line-height: 120% !important
            }

            h3 {
                font-size: 20px !important;
                text-align: center;
                line-height: 120% !important
            }

            h1 a {
                font-size: 30px !important
            }

            h2 a {
                font-size: 26px !important
            }

            h3 a {
                font-size: 20px !important
            }

            .es-menu td a {
                font-size: 16px !important
            }

            .es-header-body p,
            .es-header-body ul li,
            .es-header-body ol li,
            .es-header-body a {
                font-size: 16px !important
            }

            .es-footer-body p,
            .es-footer-body ul li,
            .es-footer-body ol li,
            .es-footer-body a {
                font-size: 16px !important
            }

            .es-infoblock p,
            .es-infoblock ul li,
            .es-infoblock ol li,
            .es-infoblock a {
                font-size: 12px !important
            }

            *[class="gmail-fix"] {
                display: none !important
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3 {
                text-align: center !important
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3 {
                text-align: right !important
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3 {
                text-align: left !important
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important
            }

            .es-button-border {
                display: block !important
            }

            .es-btn-fw {
                border-width: 10px 0px !important;
                text-align: center !important
            }

            .es-adaptive table,
            .es-btn-fw,
            .es-btn-fw-brdr,
            .es-left,
            .es-right {
                width: 100% !important
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px !important
            }

            .es-adapt-td {
                display: block !important;
                width: 100% !important
            }

            .adapt-img {
                width: 100% !important;
                height: auto !important
            }

            .es-m-p0 {
                padding: 0 !important
            }

            .es-m-p0r {
                padding-right: 0 !important
            }

            .es-m-p0l {
                padding-left: 0 !important
            }

            .es-m-p0t {
                padding-top: 0 !important
            }

            .es-m-p0b {
                padding-bottom: 0 !important
            }

            .es-m-p20b {
                padding-bottom: 20px !important
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important
            }

            tr.es-desk-hidden,
            td.es-desk-hidden,
            table.es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important
            }

            tr.es-desk-hidden {
                display: table-row !important
            }

            table.es-desk-hidden {
                display: table !important
            }

            td.es-desk-menu-hidden {
                display: table-cell !important
            }

            .es-menu td {
                width: 1% !important
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important
            }

            table.es-social {
                display: inline-block !important
            }

            table.es-social td {
                display: inline-block !important
            }

            a.es-button,
            button.es-button {
                font-size: 20px !important;
                display: block !important;
                border-left-width: 0px !important;
                border-right-width: 0px !important
            }

            p,
            ul li,
            ol li {}

            .es-header-body p,
            .es-header-body ul li,
            .es-header-body ol li {}

            .es-footer-body p,
            .es-footer-body ul li,
            .es-footer-body ol li {}

            .es-infoblock p,
            .es-infoblock ul li,
            .es-infoblock ol li {}

            .es-m-p5 {
                padding: 5px !important
            }

            .es-m-p5t {
                padding-top: 5px !important
            }

            .es-m-p5b {
                padding-bottom: 5px !important
            }

            .es-m-p5r {
                padding-right: 5px !important
            }

            .es-m-p5l {
                padding-left: 5px !important
            }

            .es-m-p10 {
                padding: 10px !important
            }

            .es-m-p10t {
                padding-top: 10px !important
            }

            .es-m-p10b {
                padding-bottom: 10px !important
            }

            .es-m-p10r {
                padding-right: 10px !important
            }

            .es-m-p10l {
                padding-left: 10px !important
            }

            .es-m-p15 {
                padding: 15px !important
            }

            .es-m-p15t {
                padding-top: 15px !important
            }

            .es-m-p15b {
                padding-bottom: 15px !important
            }

            .es-m-p15r {
                padding-right: 15px !important
            }

            .es-m-p15l {
                padding-left: 15px !important
            }

            .es-m-p20 {
                padding: 20px !important
            }

            .es-m-p20t {
                padding-top: 20px !important
            }

            .es-m-p20r {
                padding-right: 20px !important
            }

            .es-m-p20l {
                padding-left: 20px !important
            }

            .es-m-p25 {
                padding: 25px !important
            }

            .es-m-p25t {
                padding-top: 25px !important
            }

            .es-m-p25b {
                padding-bottom: 25px !important
            }

            .es-m-p25r {
                padding-right: 25px !important
            }

            .es-m-p25l {
                padding-left: 25px !important
            }

            .es-m-p30 {
                padding: 30px !important
            }

            .es-m-p30t {
                padding-top: 30px !important
            }

            .es-m-p30b {
                padding-bottom: 30px !important
            }

            .es-m-p30r {
                padding-right: 30px !important
            }

            .es-m-p30l {
                padding-left: 30px !important
            }

            .es-m-p35 {
                padding: 35px !important
            }

            .es-m-p35t {
                padding-top: 35px !important
            }

            .es-m-p35b {
                padding-bottom: 35px !important
            }

            .es-m-p35r {
                padding-right: 35px !important
            }

            .es-m-p35l {
                padding-left: 35px !important
            }

            .es-m-p40 {
                padding: 40px !important
            }

            .es-m-p40t {
                padding-top: 40px !important
            }

            .es-m-p40b {
                padding-bottom: 40px !important
            }

            .es-m-p40r {
                padding-right: 40px !important
            }

            .es-m-p40l {
                padding-left: 40px !important
            }
        }
    </style>
</head>

<body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#CCCCCC">
        <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#cccccc"></v:fill> </v:background><![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:no-repeat;background-position:left top">
            <tr style="border-collapse:collapse">
                <td valign="top" style="padding:0;Margin:0">
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
                                    align="center"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left"
                                            style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:740px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="right" bgcolor="#ffffff"
                                                                    style="padding:0;Margin:0">
                                                                    <!--[if mso]><a href="" target="_blank"> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" stripoVmlButton href="" style="height:41px;v-text-anchor:middle;width:139px;" arcsize="73%" stroke="f" fillcolor="#2880ff"> <w:anchorlock></w:anchorlock> <center style='color:#ffffff;font-family:arial, "helvetica neue", helvetica, sans-serif;font-size:14px;font-weight:400;'>View in browser</center> </v:roundrect></a><![endif]-->
                                                                    <!--[if !mso]><!-- --><span
                                                                        class="msohide es-button-border es-button-border-2"
                                                                        style="border-style:solid;border-color:#2CB543;background:#2880FF;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all">
                                                                        <a href="https://analysis.iceberg-th.com/blackboard/mail/analysis?name=${name}&email=${email}&age=${age}&phone=${phone}&action=true&date=${date}"
                                                                            class="es-button es-button-1"
                                                                            target="_blank"
                                                                            style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;color:#FFFFFF;border-style:solid;border-color:#2880FF;border-width:5px 20px;display:inline-block;background:#2880FF;border-radius:30px;font-weight:normal;font-style:normal;line-height:17px;width:auto;text-align:center">View
                                                                            in browser</a></span>
                                                                    <!--<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <table width="100%" cellspacing="0" cellpadding="0"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:780px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/66491606287730102.jpg"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="780" height="291"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:30px;Margin:0">
                                            <!--[if mso]><table style="width:720px" cellpadding="0" cellspacing="0"><tr><td style="width:350px" valign="top"><![endif]-->
                                            <table class="es-left" cellspacing="0" cellpadding="0" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left"
                                                        style="padding:0;Margin:0;width:350px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:28px;line-height:42px;color:#333333">
                                                                        <b>แบล็คบอร์ด คืออะไร ?</b></p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;line-height:24px;color:#333333">
                                                                        <br>&nbsp;&nbsp;<em><strong> &nbsp;<span
                                                                                    style="font-size:16px">&nbsp; &nbsp;
                                                                                    &nbsp; &nbsp;
                                                                                    &nbsp;แพลตฟอร์ม</span></strong></em>
                                                                        แอพพลิเคชั่นแบล็คบอร์ออกแบบมาเพื่อเป็นสื่อกลางในการส่งต่อความรู้
                                                                        ทักษะ
                                                                        จากผู้เชี่ยวชาญสู่กลุ่มผู้สนใจทั่วประเทศ<br>&nbsp;
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; จุดหมายของแบล็คบอร์ด
                                                                        คือสร้างสังคมแห่งการเรียนรู้ที่แท้จริง
                                                                        อำนวยความสะดวกให้กับผู้เรียน
                                                                        และผู้สอนให้เข้าถึงการศึกษาจากทุกอุปกรณ์
                                                                        จากทุกที่ทั่วโลก </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:350px" valign="top"><![endif]-->
                                            <table class="es-right" cellspacing="0" cellpadding="0" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:350px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/52651606287372057.png"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="350" height="209"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:25px;Margin:0">
                                            <!--[if mso]><table style="width:730px" cellpadding="0" cellspacing="0"><tr><td style="width:355px" valign="top"><![endif]-->
                                            <table class="es-left" cellspacing="0" cellpadding="0" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left"
                                                        style="padding:0;Margin:0;width:355px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:20px;line-height:30px;color:#2880FF">
                                                                        <br><br><strong><em>"เปิดร้านข้าวขาหมู
                                                                                ก็เป็นครูพิเศษได้"</em></strong></p>
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;line-height:24px;color:#333333">
                                                                        <span style="color:#FF0000">*</span>
                                                                        ไม่ว่าคุณจะถนัดในเรื่องใดก็ตาม&nbsp; </p>
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;line-height:24px;color:#333333">
                                                                        สามารถลงทะเบียนเป็นครูกับเราได้ทันที<span
                                                                            style="color:#FF0000">*&nbsp;</span><br><br>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:355px" valign="top"><![endif]-->
                                            <table class="es-right" cellspacing="0" cellpadding="0" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:355px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:28px;line-height:42px;color:#333333">
                                                                        <b>แพลตฟอร์มที่ไม่จำกัดความรู้</b></p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;line-height:21px;color:#333333">
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>&nbsp;
                                                                        &nbsp;<span style="font-size:16px"> &nbsp;
                                                                            &nbsp;
                                                                            &nbsp;&nbsp;มีผู้คนมากมายกำลังต้องการพัฒนาทักษะทางอาชีพ&nbsp;</span><span
                                                                            style="font-size:16px"><em><strong>แบล็คบอร์ด
                                                                                </strong></em>ต้องการสร้างสังคมที่เต็มไปด้วยความรู้อย่างแท้จริง
                                                                            เราจึงไม่จำกัดหมวดหมู่ความรู้
                                                                            ไม่จำกัดหมวดหมู่ทักษะ</span></p>
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;line-height:24px;color:#333333">
                                                                        <br></p>
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;line-height:24px;color:#333333">
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                        แนวคิดหลักของเรา
                                                                        เพียงแค่คุณเป็นมืออาชีพในด้านใดๆ
                                                                        คุณก็สอนผู้คนที่ต้องการทักษะจากคุณได้<br></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:30px;Margin:0">
                                            <!--[if mso]><table style="width:720px" cellpadding="0" cellspacing="0"><tr><td style="width:350px" valign="top"><![endif]-->
                                            <table class="es-left" cellspacing="0" cellpadding="0" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left"
                                                        style="padding:0;Margin:0;width:350px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:20px;line-height:30px;color:#2880FF">
                                                                        <b><span
                                                                                style="color:#000000;line-height:35px">สอนแล้วสร้าง</span><em><span
                                                                                    style="line-height:35px">"Passive
                                                                                    Income"</span></em></b></p>
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:23px;line-height:35px;color:#333333">
                                                                        <b>ได้ง่ายๆ</b><br><br><span
                                                                            style="font-size:16px;line-height:24px">
                                                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                            แบล็คบอร์ดเป็นแพลตฟอร์มที่ให้ใช้งานได้ฟรี
                                                                            แต่ในขณะเดียวกัน คุณสามารถประกาศขายคอร์ส
                                                                            ทักษะ ความรู้ที่คุณเชี่ยวชาญเฉพาะทางได้
                                                                            เราทำหน้าที่เป็นตัวกลางในการทำตลาดให้กับคอร์สของคุณ
                                                                            ผู้เรียนจะยินดีซื้อคอร์สของคุณในราคาที่คุณต้องการ
                                                                            หากว่าคอร์สนั้นตอบโจทย์ความต้องการของพวกเขา
                                                                            ให้แบล็คบอร์ดเป็นตัวช่วยหา Passive Income
                                                                            ให้คุณ</span></p>
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;line-height:21px;color:#FF0000;text-align:center">
                                                                        <em>*มีข้อยกเว้นว่าเรื่องที่คุณสอนนั้น
                                                                            จำเป็นต้องมีใบรับรองต่างๆ</em></p>
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;line-height:21px;color:#FF0000;text-align:center">
                                                                        <em>ในกรณีนั้นคุณต้องแสดงใบรับรองดังกล่าว</em>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:350px" valign="top">
<![endif]-->
                                            <table class="es-right" cellspacing="0" cellpadding="0" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:350px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/81161606287418107.png"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="350" height="331"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" bgcolor="#F1F9FE"
                                            style="Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:35px;background-color:#F1F9FE">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:740px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/68391606291901381.png"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="740" height="138"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:15px;padding-left:20px;padding-right:20px">
                                            <!--[if mso]><table style="width:740px" cellpadding="0" cellspacing="0">
<tr><td style="width:243px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p0r es-m-p20b" valign="top" align="center"
                                                        style="padding:0;Margin:0;width:243px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/58461606293191805.png"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="243" height="136"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td>
<td style="width:20px"></td><td style="width:477px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:477px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-top:10px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:23px;line-height:35px;color:#2880FF">
                                                                        <em><a target="_blank"
                                                                                href="https://analysis.iceberg-th.com/blackboard/mail/analysis?name=${name}&email=${email}&age=${age}&phone=${phone}&action=true&date=${date}"
                                                                                class="text-link"><b>เข้าสู่แบล็คบอร์ด</b></a></em>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td width="466.6666666666667" align="left"
                                                        style="padding:0;Margin:0">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;line-height:21px;color:#000000">
                                                                        ง่ายๆ ขั้นตอนแรกคุณก็ลงทะเบียนเป็นครู
                                                                        กับแบล็คบอร์ดได้&nbsp;มีข้อยกเว้นว่าเรื่องที่คุณสอนนั้นจำเป็นต้องมีใบรับรองต่างๆในกรณีนั้น
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left"
                                            style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px">
                                            <!--[if mso]><table style="width:740px" cellpadding="0" cellspacing="0"><tr><td style="width:243px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p0r es-m-p20b" valign="top" align="center"
                                                        style="padding:0;Margin:0;width:243px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/24631606293205052.png"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="243" height="134"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:477px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:477px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:23px;line-height:35px;color:#2880FF">
                                                                        <em><a target="_blank"
                                                                                href="https://analysis.iceberg-th.com/blackboard/mail/analysis?name=${name}&email=${email}&age=${age}&phone=${phone}&action=true&date=${date}"
                                                                                class="text-link"><b>สมัครสมาชิก</b></a></em>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td width="466.6666666666667" align="left"
                                                        style="padding:0;Margin:0">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:23px;line-height:28px;color:#333333">
                                                                        <span
                                                                            style="font-size:15px;line-height:18px">&nbsp;
                                                                            &nbsp; &nbsp;ง่ายๆ
                                                                            ขั้นตอนแรกคุณก็ลงทะเบียนเป็นครู
                                                                            กับแบล็คบอร์ดได้&nbsp;มีข้อยกเว้นว่าเรื่องที่คุณสอนนั้นจำเป็นต้องมีใบรับรองต่างๆในกรณีนั้นคุณต้องแสดงใบรับรองดังกล่าว</span>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left"
                                            style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:35px">
                                            <!--[if mso]><table style="width:740px" cellpadding="0" cellspacing="0"><tr><td style="width:243px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p0r es-m-p20b" valign="top" align="center"
                                                        style="padding:0;Margin:0;width:243px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px">
                                                                    <img class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/11111606293211844.png"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="243" height="134">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:477px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:477px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:23px;line-height:35px;color:#2880FF">
                                                                        <em><a target="_blank"
                                                                                href="https://analysis.iceberg-th.com/blackboard/mail/analysis?name=${name}&email=${email}&age=${age}&phone=${phone}&action=true&date=${date}"
                                                                                class="text-link"><b>โพสตั้งราคา</b></a></em>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td width="466.6666666666667" align="left"
                                                        style="padding:0;Margin:0">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;line-height:23px;color:#333333">
                                                                        แบล็คบอร์ดได้&nbsp;มีข้อยกเว้นว่าเรื่องที่คุณสอนนั้นจำเป็นต้องมีใบรับรองต่างๆในกรณีนั้นคุณต้องแสดงใบรับรองดังกล่าว
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" bgcolor="#333333"
                                            style="padding:20px;Margin:0;background-color:#333333;background-image:url(https://nbjtib.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/58861606362560169.jpg);background-repeat:no-repeat;background-position:center top"
                                            background="https://nbjtib.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/58861606362560169.jpg">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:740px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:36px;line-height:54px;color:#FFFFFF">
                                                                        <em><b>ระบบหลังบ้านของแบล็คบอร์ด</b></em></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
                                            <!--[if mso]><table style="width:740px" cellpadding="0" cellspacing="0"><tr><td style="width:360px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left"
                                                        style="padding:0;Margin:0;width:360px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/12491606361272939.png"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="360" height="133"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:360px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;line-height:21px;color:#000000">
                                                                        &nbsp; <span style="font-size:15px">&nbsp;
                                                                            &nbsp; &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp;
                                                                            &nbsp;
                                                                            &nbsp;&nbsp;ระบบของแบล็คบอร์ดออกแบบมาโดย<em><strong>คำนึงถึงความปลอดภัยของข้อมูลเป็นหลักสำคัญ</strong></em>
                                                                            คุณจึงมั่นใจได้ว่าข้อมูลส่วนตัวของคุณ
                                                                            และคอร์สที่โพสในแพล็ตฟอร์มของเรานั่น
                                                                            จะปลอดภัยจากการปลอมแปลง
                                                                            เราไม่อนุญาตให้ใครก็ตามดาวน์โหลดวิดีโอของคุณ</span>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left"
                                            style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:25px">
                                            <!--[if mso]><table style="width:740px" cellpadding="0" cellspacing="0"><tr><td style="width:360px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left"
                                                        style="padding:0;Margin:0;width:360px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/80741606361284971.png"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="360" height="133"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:360px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="Margin:0;padding-top:10px;padding-left:15px;padding-right:15px;padding-bottom:20px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;line-height:23px;color:#333333">
                                                                        <em><b>ความสเถียรของระบบ&nbsp;<br>&nbsp; &nbsp;
                                                                                &nbsp; &nbsp;
                                                                                &nbsp;&nbsp;</b></em>แบล็คบอร์ด<em><strong>ใช้ระบบคลาวด์</strong></em>ในการดำเนินการ
                                                                        จึงมีความสเถียรสูงที่สุด
                                                                        รับประกันไม่มีช่วงระบบล่ม
                                                                        และมีการสำรองข้อมูลทุกวัน </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" bgcolor="#2880FF"
                                            style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-color:#2880FF">
                                            <!--[if mso]><table style="width:740px" cellpadding="0" cellspacing="0"><tr><td style="width:360px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left"
                                                        style="padding:0;Margin:0;width:360px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-top:25px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:24px;line-height:36px;color:#FFFFFF">
                                                                        <em><strong>ให้แบล็คบอร์ดเป็นตัวช่วย<br>หารายได้ให้คุณ</strong></em>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:360px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:20px;Margin:0">
                                                                    <!--[if mso]><a href="" target="_blank">
 <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" stripoVmlButton href="" style="height:53px;v-text-anchor:middle;width:319px;" arcsize="26%" stroke="f" fillcolor="#282828"> <w:anchorlock></w:anchorlock> <center style='color:#ffffff;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-weight:400;'>ลงทะเบียนเลย!!</center> </v:roundrect></a><![endif]-->
                                                                    <!--[if !mso]><!-- --><span
                                                                        class="msohide es-button-border es-button-border-4"
                                                                        style="border-style:solid;border-color:#2CB543;background:#282828;border-width:0px;display:block;border-radius:14px;width:auto;mso-hide:all">
                                                                        <a href="https://analysis.iceberg-th.com/blackboard/mail/analysis?name=${name}&email=${email}&age=${age}&phone=${phone}&action=true&date=${date}"
                                                                            class="es-button msohide es-button-3"
                                                                            target="_blank"
                                                                            style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:24px;color:#FFFFFF;mso-hide:all;border-style:solid;border-color:#282828;border-width:10px 20px;display:block;background:#282828;border-radius:14px;font-weight:normal;font-style:normal;line-height:29px;width:auto;text-align:center">ลงทะเบียนเลย!!</a></span>
                                                                    <!--<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" bgcolor="#282828"
                                            style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-color:#282828">
                                            <!--[if mso]><table style="width:740px" cellpadding="0" cellspacing="0"><tr><td style="width:360px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left"
                                                        style="padding:0;Margin:0;width:360px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-top:25px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:24px;line-height:36px;color:#FFFFFF">
                                                                        <b>มาทำความรู้จักกับเราก่อน</b></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:360px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:20px;Margin:0">
                                                                    <!--[if mso]><a href="" target="_blank">
 <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" stripoVmlButton href="" style="height:49px;v-text-anchor:middle;width:319px;" arcsize="29%" strokecolor="#2cb543" fillcolor="#2880ff"> <w:anchorlock></w:anchorlock> <center style='color:#ffffff;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-weight:700;'>เข้าสู่แบล็คบอร์ด ตอนนี้!</center> </v:roundrect></a><![endif]-->
                                                                    <!--[if !mso]><!-- --><span
                                                                        class="msohide es-button-border es-button-border-6"
                                                                        style="border-style:solid;border-color:#2CB543;background:#2880FF;border-width:2px;display:block;border-radius:14px;width:auto;mso-hide:all">
                                                                        <a href="https://analysis.iceberg-th.com/blackboard/mail/analysis?name=${name}&email=${email}&age=${age}&phone=${phone}&action=true&date=${date}"
                                                                            class="es-button msohide es-button-5"
                                                                            target="_blank"
                                                                            style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:20px;color:#FFFFFF;mso-hide:all;border-style:solid;border-color:#2880FF;border-width:10px 40px;display:block;background:#2880FF;border-radius:14px;font-weight:bold;font-style:italic;line-height:24px;width:auto;text-align:center">เข้าสู่แบล็คบอร์ด
                                                                            ตอนนี้!</a></span>
                                                                    <!--<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:780px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><a
                                                                        target="_blank"
                                                                        href="https://doc.blackboardapp.co/?page_id=160"
                                                                        class="es-button msohide es-button-5">
                                                                        <img class="adapt-img"
                                                                            src="https://oukrkq.stripocdn.email/content/guids/CABINET_2017f090dd0e54f10cde36350dd2175c/images/61931609904586237.jpg"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="780" height="520"></a></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:780px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/15771606374639841.jpg"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="780" height="138"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <!--[if mso]><table style="width:780px" cellpadding="0" cellspacing="0"><tr><td style="width:380px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left"
                                                        style="padding:0;Margin:0;width:380px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://oukrkq.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/99221606382154759.png"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="380" height="184"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:380px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:20px;Margin:0;font-size:0px">
                                                                    <!-- <img class="adapt-img" src="https://nbjtib.stripocdn.email/content/guids/CABINET_3ac81682cb4193a498cc7c38de82cb73/images/57891606382168730.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="380" height="184"> --><a
                                                                        target="_blank"
                                                                        href="https://www.facebook.com/blackboard20.th"
                                                                        style="padding: 5px"><img width="30" height="30"
                                                                            src="https://oukrkq.stripocdn.email/content/guids/CABINET_2017f090dd0e54f10cde36350dd2175c/images/12821609924941079.png"></a><a
                                                                        target="_blank" href="https://lin.ee/GzQGuHDd"
                                                                        style="padding: 5px"><img
                                                                            src="https://oukrkq.stripocdn.email/content/guids/CABINET_2017f090dd0e54f10cde36350dd2175c/images/62111609925019170.png"
                                                                            width="30" height="30"></a><a
                                                                        target="_blank"
                                                                        href="https://www.instagram.com/blackboardapp.co/"
                                                                        style="padding: 5px">
                                                                        <img src="https://oukrkq.stripocdn.email/content/guids/CABINET_2017f090dd0e54f10cde36350dd2175c/images/6321609925059024.png"
                                                                            width="30" height="30"></a><a
                                                                        target="_blank"
                                                                        href="https://twitter.com/appBlackboard?s=09"
                                                                        style="padding: 5px"><img
                                                                            src="https://oukrkq.stripocdn.email/content/guids/CABINET_2017f090dd0e54f10cde36350dd2175c/images/62851609925098707.png"
                                                                            width="30" height="30"></a><a
                                                                        target="_blank"
                                                                        href="https://youtube.com/channel/UCtflaIrjTCN5rDLIUw9lPpw"
                                                                        style="padding: 5px"><img
                                                                            src="https://oukrkq.stripocdn.email/content/guids/CABINET_2017f090dd0e54f10cde36350dd2175c/images/34391609925139634.png"
                                                                            width="30" height="30"></a>
                                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr style="border-collapse:collapse"></tr>
                                                                        <tr style="border-collapse:collapse"></tr>
                                                                        <tr style="border-collapse:collapse"></tr>
                                                                        <tr style="border-collapse:collapse"></tr>
                                                                        <tr style="border-collapse:collapse"></tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;line-height:23px;color:#333333">
                                                                        <a target="_blank"
                                                                            href="https://analysis.iceberg-th.com/blackboard/mail/analysis?name=${name}&email=${email}&age=${age}&phone=${phone}&action=true&date=${date}"
                                                                            class="text-link">เข้าสู่เว็ปไซต์</a></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;line-height:23px;color:#333333">
                                                                        <a target="_blank"
                                                                            href="https://doc.blackboardapp.co/?page_id=238"
                                                                            class="text-link">แอพสำหรับ Android</a></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;line-height:23px;color:#333333">
                                                                        <a target="_blank"
                                                                            href="https://doc.blackboardapp.co/?page_id=238"
                                                                            class="text-link">แอพสำหรับ IOS</a></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;line-height:23px;color:#333333">
                                                                        <a target="_blank"
                                                                            href="https://doc.blackboardapp.co/?page_id=228"
                                                                            class="text-link">รายงานปัญหาการใช้งาน</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;line-height:23px;color:#333333">
                                                                        <a target="_blank"
                                                                            href="https://doc.blackboardapp.co/?page_id=228"
                                                                            class="text-link">แสดงความคิดเห็น</a></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:780px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:780px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" bgcolor="#282828"
                                                                    style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:10px;line-height:20px;color:#F1ECEC">
                                                                        <span><a target="_blank"
                                                                                href="https://analysis.iceberg-th.com/blackboard/mail/analysis?name=${name}&email=${email}&age=${age}&phone=${phone}&action=true&date=${date}"
                                                                                style="color: #F1ECEC">เปิดด้วยเว็บเบราเซอร์</a></span>
                                                                        | <span><a href="https://doc.blackboardapp.co/"
                                                                                style="color: #F1ECEC">เงื่อนไขการใช้งาน</a></span>
                                                                        | <span><a target="_blank" href="#"
                                                                                style="color: #F1ECEC">ยกเลิกการรับข่าวสาร</a></span><br><span
                                                                            style="color:#2880FF">แบล็คบอร์ดสงวนสิทธิ์ในเนื้อหาทั้งหมด</span>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <!--[if mso]></td></tr></table><![endif]-->
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
    `;

    return await new Promise((resolve, reject) => {

        resolve(html)
    })

}

module.exports = emailTemplat