<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible"
          content="IE=edge">
    <meta name="viewport"
          content="width=device-width, initial-scale=1">
    <title>Orders</title>
    <link href="{{mix('css/app.css')}}"
          rel="stylesheet" type="text/css">
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-12 orders">
            <div id="root"></div>
        </div>
    </div>
</div>
<script src="{{mix('js/app.js')}}"></script>
</body>
</html>
