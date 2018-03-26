var x;
var obj;
var pids =[];

/*var Mach = function (p1, p2) {
	obj = {
		p1: p1,
		p2: p2
	};
	return obj;
};

*/
var Player = function (name, points, isActive, isWinner, hp) {
	obj = {
		name : name,
		points : points,
		isActive : isActive,
		isWinner : isWinner,
		hp: hp,
		pid: null /*,
		cMach: mach*/
	};
	return obj;
	
};

var setPid = function (obj, pids, maxNum) {
	var z, x, pidIsSet = false;

	while (!pidIsSet) {
		x =  Math.round(Math.random() * maxNum);
		if (pids.length > 0) {
			for (z = 0; z <= pids.length; z++) {
				if (x == pids[z]) {
					x = undefined;
				}
			}
		}
		if(x != undefined) {
			obj.pid = x;
			pidIsSet = true;
			pids.push(x);
			console.log("pids = ",pids);
		}
	}
};