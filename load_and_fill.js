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


	this.xmlhttp.open('POST', 'https://coliseum-game.ru:4443');
	

	this.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

this.xmlhttp.setRequestHeader("Connection", "keep-alive");
this.xmlhttp.setRequestHeader("sec-ch-ua", "\"Microsoft Edge\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\", \"Microsoft Edge WebView2\";v=\"125\"");
this.xmlhttp.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
this.xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
this.xmlhttp.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0");
this.xmlhttp.setRequestHeader("sec-ch-ua-platform", "\"Windows\"");
this.xmlhttp.setRequestHeader("Sec-Fetch-Site", "cross-site");
this.xmlhttp.setRequestHeader("Sec-Fetch-Mode", "cors");
this.xmlhttp.setRequestHeader("Sec-Fetch-Dest", "empty");
this.xmlhttp.setRequestHeader("Accept-Encoding", "gzip, deflate, br, zstd");
this.xmlhttp.setRequestHeader("Accept-Language", "ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7");


	try {
		this.xmlhttp.send(JSON.stringify(this._request_dictionary));	
	}
	catch (e) {alert(e)}
  }
}

