
var req;

function coordenadas(event) {
	x=event.clientX;
	y=event.clientY;
	// alert("X coords: " + x + ", Y coords: " + y);
	alert("X coords: " + x);
// ==========================================================================================
// Verificando Browser
	if(window.XMLHttpRequest) {
	   req = new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
	   req = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "192.168.1.158:9600/?"+x;					// comando arduino - <a href=\"/?cen\"\">Centralizar câmera</a>
// Chamada do método open para processar a requisição
	req.open("Get", url, true);
// Quando o objeto recebe o retorno, chamamos a seguinte função;
	req.onreadystatechange = function() {
// Exibe a mensagem enquanto carrega
		if(req.readyState == 1) {
			document.getElementById('retorno').innerHTML = 'enviando... '+x;
			// alert("enviando "+x);
		}
// Verifica se o Ajax realizou todas as operações corretamente
		if(req.readyState == 4 && req.status == 200) {
// Resposta retornada pelo busca.php
			// alert("enviado "+x);
			// var resposta = req.responseText;
// Abaixo colocamos a(s) resposta(s) na div resultado
			document.getElementById('retorno').innerHTML = 'enviado '+x;
		}
	}
	req.send(null);
// ==========================================================================================
}

function mouse(e) {

	if (document.all){}
	else document.captureEvents(Event.MOUSEMOVE);
	document.onmousemove=mouse;

	if (navigator.appName == 'Netscape'){
		xcurs = e.pageX;
		ycurs = e.pageY;
	} else {
		xcurs = event.clientX;
		ycurs = event.clientY;
	}

	document.getElementById('ver').style.left = (xcurs)+'px';
	// document.getElementById('hor').style.top = (ycurs)+'px';
}