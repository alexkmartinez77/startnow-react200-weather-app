import axios from 'axios';

export function updateLocationName(location){
    return {
        type:'UPDATE_LOCATION_NAME',
        payload: { location }
    };
}

export function getWeather(location){
        return {
            type: 'GET_WEATHER',
            payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=Imperial&APPID=2bbed4ca6f3800d307fab4cade42b173')
        }
}


