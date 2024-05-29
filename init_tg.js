(function () {
	let tg      = window.Telegram;

	if(tg != undefined){
	  if (tg.WebApp != undefined){
	   
	  let safe    = tg.WebApp.initData;
	  
	  tg.WebApp.headerColor = '#0b1425';
	  //if (!tg.isExpanded){
	  tg.WebApp.expand();
		//};
	  //tg.MainButton.hide();
	  //if (tg.MainButton.isVisible){
		  
		//  };
	  }
	};
})();