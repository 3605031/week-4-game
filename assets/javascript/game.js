//<---------Pokemon stats-------------->
$('#pikachu').data({
	hp:  110,
	atk:  15,
	catk: 15 
})

$('#bulbasaur').data({
	hp:  130,
	atk:  20,
	catk: 10 
})

$('#squirtle').data({
	hp:  150,
	atk:  10,
	catk: 20 
})

$('#charmander').data({
	hp:  100,
	atk:  30,
	catk: 0 
})
//<-------End of Pokemons stats---------->


//<----------Choosing Character and Enemies--------------->
$('.pikachu').click(function(){

	if(($('.pikachu').val() === "")) {
		$('.yourcharacter').append($(".pikachu"));
		$('.pikachu').css({"float":"left","background-color":"green"});
	    $('.enemies').append($(".squirtle"));
	    $('.squirtle').css({"float":"left","background-color":"red"});
	    $('.enemies').append($(".charmander"));
	    $('.charmander').css({"float":"left","background-color":"red"});
	    $('.enemies').append($(".bulbasaur"));
	    $('.bulbasaur').css({"float":"left","background-color":"red"});
	    $('.pikachu').val("yourcharacter");
	    $('.squirtle').val("defender");
	    $('.charmander').val("defender");
	    $('.bulbasaur').val("defender");

	} 
	else if($('.pikachu').val()==="defender"){
    		$('.defender').html($('#pikachu'));	
	}
});


$('#squirtle').click(function(){

	if(($('.squirtle').val() === "")) {

		$('.yourcharacter').append($("#squirtle"));
		$('.squirtle').remove();
		$('.squirtle1').css({"background-color":"green","border-style": "solid","border-width": "3px","border-color": "black"});
		$('.squirtle1').css("width","159px");
    	$('.enemies').append($("#pikachu"));
    	$('.enemies').append($("#charmander"));
    	$('.enemies').append($("#bulbasaur"));
    	$('#squirtle').val("yourcharacter");
    	$('#pikachu').val("defender");
    	$('#charmander').val("defender");
    	$('#bulbasaur').val("defender");
	} 

	else if($('#squirtle').val()==="defender"){
    		$('.defender').html($('#squirtle'));
    		$('.squirtle1').css({"background-color":"green","border-style": "solid","border-width": "3px","border-color": "black"});
			$('.squirtle1').css("width","159px");
	}
});


$('#charmander').click(function(){

	if(($('#charmander').val() === "")) {

		$('.yourcharacter').append($("#charmander"));
    	$('.enemies').append($("#pikachu"));
    	$('.enemies').append($("#squirtle"));
    	$('.enemies').append($("#bulbasaur"));
    	$('#charmander').val("yourcharacter");
    	$('#pikachu').val("defender");
    	$('#squirtle').val("defender");
    	$('#bulbasaur').val("defender");
	} 

	else if($('#charmander').val()==="defender"){
    		$('.defender').html($('#charmander'));
	}
});

$('#bulbasaur').click(function(){

	if(($('#bulbasaur').val() === "")) {

		$('.yourcharacter').append($("#bulbasaur"));
    	$('.enemies').append($("#pikachu"));
    	$('.enemies').append($("#charmander"));
    	$('.enemies').append($("#squirtle"));
    	$('#bulbasaur').val("yourcharacter");
    	$('#pikachu').val("defender");
    	$('#charmander').val("defender");
    	$('#squirtle').val("defender");
	} 

	else if($('#bulbasaur').val()==="defender"){
    		$('.defender').html($('#bulbasaur'));
	}
});
//<----------End of Choosing Character and Enemies--------------->



$('.btn-danger').click(function(){


	})