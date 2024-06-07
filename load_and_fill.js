	// загрузка данных
	
/*	
class DataLoader {
  constructor(request_dictionary, custom_proc = undefined, Fill=true) {
	this._request_dictionary = request_dictionary;

	
	this.xmlhttp = new XMLHttpRequest();
	this.xmlhttp.onload = function() {
		try {
			this.server_data = JSON.parse(this.responseText)
			if (Fill) {
				for (let x in this.server_data) {
					try {
						var dls = document.querySelectorAll('[' + x + ']');

						[...dls].forEach(dl => dl.textContent = this.server_data[x]);
					
						  
						//let dl = document.querySelector('[' + x + ']');
						//if (dl != null) 
					} catch (e) {alert(e)}
				}	 
			}
			if (custom_proc != undefined) custom_proc(this.server_data);
		}
		catch (e) {alert(e)}

	}
	
	this.xmlhttp.onerror = function() { 
	  alert('Ошибка!');
	};	

	this.xmlhttp.open('POST', 'https://coliseum-game.ru:4443');

	this.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	this.xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');	

	try {
		this.xmlhttp.send(JSON.stringify(this._request_dictionary));	
	}
	catch (e) {alert(e)}
  }
}
*/
class DataLoader {
	constructor(request_dictionary, custom_proc = undefined, fill=true) {
		this._request_dictionary = request_dictionary;
		this._custom_proc = custom_proc;
		this._fill = fill;
		
		response = await postData(url = "https://coliseum-game.ru:4443", data = this._request_dictionary);
		if (fill) {
			for (let x in response) {
				try {
					var dls = document.querySelectorAll('[' + x + ']');

					[...dls].forEach(dl => dl.textContent = response[x]);
				
					  
					//let dl = document.querySelector('[' + x + ']');
					//if (dl != null) 
				} catch (e) {alert(e)}
			}	 
		}
		if (custom_proc != undefined) custom_proc(response);
		
	}
	
	async postData(url = "", data = {}) {
	  // Default options are marked with *
	  const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
		  "Content-Type": "application/json",
		  // 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	  });
	  return response.json(); // parses JSON response into native JavaScript objects
	}	
}	
	  
