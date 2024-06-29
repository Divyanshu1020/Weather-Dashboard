import { DateTime } from "luxon";

const dateFormater = (
    secs,
    offset ,
    format = "cccc, dd LLL yyyy' | Local time: 'HH:mm a", 
) => {
    return DateTime.fromSeconds(secs + offset, {zone: "utc",}).toFormat(format)
}

const iconUrl  = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png` 
export const formettedWeatherResponseData = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        timezone
    } = data;

    const { description, icon} = weather[0];
    const localTime = dateFormater(dt, timezone);

    return {
        dt,
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        country,
        sunrise : dateFormater(sunrise, timezone, "hh:mm a"),
        sunset : dateFormater(sunset, timezone, "hh:mm a"),
        description,
        icon : iconUrl(icon), 
        localTime,
        speed,
        timezone
    }
}
export const formettedForcastWeatherResponseData = (secs, offset, data) => {
    const hourly = data
    .filter(item => item.dt > secs)
    .slice(0, 5)
    .map(item => ({
        icon : iconUrl(item.weather[0].icon),
        temp: item.main.temp,
        title: dateFormater(item.dt, offset, "hh:mm a"),
        date: item.dt_txt,
    }))

    const daily = data
    .filter(item => item.dt_txt.slice(-8) === "00:00:00")
    .slice(0, 5)
    .map(item => ({
        icon : iconUrl(item.weather[0].icon),
        temp: item.main.temp,
        title: dateFormater(item.dt, offset, "ccc"),
        date: item.dt_txt,
    }))
        
    return {
        hourly,
        daily
    }
}

