<?php
session_start();
$data = json_decode(file_get_contents("php://input"), true);
$db = new mysqli('localhost', 'root', '', 'all_in_one');
$user=$_SESSION['uid'];

if($data["type"]=="new"){
    $start=$data['start'];
    $end=$data['end'];
    $title=$data['title'];
    $all=$data['all'];
$query="INSERT INTO events(user, start, end, title,all_day) values ('$user','$start','$end','$title','$all')";
$res=$db->query($query);
$db->commit();
$db->close();
}
if($data["type"]=="update"){
    $start=$data['start'];
    $end=$data['end'];
    $title=$data['title'];
    $all=$data['all'];
    $query="UPDATE events SET start='$start', end='$end',all_day='$all' WHERE (USER='$user' AND TITLE='$title')";
    $res=$db->query($query);
    $db->commit();
    $db->close();
}
if($data["type"]=="del"){

    $title=$data['title'];
    $query="DELETE FROM EVENTS WHERE (USER='$user' AND TITLE='$title')";
    $res=$db->query($query);
    $db->commit();
    $db->close();
}
if($data["type"]=="fetch"){
    $events='';
    $query="SELECT * FROM EVENTS WHERE (USER='$user')";
    $res=$db->query($query);
    while ($row=$res->fetch_assoc()){
        $t=$row['title'];
        $s=$row['start'];
        $e=$row['end'];
        $a=$row['all_day'];
        $events.="$t,$s,$e,$a/*";
    }

    echo  $events;

    $db->close();
}

