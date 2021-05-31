<?php 

	include('database_connection.php');

	session_start();

	if(isset($_SESSION['user'])){

		$cont = 0;

		$userid = "SELECT id FROM user WHERE username = '".$_SESSION['user']."'";
		$resultId = mysqli_query($connect, $userid);

		while($row = mysqli_fetch_array($resultId)){

			$id = $row['id'];
				
		}


		while($cont == 0){

			$query = "DELETE FROM cart WHERE id_user ='".$id."'";
			$result = mysqli_query($connect, $query);

			$cont = $cont + 1;

		}

		echo 'Thanks for your purchase!';

	} else {

		echo 'Error';

	}


?>