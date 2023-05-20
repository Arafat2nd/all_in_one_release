<?php
session_start();
if($_SESSION['signed_in'] == 1) {

    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'];
    $mobile = $data['mobile'];
    $birthdate = $data['date'];
    $job = $data['job'];
    $uid = $_SESSION['uid'];
    $db = new mysqli('localhost', 'root', '', 'all_in_one');
    $query = "UPDATE `users` SET HAS_INFO='1',NAME='$name' ,`JOB`='$job',`MOBILE`='$mobile',`BIRTHDATE`='$birthdate' WHERE (`UID`='$uid')";
    $res = $db->query($query);
    $db->commit();
    $db->close();
    echo "done";
}




