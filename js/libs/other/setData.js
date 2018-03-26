var setData = function(el,data){ 
	var rr;
	var value;
	
	$(el).blur(function(){
		value = $(this).val();
		if(value != ""){ 
			if(confirm("do you whant to set "+ data + " to " + value)){
				rr = new Player(value,0,true,null, null);/*name, points, isActive, isWinner,hp/*,mach*/;
				obj = rr;
				//console.log(value, rr);
			}else{
				rr = 0; 
			}
		}else{
			console.error(el," is = \" \" ");
			rr = 0; 
		}
		
		console.log(typeof rr, typeof obj);
		if(isObject(rr)){
			setPid(rr,pids,120000000);/*obj, pids, maxNum*/
		}
		return rr;
	});
	/* when you lose focus on the el 
	if the value of el is not " " and 
	if you confirm that you want to set the data to the value of el
	sets rr to a new player
	then if rr is an object 
	it set rr's pid (player id; see place(app).js for more detals on setPid)
	then returns rr 
	*/
};