<?php 

	include('database_connection.php');

	$query = "SELECT id, title, artist, price FROM cd WHERE genre ='Hip Hop'";
	$result = mysqli_query($connect, $query);

	echo "<div class='card-deck'>";

	while($row = mysqli_fetch_array($result)){


			echo "<div class='col-sm-2'>";
			echo "<div class='card hiphopCard my-3'>";
			echo "<img class='card-img-top' src='imgs/".$row['title'].".jpg' alt='Cover Image'>";
			echo "<div class='card-body'>";
			echo "<p class='card-text textCards'>" .$row['title']. "</p>";
			echo "<p class='card-text textCardsL'>" .$row['artist']. "</p>";
			echo "<p class='card-text textCards'>" .$row['price']. " €</p>";
			echo "<button data-id='".$row['id']."' class='btncart btn-success card-text'>Add to Cart</button>";
			echo "</div></div></div>";		
		

	}

	echo "</div>";


?>