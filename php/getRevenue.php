<?php

//    include("conn.php");
//    $minute = $_GET['m'];
//    $hour = $_GET['h'];
//    $connection = mysqli_connect($HOST,$USER,$PASSWORD,"data") or die("Error " . mysqli_error($connection));
//    $d= date("d");
//    $m = date("n");
//    //fetch table rows from mysql db
//    $sql = "select partner,sum(cpml-waterFallFees)/1000 rev from Tracker".$d.$m." where hour(ts)=".$hour." and minute(ts)=".$minute." group by 1";
////    if($_GET['a'] == 1) {
////        $sql = "select partner,sum(cpml-waterFallFees)/1000 rev from Tracker".$d.$m." group by 1";
////    }
//
//
//    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
//
//    //create an array
//    $emparray = array();
//    while($row =mysqli_fetch_assoc($result))
//    {
//        $emparray[] = $row;
//    }

//$emparray = '[{"partner":"","rev":"0"},{"partner":"495","rev":"0.0034"},{"partner":"Aditmedia","rev":"0.695"},{"partner":"Adkarma","rev":"0.016999999999999998"},{"partner":"Adtopia","rev":"0.0072"},{"partner":"Altitude","rev":"1.8448000000000084"},{"partner":"Aniview","rev":"1.6671000000000389"},{"partner":"Anyclip","rev":"0.3490999999999992"},{"partner":"Appalgo","rev":"3.4347999999999974"},{"partner":"Bluewater","rev":"20.50390000000003"},{"partner":"Connectus","rev":"0.0044"},{"partner":"Ebdr","rev":"0.015799999999999998"},{"partner":"Epiphany","rev":"0.588"},{"partner":"Forepeak","rev":"0.05129999999999995"},{"partner":"Gms","rev":"0.0012"},{"partner":"Gorilla","rev":"0.5569999999999997"},{"partner":"Gravity Lab","rev":"0.028900000000000016"},{"partner":"Integral marketing","rev":"0.03990000000000001"},{"partner":"Maple","rev":"0.013599999999999998"},{"partner":"Matomy","rev":"1.6975499999999746"},{"partner":"Novoroll","rev":"0.21529999999999966"},{"partner":"Peramedia","rev":"0.36"},{"partner":"S&W","rev":"0.9919000000000001"},{"partner":"Social reality","rev":"2.7819999999999445"},{"partner":"Spotx","rev":"8.50245749999995"},{"partner":"Stickyads","rev":"21.015500000001268"},{"partner":"Takoomi","rev":"0.20899999999999952"},{"partner":"Taptica","rev":"2.4424799999999918"},{"partner":"Tremor","rev":"20.373"},{"partner":"Vdopia","rev":"0.11340000000000007"},{"partner":"Wayfare","rev":"0.12771000000000027"},{"partner":"Xertive","rev":"0.0092"},{"partner":"Ybrant","rev":"5.7175499999995845"},{"partner":"Yep","rev":"0.015949999999999995"},{"partner":"Yume","rev":"6.439499999999777"}]';
$obj = (object) array('partner' => 'Yume', 'rev' => rand(40,100));
$obj2 = (object) array('partner' => 'Tremor', 'rev' => rand(40,100));

$array = array();
$array[] = $obj;
$array[] = $obj2;
header("Content-Type", "application/json");
    echo json_encode($array);
//    echo json_encode($emparray);

    //close the db connection
//    mysqli_close($connection);
?>