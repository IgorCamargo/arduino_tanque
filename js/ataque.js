function coordenadas(event) {
	x=event.clientX;
	y=event.clientY;
	// alert("X coords: " + x + ", Y coords: " + y);
	alert("X coords: " + x);
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