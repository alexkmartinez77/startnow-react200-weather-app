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
    searchHistory: []
};

export default function SearchBarReducer(state = defaultState, action){
    const { type, payload } = action;
    //console.log('type: '+ type);
    //console.log('payload: ' + payload);
    //console.log(payload);
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

        case 'GET_WEATHER_FULFILLED': {
          return {
            ...state,
            temp: payload.data.main.temp,
            lon: payload.data.coord.lon,
            lat: payload.data.coord.lat,
            press: payload.data.main.pressure,
            hum: payload.data.main.humidity,
            low: payload.data.main.temp_min,
            high: payload.data.main.temp_max,
            wind: payload.data.wind.speed
          }   
        }
        default: {
          return state;
        }
      }
}

