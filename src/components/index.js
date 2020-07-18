//This index.js file will export all the jsx files component files
//into one such that we can directly refer to all of them from the App.js file during rendering
//Importing in App.js : import {Cards, Chart, CountryPicker} from './components/index'; 


export {default as Cards} from './Cards/Cards'; 
export {default as Chart} from './Chart/Chart';
export {default as CountryPicker} from './CountryPicker/CountryPicker';
export {default as Information} from './Information/Information';
export {default as CDCLinks} from './CDCLinks/CDCLinks';
