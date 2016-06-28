<?php

    include("conn.php");
    $minute = $_GET['m'];
    $hour = $_GET['h'];
    $connection = mysqli_connect($HOST,$USER,$PASSWORD,"data") or die("Error " . mysqli_error($connection));
    $d= date("d");
    $m = date("n");
    //fetch table rows from mysql db
    $sql = "select partner,sum(cpml-waterFallFees)/1000 rev from Tracker".$d.$m." where hour(ts)=".$hour." and minute(ts)=".$minute." group by 1";
    if($_GET['a'] == 1) {
        $sql = "select partner,sum(cpml-waterFallFees)/1000 rev from Tracker".$d.$m." group by 1";
    }


    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);

    //close the db connection
    mysqli_close($connection);
?>