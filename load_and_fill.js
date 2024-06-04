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
					
						  
						//let dl = document.querySelector('[' + x + ']');
						//if (dl != null) 
					} catch (e) {}
				}	 
			}
			if (custom_proc != undefined) custom_proc(this.server_data);
		}
		catch (e) {alert(e)}

	}
	
	this.xmlhttp.open('POST', '');
	this.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	this.xmlhttp.send(JSON.stringify(this._request_dictionary));	
  }
}
