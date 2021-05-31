<?php 

	include('database_connection.php');

	$query = "DELETE FROM cart WHERE numItem=".$_POST['numItem']."";
	$result = mysqli_query($connect, $query);



?>