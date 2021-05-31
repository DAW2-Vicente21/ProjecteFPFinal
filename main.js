/* LOGIN */

$(document).ready(function(){

	$('#homeForm').hide();
	$('#signUpHomeForm').hide();
	$('#compra').hide();
	$('.formLogin').hide();
	$('.logout').hide();
	$('#compraSuccess').hide();

	$('#login').on('click', function(){
		$('#mainHome').hide();
		$('#homeForm').show();
		$('#signUpHomeForm').hide();
	});

});

/* MENU */

$(document).ready(function(){

	$('#catalogo').hide();
	$('#cart').hide();
	$('#hiphopCatalogue').hide();
	$('#popCatalogue').hide();
	$('#latinaCatalogue').hide();
	$('#compra').hide();

	$('#btnHome').on('click', function(){
		$('#catalogo').hide();
		$('#home').show();
		$('#cart').hide();
		$('#hiphopCatalogue').hide();
		$('#popCatalogue').hide();
		$('#latinaCatalogue').hide();
		$('#mainHome').show();
		$('#homeForm').hide();
		$('#signUpHomeForm').hide();
		$('#compra').hide();
	});

	$('#btnCatalogo').on('click', function(){
		$('#catalogo').show();
		$('#home').hide();
		$('#cart').hide();
		$('#hiphopCatalogue').hide();
		$('#popCatalogue').hide();
		$('#latinaCatalogue').hide();
		$('#compra').hide();
	});

	$('#btnCart').on('click', function(){
		$('#catalogo').hide();
		$('#home').hide();
		$('#cart').show();
		$('#hiphopCatalogue').hide();
		$('#popCatalogue').hide();
		$('#latinaCatalogue').hide();
		$('#compra').hide();

	
		$('#cartDiv').load('showCart.php');

		$(document).ready(function(){
			$('#cartDiv').on('click', '.btnBorrar', function(){
				var idborrar = $(this).data("id");
				console.log(idborrar);
				borrarCarro(idborrar);
				$('#cartDiv').load('showCart.php');
			});
			$('#cartDiv').on('click', '.btnBuyCart', function(){
				$('#cart').hide();
				$('#compra').show();
				$('#formA').show();


				$('#compra').load('form.html');


				$('#compra').on('click', '#btnConfirmBuy', function(){
					$('#compraSuccess').load("confirm.php");
					alert("Thanks for your purchase!");
					$('#formA').hide();
					$('#cartDiv').show();
				});

			});
		});

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

		$(document).ready(function(){

			$('#popHome').on('click', '.btncart', function(){
				var idpop = $(this).data("id");
				añadirCarro(idpop);
			});

		});
	});

	$('#latina').on('click', function(){
		$('#catalogo').hide();
		$('#latinaCatalogue').show();

		$('#latinaHome').load('latina.php');

		$(document).ready(function(){

			$('#latinaHome').on('click', '.btncart', function(){
				var idlatina = $(this).data("id");
				añadirCarro(idlatina);
			});

		});

	});

});

$(document).ready(function(){

	$('#hiphopHome').on('click', '.btncart', function(){
		var idhiphop = $(this).data("id");
		console.log(idhiphop);
		añadirCarro(idhiphop);
		var idhiphop = null;
	});

});



function añadirCarro(id){

	$.post('addCart.php', {id_cd: id}, function(data){
		
	});
}

function borrarCarro(numItem){
	
	$.post('dropCart.php', {numItem: numItem}, function(data){
		
	});
}


/* LOGIN - SIGN UP */

$('.logInF').on('click', function(){
	$('.loginSignup').show();
	$('.loginSignup').load('login.html');
	$('.loginSignupStart').hide();
	
})

$('.signUpF').on('click', function(){
	$('.loginSignup').show();
	$('.loginSignup').load('signup.html');
	$('.loginSignupStart').hide();
})

$('.logOutF').on('click', function(){
	logOut();
})


$('#topLogin').on('click', '#btnlogin', function(){
	$('.formLogin').show();
	$('.loginSignupStart').hide();

	username = $('#user').val();
	password = $('#pass').val();

	console.log(username + ' ' + password);

	logIn(username, password);
	
});

$('#topLogin').on('click', '#btnsignup', function(){
	$('.formLogin').show();
	$('.loginSignupStart').hide();

	username = $('#user').val();
	password = $('#pass').val();
	passwordCon = $('#passCon').val();

	console.log(username + ' ' + password + ' ' + passwordCon);

	signUp(username, password, passwordCon);
	
});


function logIn (username, password){
	$.post('loginA.php', {user: username, pass: password}, function(data){
		$('#target').load('loginA.php');
	})
	console.log('abc');
	$.post('loginB.php', function(data){
		$('.formLogin').load('loginB.php');
	});
	console.log('abc');
	$('.loginSignup').hide();
	$('.logout').show();
	$('#cartDiv').load('showCart.php');
}

function signUp (username, password, passwordCon){
	$.post('signupA.php', {user: username, pass: password, passCon: passwordCon}, function(data){
		$('#target').load('signupA.php');
	})
	$.post('loginB.php', function(data){
		$('.formLogin').load('signupB.php');
	});
	$('.loginSignup').hide();
	$('.loginSignupStart').show();

}

function logOut (){
	$('#target').load('logout.php');

	$('.loginSignupStart').show();
	$('.logout').hide();
	$('.formLogin').hide();

	$('#cartDiv').load('showCart.php');
}


