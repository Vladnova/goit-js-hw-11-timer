import { days, hours, mins, secs } from './update-time';

class CountdownTimer  {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;        
    };
    start(){
        const currentDate = new Date(this.targetDate);
        this.updateClockface(0);
        setInterval(() => {
            const nowTime = Date.now();
            const deltaTime = currentDate - nowTime;
           this. updateClockface(deltaTime);
        }, 1000);
    };
    updateClockface(time) {
            const refs = {
            day: document.querySelector(this.selector +' [data-value="days"]'),
            hour: document.querySelector(this.selector + ' [data-value="hours"]'),
            minutes: document.querySelector(this.selector + ' [data-value="mins"]'),
            seconds: document.querySelector(this.selector + ' [data-value="secs"]'),
        };
        const { day, hour, minutes, seconds } = refs;        

        day.textContent = days(time);
        hour.textContent = hours(time);
        minutes.textContent = mins(time);
        seconds.textContent = secs(time);
    };  
};
export default CountdownTimer;

