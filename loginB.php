<?php 

include('database_connection.php');

session_start();

if(isset($_SESSION['user']) && isset($_SESSION['pass'])){

	$query = "SELECT * FROM user";
	$result = mysqli_query($connect, $query);
	$cont = 0;

	while($row = mysqli_fetch_array($result)){
		
		if($row['username'] == $_SESSION['user']){
			if($row['password'] == $_SESSION['pass']){
				echo 'Welcome '.$_SESSION['user']; 
			} else {
				echo 'Wrong Password!';
				$cont = 1;
			} 
		} 
		
	}
/*
	if($cont = 1){
		echo 'Username does not exist!';
	}
*/
} else {

	echo 'Error. Try Again.';

}


?>
