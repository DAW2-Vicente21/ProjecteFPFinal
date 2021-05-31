<?php 

include('database_connection.php');

session_start();

if(isset($_POST['user']) && isset($_POST['pass']) && isset($_POST['passCon'])){
	

	$_SESSION['user'] = $_POST['user'];
	$_SESSION['pass'] = $_POST['pass'];
	$_SESSION['passCon'] = $_POST['passCon'];

	echo $_SESSION['user'];
	echo $_SESSION['pass'];
	echo $_SESSION['passCon']

} else {

	echo 'Error. Try Again.';

}


?>
