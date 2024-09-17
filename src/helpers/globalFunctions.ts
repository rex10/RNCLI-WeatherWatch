import { HourlyWeather, WeatherImage } from "../types";
import getWeatherImage, { WeatherCode } from "./getWeatherImage";

interface WeatherData {
    hourly: {
        temperature_2m: number[];
        time: string[];
    };
}

interface DailyWeather {
    date: string;
    averageTemperature: number;
    weatherImage: WeatherImage;
}

export const calculateWeeklyForecast = (weatherData: WeatherData): DailyWeather[] => {
    const { hourly } = weatherData;
    const { temperature_2m, time } = hourly;

    const dailyForecast: Map<string, number[]> = new Map();

    for (let i = 0; i < time.length; i++) {
        const date = time[i].split('T')[0];
        if (!dailyForecast.has(date)) {
            dailyForecast.set(date, []);
        }
        dailyForecast.get(date)?.push(temperature_2m[i]);
    }

    const weeklyForecast: DailyWeather[] = [];
    dailyForecast.forEach((temperatures, dateString) => {
        const date = shortDateFormat(dateString);
        const averageTemperature = calculateAverageTemperature(temperatures);
        const weatherImage = getWeatherForCurrentTime(hourly, formatDate(dateString))
        weeklyForecast.push({ date, averageTemperature, weatherImage });
    });

    return weeklyForecast;
}

const calculateAverageTemperature = (temperatures: number[]): number => {
    const sum = temperatures.reduce((acc, temp) => acc + temp, 0);
    return Math.ceil(sum / temperatures.length);
}

export const formatDate = (currentDate?: string) => {
    let date;
    if (currentDate) {
        date = new Date(currentDate);
        if (isNaN(date.getTime())) {
            return 'Invalid Date';
        }
    } else {
        date = new Date();
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);

    return `${day}/${month}/${year}`;
};

export const getWeatherForCurrentTime = (hourly: HourlyWeather, date: string): { image: string, description: string } => {
    const { time: hourlyTimes, weather_code: weatherCodes } = hourly;
    const [day, month, year] = date.split('/').map(Number);
    const fullYear = 2000 + year;
    const dateObject = new Date(fullYear, month - 1, day);

    const hours = dateObject.getHours();
    const dateISOString = dateObject.toISOString();
    const currentTimeISO = dateISOString.slice(0, 13) + ':00';

    const isDayTime = (hours >= 6 && hours < 18);

    const currentIndex = hourlyTimes.findIndex(time => time.startsWith(currentTimeISO));

    if (currentIndex === -1) {
        // If the time is not found, return default image and description
        return { image: 'https://openweathermap.org/img/wn/02d@2x.png', description: 'Partly Cloudy' };
    }


    const currentWeatherCode = weatherCodes?.[currentIndex];

    return getWeatherImage(currentWeatherCode as WeatherCode, isDayTime);
};


export const shortDateFormat = (dateString: string) => {
    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short'
    });

    return formatter.format(date).replace(',', '');
};
