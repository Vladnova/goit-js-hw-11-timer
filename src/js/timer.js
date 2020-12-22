class CountdownTimer  {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;        
    }
    start(){
        const targetDate = new Date(this.targetDate);
        this.updateClockface(0);
        setInterval(() => {
            const nowTime = Date.now();
            const deltaTime = targetDate - nowTime;
           this. updateClockface(deltaTime);
        }, 1000);
    }

    updateClockface(time) {        
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        const refs = {
            day: document.querySelector(this.selector +' [data-value="days"]'),
            hour: document.querySelector(this.selector + ' [data-value="hours"]'),
            minutes: document.querySelector(this.selector + ' [data-value="mins"]'),
            seconds: document.querySelector(this.selector + ' [data-value="secs"]'),
        };
        const { day, hour, minutes, seconds } = refs;        

        day.textContent = `${days}`;
        hour.textContent = `${hours}`;
        minutes.textContent = `${mins}`;
        seconds.textContent = `${secs}`;
    }
    
    pad(value) {
        return String(value).padStart(2, '0');
    }
};
export default CountdownTimer;

