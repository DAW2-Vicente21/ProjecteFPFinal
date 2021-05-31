<?php 
	
	include('database_connection.php');

	session_start();

	if (isset($_SESSION['user'])){

		if (isset($_GET['pageno'])){
			$pageno = $_GET['pageno'];
		} else {
			$pageno = 1;
		}

		$no_of_record_per_page = 10;
		$offset = ($pageno-1) * $no_of_record_per_page;

		$total_pages_sql = "SELECT COUNT(*) FROM cart";
		$res = mysqli_query($connect, $total_pages_sql);
		$total_rows = mysqli_fetch_array($res)[0];
		$total_pages = ceil($total_rows / $no_of_record_per_page);

		$userid = "SELECT id FROM user WHERE username = '".$_SESSION['user']."'";
		$resultId = mysqli_query($connect, $userid);

		while($row = mysqli_fetch_array($resultId)){

			$id = $row['id'];
			
		}

		$query = "SELECT cd.*, ca.numItem FROM cart ca, cd cd WHERE cd.id = ca.id_cd and ca.id_user = '".$id."' LIMIT $offset, $no_of_record_per_page";
		$result = mysqli_query($connect, $query);

		$querySuma = "SELECT SUM(cd.price) FROM cart ca, cd cd WHERE cd.id = ca.id_cd and ca.id_user = '".$id."'";
		$sumResult = mysqli_query($connect, $querySuma);

		echo "<table id='tableCart'>";

		while($row = mysqli_fetch_array($result)){

			echo "<tr class='rowsTable'><td><img src='imgs/". $row['title'] .".jpg' width='75' height='75'></td><td>". $row['title'] ."</td><td>". $row['artist'] ."</td><td>". $row['price'] ." €</td><td> <button type='button' data-id='".$row['numItem']."' class='btnBorrar btn btn-danger'> Drop </button> </td></tr>";
		
		}

		while($row = mysqli_fetch_array($sumResult))
		echo "<tr class='ltTable'><td></td><td></td><td></td><td>".round($row[0], 2)." €</td><td><button type='button' class='btnBuyCart btn btn-success'> Buy </button></td></tr>";
		echo "</table>";


	} else {

		echo 'Log in to see your cart!';

	}	

?>



	
