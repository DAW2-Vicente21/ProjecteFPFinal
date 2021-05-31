<?php 

include('database_connection.php');

session_start();

if(isset($_POST['user']) && isset($_POST['pass'])){
	

	$_SESSION['user'] = $_POST['user'];
	$_SESSION['pass'] = $_POST['pass'];

	echo $_SESSION['user'];
	echo $_SESSION['pass'];

} else {

	echo 'Error. Try Again.';

}


?>
