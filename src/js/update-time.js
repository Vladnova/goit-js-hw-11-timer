import pad from './pad';

const days=time=> pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours =time=>pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))); 
const  mins=time=>pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));   
const secs=time=>pad(Math.floor((time % (1000 * 60)) / 1000)); 

export {days,hours,mins,secs};