import { days, hours, mins, secs } from './update-time';

class CountdownTimer  {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;        
        this.day = document.querySelector(this.selector + ' [data-value="days"]');
        this.hour= document.querySelector(this.selector + ' [data-value="hours"]');
        this.minutes = document.querySelector(this.selector + ' [data-value="mins"]');
        this.seconds = document.querySelector(this.selector + ' [data-value="secs"]');        
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
        this.day.textContent = days(time);
        this.hour.textContent = hours(time);
        this.minutes.textContent = mins(time);
        this.seconds.textContent = secs(time);
    };  
};
export default CountdownTimer;

