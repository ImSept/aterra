	// загрузка данных
	

/*
class DataLoader {
  constructor(request_dictionary, custom_proc = undefined, Fill=true) {
	$.post( "https://coliseum-game.ru:4443", request_dictionary, function( data ) {
		if (Fill) {
			for (let x in data) {
				try {
					var dls = document.querySelectorAll('[' + x + ']');

					[...dls].forEach(dl => dl.textContent = data[x]);

				} catch (e) {}
			}	 
		}
		if (custom_proc != undefined) custom_proc(data);
	}, "json");	
  }
}
 	*/




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


	/*this.xmlhttp.open('POST', '');*/
	this.xmlhttp.open('POST', 'https://coliseum-game.ru:4443');
	

	this.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	this.xmlhttp.setRequestHeader("Sec-Fetch-Dest", "empty");
	this.xmlhttp.setRequestHeader("Sec-Fetch-Mode", "cors");
	this.xmlhttp.setRequestHeader("Sec-Fetch-Site", "cors-site");	
	
	

	if (false) {
		this.xmlhttp.setRequestHeader("Permissions-Policy", "interest-cohort=()");
		this.xmlhttp.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
		this.xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	}

	try {
		this.xmlhttp.send(JSON.stringify(this._request_dictionary));	
	}
	catch (e) {alert(e)}
  }
}

