<?php include_once "../../common.php"; ?>
<?php include_once "csp_header.php"; ?>
<?php $card = "4132 2352 2323" ?>
<!DOCTYPE html>
<html>
    <head>
        <script nonce="<?php echo $nonce ?>">
            function getOldAddress() {
                return "1234, Nowhere!";
            }
            window.onload = function () {
                document.getElementById("name").value = getOldAddress();
            }
        </script>
    </head>
    <body>
        <?php echo $_GET["msg"] ?>  <br/>
        <label for="name">Old Address</label>
        <input id="name"></input>
    </body>
</html>
