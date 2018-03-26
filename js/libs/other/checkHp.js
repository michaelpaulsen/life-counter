var checkHp = function(player){
	if(player.hp <= 0){
		player.isWinner = false;
	}
}

var checkIsWinner = function(player1,player2){
	var winner;
	if(player1.isWinner != null){
		winner = player1.isWinner;
		player1.isWinner = null;
		if( winner == false ){
			player2.points ++;
		}else{
			player1.points++;
		}
	}else{
		if(player2.isWinner != null){
			winner = player2.isWinner;
			player1.isWinner = null;
			if( winner == false){
				player1.points++;
			}else{
				player2.points++;
			}
		}
	}
				
		


}