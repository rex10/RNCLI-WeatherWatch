import { useEffect, useState } from 'react';
import { getLocationData, getWeatherForecast } from '../../api';
import { LocationData, WeatherImage, WeatherResponse, WeeklyWeatherItem } from '../../types';
import { calculateWeeklyForecast, formatDate, getWeatherForCurrentTime } from '../../helpers/globalFunctions';

const useHomeScreen = () => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [weeklyForecast, setWeeklyForecast] = useState<WeeklyWeatherItem[]>([]);
  const [weatherImage, setWeatherImage] = useState<WeatherImage>();
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCurrentLocation = async () => {
    try {
      setIsLoading(true)
      const data = await getLocationData('anand');

      if (data && data.results.length > 0) {
        const location = data.results[0];
        setLocationData(location);
        updateWeatherData(location.latitude, location.longitude);
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.log('Error fetching location data: in ', error);
    }
  };

  const updateWeatherData = async (latitude: number, longitude: number) => {
    try {
      const response = await getWeatherForecast(latitude, longitude);
      setWeatherData(response);
      const weatherImage = await getWeatherForCurrentTime(response.hourly, formatDate());
      setWeatherImage(weatherImage);
      const weeklyData = await calculateWeeklyForecast(response);
      setWeeklyForecast(weeklyData);
    } catch (error) {
      console.log('Error updating weather data:', error);
    } finally {
      setIsLoading(false)
    }
  };

  const searchLocations = async (query: string) => {
    try {
      const data = await getLocationData(query);
      return data?.results || [];
    } catch (error) {
      console.log('Error searching locations:', error);
      return [];
    }
  };

  const handleLocationSelect = (location: LocationData) => {
    setLocationData(location);
    updateWeatherData(location.latitude, location.longitude);
  };

  const handleSearchIconPress = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results = await searchLocations(query);
      setLocations(results);
    } else {
      setLocations([]);
    }
  };

  const onLocationItemPress = (item: LocationData) => {
    handleLocationSelect(item);
    setShowSearchBar(false);
    setSearchQuery('');
    setLocations([]);
  }
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return {
    locationData,
    weatherData,
    weeklyForecast,
    weatherImage,
    searchLocations,
    handleLocationSelect,
    handleSearchIconPress,
    handleSearch,
    showSearchBar,
    searchQuery,
    locations,
    onLocationItemPress,
    isLoading
  };
};

export default useHomeScreen;
