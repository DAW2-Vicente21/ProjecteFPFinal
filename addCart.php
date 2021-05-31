<?php 
	
	session_start();

	include('database_connection.php');

	$cont = 0;

	$userid = "SELECT id FROM user WHERE username = '".$_SESSION['user']."'";
	$resultId = mysqli_query($connect, $userid);

	while($row = mysqli_fetch_array($resultId)){

		$id = $row['id'];
			
	}

	while($cont == 0){

		$query = "INSERT INTO cart(id_cd, id_user) VALUES(".$_POST['id_cd'].", ".$id.")";
		$result = mysqli_query($connect, $query);

		$cont = $cont + 1;

	}

?>