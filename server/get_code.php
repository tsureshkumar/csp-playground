<?php
    header('Content-Type: application/json');
    if (! isset($_SERVER['QUERY_STRING'])) {
        echo "missing query string";
        http_response_code(404);
        exit;
    }
    $qsfull=$_SERVER['QUERY_STRING'];
    parse_str($qsfull, $qs);

    $filename = $_GET["file"];

    if (strlen($filename) === 0 || strpos($filename, ".") === true
         || $filename[0] == '/'
         || !( substr_compare($filename, ".php", -4) === 0
                || substr_compare($filename, ".js", -3) === 0)
    ) {
         printf("wrong filename given %s", $filename);
        http_response_code(404);
         exit;
    } else {
        list($abspath) = get_included_files();
        $abspath = dirname($abspath) . "/". $filename;
        $file = file_get_contents($abspath);
        header('Content-Type: text/text');
        echo $file;
    } 
?>
