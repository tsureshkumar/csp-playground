<?php include_once "../../common.php"; ?>
<?php include_once "csp_header.php"; ?>

<?php $card = "4132 2352 2323" ?>
<!DOCTYPE html>
<html>
    <body>
        <form action"/">
            <label for="name">Name</label>
            <input id="name" type="text" value="<?php echo $_GET["input"] ?>"> </input> <br/>
            <label for="card">Card</label>
            <input id="card" type="text" value="<?php echo $card?>"> </input>
        </form>
    </body>
</html>
