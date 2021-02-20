"use strict";
const OW = require("./OW")

const ow = new OW();
/**
 * 
 * @param {string} q - City name, state code and country code divided by comma, use ISO 3166 country codes.
 * @param {string} lang - You can use this parameter to get the output in your language.
 * @param {string} key - API key from https://openweathermap.org/current
 */
async function getWeather(q,lang,key){
    ow.setKey(key);

    const data = await ow.getWeather(q,lang);
    if(data.cod == '404') return console.log(data.message);

    return data;
}


module.exports =  {getWeather};