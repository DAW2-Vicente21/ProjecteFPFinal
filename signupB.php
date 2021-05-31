<?php 

include('database_connection.php');

session_start();

if(isset($_SESSION['user']) && isset($_SESSION['pass']) && isset($_SESSION['passCon'])){


	$query = "INSERT INTO user(username, password) VALUES ('".$_SESSION['user']."','".$_SESSION['pass']."')";
	$result = mysqli_query($connect, $query);


} else {

	echo 'Error. Try Again.';

}

echo "Register Successfull!";

session_destroy();

?>
