<?php include_once "../../common.php"; ?>
<?php include_once "csp_header.php"; ?>
<?php $card = "4132 2352 2323" ?>
<!DOCTYPE html>
<html>
    <head>
        <!-- hash of the following content is  'sha256-weNRnK/kXcW75oFEoDPDE7l3p06y3NjXHva+m5ZBYBE=' -->
        <script>function getOldAddress() { return "1234, Nowhere!"; } window.onload = function () { document.getElementById("name").value = getOldAddress(); }</script>
    </head>
    <body>
        <?php echo $_GET["msg"] ?>  <br/>
        <label for="name">Old Address</label>
        <input id="name"></input>
    </body>
</html>
