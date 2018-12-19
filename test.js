document.getElementById("btnStart").addEventListener("click", function(){
  let nrIncercari = parseInt(document.getElementById("nrInstances").value);
  let nrWorkeri = parseInt(document.getElementById("nrWork").value);
  
	document.body.innerHTML += "<br>";
	
	var workeri = new Array(nrWorkeri);
	for (var i = 0; i < workeri.length; i++) {
		workeri[i] = new Worker('worker.js');
		workeri[i].postMessage(nrIncercari / workeri.length);
	}
	var piSum = 0;

	for (var i = 0; i < workeri.length; i++) {
		workeri[i].onmessage = event => {
			piSum = piSum + event.data[1]
			document.body.innerHTML += piSum;
			document.body.innerHTML += "<br>";
		}
	}
}); 