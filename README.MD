## Installation

Use npm to install api-weather.

```bash
npm i api-weather
```

## Usage
# Async/Await
```javascript
const {getWeather} = require("api-weather");
async function gW(){
    const data = await getWeather("Mexico",key,lang);
    console.log(data);
}

gW();

```
# Promise
```javascript
const {getWeather} = require("api-weather");

getWeather("Mexico",key,lang).then(data=>{
    console.log(data);
});
```
This is a simple way to use. The param Key it should be the api key from https://openweathermap.org/ .
And the param lang is the language of the output, by default is english.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.