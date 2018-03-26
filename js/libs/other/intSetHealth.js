var intSetHealth = function(el, oEl, obj){
	var done = false;
	while(!done){
		if(isObject(obj)){
			console.count(obj.hp);
			SetHealth(el, oEl, obj);/*el, player*/
			done = true;
		}
	}
	if(done){
		//console.log("done setting up setHeath for ", obj.name,"with the input",el);
	}
};