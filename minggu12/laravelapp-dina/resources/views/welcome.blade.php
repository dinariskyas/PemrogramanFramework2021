<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <style>
        .kartu {
            width: 650px;
            margin: 0 auto;
            margin-top: 50px;
            transition: all 0.3s;
            box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
        }

        .foto {
            padding: 20px;
        }

        .biodata {
            margin-top: 0px;
            margin-left: 140px;
        }

        tbody.biodata {
            font-size: 18px;
            font-weight: 100;
            color: rgb(0, 0, 0);
        }

        body {
            background-color: #e8e8e8;
        }

        td.style {
            color: rgb(118, 157, 29);
            font-weight: bold;
        }
    </style>
</head>

<div className="container">
    <div style="background:#20B2AA">
        <br>
        <center>
            <h1>Biodata</h1>
        </center>
        </br>
    </div>

    <body>
        <div className="container">
            <div class="card kartu">
                <div class="row">
                    <div class="col-md-4">
                        <div class="foto">
                            <center> <img src="picture.jpg" width="130" height="auto" alt="profile" /></center>
                        </div>
                    </div>
                    <div class="col-md-8 kertas-biodata">
                        <div class="biodata">
                            <table width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td valign="top">
                                            <table border="0" width="150%">
                                                <tbody class="biodata">
                                                    <tr>
                                                        <td width="20%" valign="top" class="textt">Nama</td>
                                                        <td width="4%">:</td>
                                                        <td class="style">Dina Risky Alin Saputri</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="textt">Jenis Kelamin</td>
                                                        <td>:</td>
                                                        <td>Perempuan</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="textt">Tempat Lahir</td>
                                                        <td>:</td>
                                                        <td>Malang</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="textt">Tanggal Lahir</td>
                                                        <td>:</td>
                                                        <td>04/06/2000</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="textt">Jurusan</td>
                                                        <td>:</td>
                                                        <td>Teknologi Informasi</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" class="textt">Prodi</td>
                                                        <td valign="top">:</td>
                                                        <td>DIV - Teknik Informatika</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</div>

</html>