<?php

$iPod    = stripos($_SERVER['HTTP_USER_AGENT'],"iPod");
$iPhone  = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$iPad    = stripos($_SERVER['HTTP_USER_AGENT'],"iPad");
$Android = stripos($_SERVER['HTTP_USER_AGENT'],"Android");
$webOS   = stripos($_SERVER['HTTP_USER_AGENT'],"webOS");

//do something with this information
if( $iPod || $iPhone ){
    //browser reported as an iPhone/iPod touch -- do something here
    $string = "Location: https://mytbb.in/brightmedia/";
    header($string);
    die();
}else if($iPad){
    //browser reported as an iPad -- do something here
    $string = "Location: https://mytbb.in/brightmedia/";
    header($string);
    die();
}else if($Android){
    //browser reported as an Android device -- do something here
    $string = "Location: https://mytbb.in/brightmedia/";
    header($string);
    die();
}else if($webOS){
    //browser reported as a webOS device -- do something here
    $string = "Location: https://mytbb.in/brightmedia/";
    header($string);
    die();
}else{
    //browser reported as PC -- do something here
    $string = "Location: https://mytbb.in/brightmedia/";
    header($string);
    die();
}


?>