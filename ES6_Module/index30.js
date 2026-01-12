/* 
ES6 Module = An external file that contains reusable code
             that can be imported into other JS files.
             Write reusable code for many different apps.
             Can contain variables, classes, functions ... and more 
             Introduced as part of ECMAScript 2015 update
*/

import {PI, getArea, getCircumference, getVolume } from  './mathUtil.js';

console.log(PI);
const circumference = getCircumference(4);
const area = getArea(4);
const volume = getVolume(4);

console.log(`${area.toFixed(2)}cm^2`);
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${volume.toFixed(2)}cm^3`);