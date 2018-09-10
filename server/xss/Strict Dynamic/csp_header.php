<?php include_once "../../common.php"; ?>
<?php

list($abspath) = get_included_files();
$abspath = dirname($abspath) . "/";


$filename = $abspath . "/csp.php";
$csp_header_content = file_get_contents($filename);

include_once "./nonce_header.php";

if (strstr($cspheader, "$nonce") != FALSE) {
    echo "<script nonce='$nonce'>console.log(\"server: injected csp header $cspheader\");</script>";
}

?>
