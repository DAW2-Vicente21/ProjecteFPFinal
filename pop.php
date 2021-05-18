<?php 

	include('database_connection.php');

	$query = "SELECT title, artist FROM cd WHERE genre ='Pop'";
	$result = mysqli_query($connect, $query);

	echo "<table>";

	while($row = mysqli_fetch_array($result)){
		echo "<tr><td>" . $row['title'] . "</td><td>". $row['artist'] ."</td></tr>";
	}
	
	echo "</table>";

?>