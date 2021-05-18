/* LOGIN */

$(document).ready(function(){

	$('#homeForm').hide();
	$('#signUpHomeForm').hide();


	$('#login').on('click', function(){
		$('#mainHome').hide();
		$('#homeForm').show();
		$('#signUpHomeForm').hide();
	});

	$('#signup').on('click', function(){
		$('#mainHome').hide();
		$('#signUpHomeForm').show();
		$('#homeForm').hide();
	});
	
	$('#btn-SignUpSubmit').on('click', function(){

		username = $('#userSignup').val()
		password = $('#passSignup').val()

		$('#signUpHomeForm').load('signup.php', {user:username, pass:password});
	});
	
	$('#btn-submit').on('click', function(){

		username = $('#userlogin').val()
		password = $('#passlogin').val()

		$('#homeForm').load('login.php', {user:username, pass:password});
	});

});

/* MENU */

$(document).ready(function(){

	$('#catalogo').hide();
	$('#artists').hide();
	$('#hiphopCatalogue').hide();
	$('#popCatalogue').hide();
	$('#latinaCatalogue').hide();

	$('#btnHome').on('click', function(){
		$('#catalogo').hide();
		$('#home').show();
		$('#artists').hide();
		$('#hiphopCatalogue').hide();
		$('#popCatalogue').hide();
		$('#latinaCatalogue').hide();
		$('#mainHome').show();
		$('#homeForm').hide();
		$('#signUpHomeForm').hide();
	});

	$('#btnCatalogo').on('click', function(){
		$('#catalogo').show();
		$('#home').hide();
		$('#artists').hide();
		$('#hiphopCatalogue').hide();
		$('#popCatalogue').hide();
		$('#latinaCatalogue').hide();
	});

	$('#btnArtists').on('click', function(){
		$('#catalogo').hide();
		$('#home').hide();
		$('#artists').show();
		$('#hiphopCatalogue').hide();
		$('#popCatalogue').hide();
		$('#latinaCatalogue').hide();
	});

});

/* CATALOGO */

$(document).ready(function(){

	$('#btn-catalogo').on('click', function(){
		$('#catalogo').hide();
		$('#home').show();
	});

	$('#btn-hiphopcatalogos').on('click', function(){
		$('#hiphopCatalogue').hide();
		$('#catalogo').show();
	});

	$('#btn-popcatalogos').on('click', function(){
		$('#popCatalogue').hide();
		$('#catalogo').show();
	});

	$('#btn-latinacatalogos').on('click', function(){
		$('#latinaCatalogue').hide();
		$('#catalogo').show();
	});

	$('#hiphop').on('click', function(){
		$('#catalogo').hide();
		$('#hiphopCatalogue').show();

		$('#hiphopHome').load('hiphop.php');
	});

	$('#pop').on('click', function(){
		$('#catalogo').hide();
		$('#popCatalogue').show();

		$('#popHome').load('pop.php');
	});

	$('#latina').on('click', function(){
		$('#catalogo').hide();
		$('#latinaCatalogue').show();

		$('#latinaHome').load('latina.php');
	});

});