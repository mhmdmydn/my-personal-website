
if("serviceWorker" in navigator){
	navigator.serviceWorker.register("js/sw.js")
		.then(registration => {
			console.log("PWA Success");
		})
		.catch(error => {console.log(error);})
}