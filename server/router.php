<?php
    // intentionally insecure application to demonstrate and learn security
    header('X-XSS-Protection: 0');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: *');

	error_log("***************" . $_SERVER['REQUEST_URI'])
	if (preg_match('/\.css|\.js|\.jpg|\.png|\.map$/', $_SERVER['REQUEST_URI'], $match)) {
		error_log("here");
		$mimeTypes = [
			'.css' => 'text/css',
			'.js'  => 'application/javascript',
			'.jpg' => 'image/jpg',
			'.png' => 'image/png',
			'.map' => 'application/json'
		];
		$path = __DIR__ . $_SERVER['REQUEST_URI'];
		if (is_file($path)) {
			header("Content-Type: {$mimeTypes[$match[0]]}");
			require $path;
			exit;
		}
	}
	return false;
?>
