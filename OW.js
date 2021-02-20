"use strict";
const axios = require('axios');
/***
 * Clase
 */
class OpenWeather {
    
    constructor() {
        this.key;
    }

    /**
     * @param {string} key
     */
    setKey(key){
        this.key=key;
    }

    async getWeather(q,lang="en"){
        try{
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${this.key}&lang=${lang}`);
        const data  = res.data;
        return data;
        }catch(err){
            return err.response.data;
        }
    }
}

module.exports = OpenWeather;