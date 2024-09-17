import React from 'react';
import {render} from '@testing-library/react-native';
import {FutureWeatherDataItem} from '../custom-future-weather-data';

describe('FutureWeatherDataItem', () => {
  const mockItem = {
    date: '16 Sept',
    weatherImage: {
      description: 'Mainly Clear',
      image: 'https://openweathermap.org/img/wn/01d@2x.png',
    },
    averageTemperature: 25,
  };

  it('renders the date correctly', () => {
    const {getByText} = render(<FutureWeatherDataItem item={mockItem} />);
    expect(getByText('16 Sept')).toBeTruthy();
  });

  it('renders the weather image correctly', () => {
    const {getByTestId} = render(<FutureWeatherDataItem item={mockItem} />);
    const image = getByTestId('weather-image');
    expect(image.props.source.uri).toBe(
      'https://openweathermap.org/img/wn/01d@2x.png',
    );
  });

  it('renders the average temperature correctly', () => {
    const {getByText} = render(<FutureWeatherDataItem item={mockItem} />);
    expect(getByText('25')).toBeTruthy();
  });
});
