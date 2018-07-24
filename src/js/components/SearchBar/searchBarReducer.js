const defaultState = {
    location: '',
    lon: '',
    lat: '',
    temp: '',
    press: '',
    hum: '',
    low: '',
    high: '',
    wind: '',
    date: '',
    time: '',
    searchHistory: []
};

export default function SearchBarReducer(state = defaultState, action){
    const { type, payload } = action;
    switch (type) {
        // Here in the case of the update description action 
        case 'UPDATE_LOCATION_NAME': {
          // we'll return an object
          return {
            // with all the previous state
            ...state,
            // but overwriting the description
            location: payload.location
          };
        }

        case 'GET_WEATHER_PENDING': {
          return {
            ...state,
            pending: true, 
          };
        }

        case 'GET_WEATHER_FULFILLED': {
          var currentDate = new Date();
          var day = currentDate.getDate();
          var month = currentDate.getMonth() + 1;
          var year = currentDate.getFullYear();
          var time = currentDate.toLocaleTimeString();

          return {
            ...state,
            location: payload.data.name,
            temp: payload.data.main.temp,
            lon: payload.data.coord.lon,
            lat: payload.data.coord.lat,
            press: payload.data.main.pressure,
            hum: payload.data.main.humidity,
            low: payload.data.main.temp_min,
            high: payload.data.main.temp_max,
            wind: payload.data.wind.speed,
            date: month + "/" + day + "/" + year,
            time: time,
            searchHistory:[...state.searchHistory, {location: payload.data.name, date: month + "/" + day + "/" + year, time: time}]
          }   
        }

        default: {
          return state;
        }
      }
}

