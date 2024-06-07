	// загрузка данных
	

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

					} catch (e) {}
				}	 
			}
			if (custom_proc != undefined) custom_proc(this.server_data);
		}
		catch (e) {alert(e)}

	}
	
	this.xmlhttp.onerror = function() { 
	  alert('Ошибка мать вашу!');
	};	

	this.xmlhttp.open('POST', 'https://coliseum-game.ru:4443');

	this.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	/*this.xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');*/	

	try {
		this.xmlhttp.send(JSON.stringify(this._request_dictionary));	
	}
	catch (e) {alert(e)}
  }
}

