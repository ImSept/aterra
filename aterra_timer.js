    // класс для создание таймера обратного отсчета
    class CountdownTimer {
      constructor(deadline, cbChange, cbComplete) {
        this._deadline = deadline;
        this._cbChange = cbChange;
        this._cbComplete = cbComplete;
        this._timerId = null;
        this._out = {
          days: '', hours: '', minutes: '', seconds: '',
          daysTitle: '', hoursTitle: '', minutesTitle: '', secondsTitle: ''
        };
        this._start();
      }
      static declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
      }
      _start() {
        this._calc();
        this._timerId = setInterval(this._calc.bind(this), 1000);
      }
      _calc() {
        const diff = this._deadline - new Date();
		
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        this._out.hours = hours < 10 ? '0' + hours : hours;
        this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
        this._out.seconds = seconds < 10 ? '0' + seconds : seconds;

        this._cbChange ? this._cbChange(this._out) : null;
        if (diff <= 0) {
          clearInterval(this._timerId);
          this._cbComplete ? this._cbComplete() : null;
        }
      }
    }

    class IntervalTimer {
      constructor(interval, func) {
        this._interval = interval;
        this._do = func;
        this._timerId = null;
        this._start();
      }
      _start() {
		this._do()
        this._timerId = setInterval(this._do.bind(this), this._interval);
      }

    }