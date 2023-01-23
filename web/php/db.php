<?php
$servername="localhost";
$username="root";
$password="";
$db="db_crazy_healthy2";
$conn=mysqli_connect($servername,$username,$password,$db);
if($conn)
{
die ("success");
}
else
{
echo "error".mysqli_error($conn);
}
mysqli_close($conn);
?>