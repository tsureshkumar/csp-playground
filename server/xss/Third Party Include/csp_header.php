<?php include_once "../../common.php"; ?>
<?php

list($abspath) = get_included_files();
$abspath = dirname($abspath) . "/";

$filename = $abspath . "/csp.php";
header(file_get_contents($filename))

?>
