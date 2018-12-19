document.getElementById("btnStart").addEventListener("click", function(){
  let nrInstances = parseInt(document.getElementById("nrInstances").value);
  let nrWorkers = parseInt(document.getElementById("nrWork").value);
  
	document.body.innerHTML += "<br>";
	
	var workers = new Array(nrWorkers);
	for (var i = 0; i < workers.length; i++) {
		workers[i] = new Worker('worker.js');
		workers[i].postMessage(nrInstances / workers.length);
	}
	var piSum = 0;

	for (var i = 0; i < workers.length; i++) {
		workers[i].onmessage = event => {
			piSum = piSum + event.data[1]
			document.body.innerHTML += piSum;
			document.body.innerHTML += "<br>";
		}
	}
}); 