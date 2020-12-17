import './styles.css';
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const refs = {
    day: document.querySelector('[data-value="days"]'),
    hour: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
};
const { day, hour, minutes, seconds } = refs;

function startTime() {
    const targetDate = new Date('Jan 01, 2021');
    updateClockface(0); 
    setInterval(() => {
    const nowTime = Date.now();    
    const deltaTime = targetDate - nowTime;
    updateClockface(deltaTime);    
    }, 1000); 
}
startTime();

function updateClockface(time) {
    /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    day.textContent = `${days}`;
    hour.textContent = `${hours}`;
    minutes.textContent = `${mins}`;
    seconds.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}