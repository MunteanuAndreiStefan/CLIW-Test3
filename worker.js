onmessage = function(e) {

    let nrIncercari = e.data;
    let counter = 0;
    console.log(nrIncercari);

    for (let i = 0; i < nrIncercari; i++) {
        let x = Math.random() * 2 - 1;
        let y = Math.random() * 2 - 1;
        if (Math.sqrt(x * x + y * y) < 1)
            counter++;
    }


    postMessage(["raspuns", counter * 4 / nrIncercari]);
}