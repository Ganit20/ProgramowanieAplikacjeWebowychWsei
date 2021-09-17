import {  weather } from './city';

 export class MainClass {
    weatherCounter: number = 0;
    cityArray: weather[] = [];
    buttonClicked(event:Event) {
       let sample =() => this.getCityInfo();
    }

    async getCityInfo() {
        let city = (document.body.querySelector("#cityInput") as HTMLInputElement).value;
        const weather = await this.getWeather(city);
        console.log(weather);
        this.cityArray.push(weather);
        this.saveData(weather);
        this.createWeatherDiv(weather);
    }
    async getWeather(city: string): Promise<weather> {
        const owApiKey ="abad90316dd90eb567d35ef0308c8703";
        const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${owApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();

        return weatherData;
    }
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(this.cityArray));
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
    
    createWeatherDiv(City: weather){

        let weatherDiv: HTMLDivElement = document.createElement("div");
        weatherDiv.id = "watherDiv" + this.weatherCounter;
        weatherDiv.className = "weatherDiv";

        let weatherCityName: HTMLDivElement = document.createElement("div"); //City name
        weatherCityName.className = "weatherCityName";
        weatherCityName.innerHTML = City.name;
        weatherCityName.id= "weatherCityNameID" + this.weatherCounter;

        let weatherSkyStatus: HTMLDivElement = document.createElement("div"); //Sky status
        weatherSkyStatus.className = "weatherSkyStatus";
        weatherSkyStatus.innerHTML = City.weather[0].main;

        let tempAndHumidityDiv: HTMLDivElement = document.createElement("div"); //Lower-container
        tempAndHumidityDiv.className = "tempAndHumidityDiv";

        let tempDiv: HTMLDivElement = document.createElement("div"); //Temp
        tempDiv.className = "tempDiv";
        tempDiv.innerHTML = City.main.temp_min + "°C"
        tempDiv.style.backgroundImage = `url(http://openweathermap.org/img/wn/${City.weather[0].icon}@2x.png)`;
        tempDiv.style.backgroundRepeat = "no-repeat";
        tempDiv.style.backgroundSize = "auto";

        let humidityPressureDiv: HTMLDivElement = document.createElement("div"); //Lower-Right Container
        humidityPressureDiv.className = "humidityPressureDiv";

        let pressureDiv: HTMLDivElement = document.createElement("div"); //Pressure
        pressureDiv.className = "pressureDiv";
        pressureDiv.innerHTML = "<p>Pressure: <p><br>" + City.main.pressure.toString();

        let humidityDiv: HTMLDivElement = document.createElement("div"); //Humidity
        humidityDiv.className = "humidityDiv";
        humidityDiv.innerHTML = "<p>Humidity: <p><br>" + City.main.humidity.toString() + "%";

        weatherDiv.appendChild(weatherCityName);
        weatherDiv.appendChild(weatherSkyStatus);
        weatherDiv.appendChild(tempAndHumidityDiv);
        tempAndHumidityDiv.appendChild(tempDiv);
        tempAndHumidityDiv.appendChild(humidityPressureDiv);
        humidityPressureDiv.appendChild(pressureDiv);
        humidityPressureDiv.appendChild(humidityDiv);

        this.weatherCounter++;
        (document.body.querySelector("#cityList") as HTMLElement).appendChild(weatherDiv);
    }
    
}