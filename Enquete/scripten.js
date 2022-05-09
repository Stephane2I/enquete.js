var csim=1;
var cnao=1;

function aumentar(nheu) {
	if (nheu==1){
		csim+=1;
		document.querySelector("#sim").style.width=(csim*10)+"px";
		document.querySelector("#sim").innerHTML=csim-1;
	}


	if (nheu==0){
		cnao+=1;
		document.querySelector("#nao").style.width=(cnao*10)+"px";
		document.querySelector("#nao").innerHTML=cnao-1;
	}
}