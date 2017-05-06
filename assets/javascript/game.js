//<---------Pokemons stats-------------->
$('.pikachu').data({
	name: "Pikachu",
	hp:  110,
	atk:  15,
	catk: 15 
})

$('.bulbasaur').data({
	name: "Bulbsaur",
	hp:  130,
	atk:  20,
	catk: 18 
})

$('.squirtle').data({
	name: "Squirtle",
	hp:  95,
	atk:  1,
	catk: 20 
})

$('.charmander').data({
	name: "Charmander",
	hp:  100,
	atk:  54,
	catk: 5 
})
//<-------End of Pokemons stats---------->

//----Winning Condition---------->
var enemiesdefeated = 0;
//-----End of Winning Condition-->


var fighting = false; //CHECK IF FIGHTING
var won      = false;
var lost     = false;

var original = $('.pokemons').clone(true)



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
	    $('.pikachu').addClass( "attacker" );
	    $('.squirtle').val("defender");
	    $('.charmander').val("defender");
	    $('.bulbasaur').val("defender");

	} 
	else if($('.pikachu').val()==="defender"&& fighting === false&& won === false && lost === false){
    		$('.defenders').append($('.pikachu'));
    		$('.pikachu').css({"background-color":"black"});	
    		$('.pikachu').addClass( "defender" );
    		fighting = true;
    		$(".battlelog").html("");
	}
});


$('.squirtle').click(function(){

	if(($('.squirtle').val() === "")) {
		$('.yourcharacter').append($(".squirtle"));
		$('.squirtle').css({"float":"left","background-color":"green"});
	    $('.enemies').append($(".pikachu"));
	    $('.pikachu').css({"float":"left","background-color":"red"});
	    $('.enemies').append($(".charmander"));
	    $('.charmander').css({"float":"left","background-color":"red"});
	    $('.enemies').append($(".bulbasaur"));
	    $('.bulbasaur').css({"float":"left","background-color":"red"});
	    $('.squirtle').val("yourcharacter");
	    $('.squirtle').addClass( "attacker" );
	    $('.pikachu').val("defender");
	    $('.charmander').val("defender");
	    $('.bulbasaur').val("defender");

	} 
	else if($('.squirtle').val()==="defender" && fighting === false&& won === false && lost === false){
    		$('.defenders').append($('.squirtle'));
    		$('.squirtle').css({"background-color":"black"});	
    		$('.squirtle').addClass( "defender" );
    		fighting = true;
    		$(".battlelog").html("");
	}
});


$('.charmander').click(function(){

	if(($('.charmander').val() === "")) {
		$('.yourcharacter').append($(".charmander"));
		$('.charmander').css({"float":"left","background-color":"green"});
	    $('.enemies').append($(".pikachu"));
	    $('.pikachu').css({"float":"left","background-color":"red"});
	    $('.enemies').append($(".squirtle"));
	    $('.squirtle').css({"float":"left","background-color":"red"});
	    $('.enemies').append($(".bulbasaur"));
	    $('.bulbasaur').css({"float":"left","background-color":"red"});
	    $('.charmander').val("yourcharacter");
	    $('.charmander').addClass( "attacker" );
	    $('.pikachu').val("defender");
	    $('.squirtle').val("defender");
	    $('.bulbasaur').val("defender");

	} 
	else if($('.charmander').val()==="defender"&& fighting === false&& won === false && lost === false){
    		$('.defenders').append($('.charmander'));	
    		$('.charmander').css({"background-color":"black"});
    		$('.charmander').addClass( "defender" );
    		fighting = true;
    		$(".battlelog").html("");
	}
});


$('.bulbasaur').click(function(){

	if(($('.bulbasaur').val() === "")) {
		$('.yourcharacter').append($(".bulbasaur"));
		$('.bulbasaur').css({"float":"left","background-color":"green"});
	    $('.enemies').append($(".pikachu"));
	    $('.pikachu').css({"float":"left","background-color":"red"});
	    $('.enemies').append($(".squirtle"));
	    $('.squirtle').css({"float":"left","background-color":"red"});
	    $('.enemies').append($(".charmander"));
	    $('.charmander').css({"float":"left","background-color":"red"});
	    $('.bulbasaur').val("yourcharacter");
	    $('.bulbasaur').addClass( "attacker" );
	    $('.pikachu').val("defender");
	    $('.squirtle').val("defender");
	    $('.charmander').val("defender");

	} 
	else if($('.bulbasaur').val()==="defender"&& fighting === false&& won === false && lost === false){
    		$('.defenders').append($('.bulbasaur'));	
    		$('.bulbasaur').css({"background-color":"black"});
    		$('.bulbasaur').addClass( "defender" );
    		fighting = true;
    		$(".battlelog").html("");
	}
});
//<----------End of Choosing Character and Enemies--------------->







//<---------------Attacking----------------------------------->
$('.btn-danger').click(function(){


	try{
		var yourhp = $('.attacker').data().hp;
		var defenderhp = $('.defender').data().hp;
		var atk    = $('.attacker').data().atk;

		defenderhp = defenderhp - $('.attacker').data().atk;
		yourhp = yourhp - $('.defender').data().catk;

		$('.attacker').find(".hp").html("HP : " + yourhp);
		$('.defender').find(".hp").html("HP : " + defenderhp);
		$(".battlelog").html("You attacked " + $('.defender').data().name + " for " + atk + " hitpoints!");
		$(".battlelog").append(" "+ $('.defender').data().name+ " attacked " + "you for " + $('.defender').data().catk + " hitpoints!");

		if(defenderhp <= 0){

				if(enemiesdefeated===2){
						$(".battlelog").html("You WON!");
						$('.defender').remove();
						$('.restart').append("<button type='button' class='btn btn-primary' onclick='restart()'>Restart</button>");
						won = true;
						return false;

				}else{
						$(".battlelog").html("You defeated " + $('.defender').data().name + ". Choose another enemy." );
						enemiesdefeated++;
						$('.attacker').data().hp = yourhp;
						$('.attacker').data().atk= atk;
						$('.defender').remove();
						fighting = false;
				}
		}



		if(yourhp <= 0){
				$(".battlelog").html("You Lost!");
				$('.defender').remove();
				$('.restart').append("<button type='button' class='btn btn-primary' onclick='restart()'>Restart</button>");
				lost = true;
				return false;
		}


		atk = atk + 6;

		$('.defender').data().hp = defenderhp;
		$('.attacker').data().hp = yourhp;
		$('.attacker').data().atk= atk;
	}

	catch(e) {
		if(won===false && lost ===false){
			$(".battlelog").html("Pick an enemy!!");
		}
	}





});

//<--------------End of Attacking------------------------------>


function restart(){
	location.reload();
}