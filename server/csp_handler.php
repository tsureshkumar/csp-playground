<?php include_once "common.php"; ?>
<?php

list($abspath) = get_included_files();
$abspath = dirname($abspath) . "/";
$csp_header_tag = "Content-Security-Policy: " ;

header('Content-Type: application/json');
if (strtoupper($_SERVER['REQUEST_METHOD']) == 'POST') {
    $json_str = file_get_contents('php://input');
    $json_obj = json_decode($json_str);

    $xss = $json_obj->xss;
    error_log($xss);
    if (! secureFilePath($xss)) {
         echo "{'error': 'wrong file '}";
         exit ;
    }
    
    $csp = $json_obj->csp;
    // FIXME: parse for valid csp before writing

    $filename = $abspath . "xss/" . $xss . "/csp.php";

    $myfile = fopen($filename, "w");
    fwrite($myfile, $csp_header_tag . $csp);
    fclose($myfile);
    error_log("wrote file " . $filename);
    echo "{\"status\":\"success\"}";
}   else {
    $xss = $_GET["xss"];
    if (! secureFilePath($xss)) {
         echo "{\"error\": \"wrong file \"}";
         exit ;
    }
    $filename = $abspath . "xss/" . $xss . "/csp.php";
    echo "{\"csp\": \"" . trim(str_replace($csp_header_tag, "", file_get_contents($filename))) . "\"}";
} 

?>
