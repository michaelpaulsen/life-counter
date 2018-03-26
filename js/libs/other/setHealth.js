var temp;
/*var setTemp = function(el){
	var value = parseFloat($(el).val());
	if ($(el).val() != ""){
		$(el).attr("temp", "" + value + "");
	}else{
		$(el).attr("temp", " ");
	}
	temp = $(el).attr("temp");
	//console.log("temp = ", temp);
	return temp;
}*/
var SetHealth = function(el, oEl, player, contaner){
	var value;
	var attr;
	$("body").keyup(function(e){
		if(isObject(player) && e.originalEvent.key == "t"){
			value = parseFloat($(el).val())
			console.count("-_"+value);
			//console.count(value);
			if((player.hp -= value) != NaN){
				//console.log("e")
				player.hp -= (value);
				if(player.hp <= 10){
					$(oEl).css({
						'color':'#f00'
					});
				}
				//console.log(player)
				$(oEl).append(player.name+"'s hp is " + player.hp);
			}else{
				//console.error("somthing went wrong");
			}
		}
	})
	return 1;
	}; 

var startGame = function (el1, el2, oEl1, oEl2, p1, p2,  startingHp) {
	////console.log(startingHp);
	if(isObject(p1) && isObject(p2)){
		p1.hp = startingHp;
		p2.hp = startingHp;
		intSetHealth(el1, oEl1, p1, contaner);
		intSetHealth(el2, oEl2, p2, contaner);
		////console.log(startingHp);
		////console.log("your hp is = ", p1.hp, " points")
	}else{
		if(!isObject(p1)){
			//console.error("trying to start game but could not find player 1 ");
		}
		if(!isObject(p2)){
			//console.error("trying to start game but could not find player 2 ");
			
		}
	}
	////console.log(p1,"\t",p2);
};