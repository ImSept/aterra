class Swiper {
  constructor(to_left_url, to_right_url) {
	this._to_left = to_left_url;
	this._to_right = to_right_url;
	this.touchstartX = 0;
	this.touchendX = 0;
	
	document.addEventListener('touchstart', e => {
	  this.touchstartX = e.changedTouches[0].screenX
	})

	document.addEventListener('touchend', e => {
	  this.touchendX = e.changedTouches[0].screenX
	  this.checkDirection()
	})
  }
  
  checkDirection() {
	  if (this.touchendX < this.touchstartX) window.location.href = to_right_url;
	  if (this.touchendX > this.touchstartX) window.location.href = to_left_url;
	}
  };

