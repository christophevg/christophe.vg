---
title: Captcha with PHP
---

Simple example to create a captcha with PHP.

{% highlight php %}
# captcha.php
# generates a session-based key and graphical representation
# Author: Christophe VG

session_start();

# configuration
$height = 40;
$width  = 150;
$size   = 16;
$angle  = 5;
$left = 25;
$top = 30;
$font   = './fonts/ARIAL.TTF';
$chars  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
$length = 5;

# construct key string
$key = '';
for($i=0; $i<$length; $i++ ) {
 $char = substr( $chars, rand(1, strlen($chars))-1, 1 );
 $key .= "$char ";
}

# store key in session
$_SESSION['captcha'] = str_replace( ' ', '', $key );

header("Content-type: image/png");
$im = imagecreate($width, $height);

$background_color = imagecolorallocate($im, 255, 255, 255);
$text_color = imagecolorallocate($im, 233, 14, 91);

imagerectangle($im, 0,0, $width-1, $height-1, $text_color);
imagettftext($im, $size, $angle, $left, $top, $text_color, $font, $key);

imagepng($im);
imagedestroy($im); 
{% endhighlight %}
