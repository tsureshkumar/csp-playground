<?php include_once "../../common.php"; ?>
<?php include_once "csp_header.php"; ?>
<?php $card = "4132 2352 2323" ?>
<!DOCTYPE html>
<html>
    <head>
        <script>
        window.onload = function () { 
            var person = eval('<?php echo $_GET["input"] ?>');
            console.log(person);
            document.getElementById("name").value = person.firstname;
        };
        </script>
    </head>
    <body>
        <form action"/">
            <label for="name">Name</label>
            <input id="name" type="text" value=""> </input> <br/>
            <label for="card">Card</label>
            <input id="card" type="text" value="<?php echo $card?>"> </input>
        </form>
    </body>
</html>
