import React from 'react';
import {Image, Text, View} from 'react-native';
import {WeeklyWeatherItem} from '../../types';
import {styles} from './FutureWeatherDataItemStyle';

const FutureWeatherDataItem = ({
  item,
}: {
  item: WeeklyWeatherItem;
}): React.JSX.Element => {
  return (
    <View style={styles.rootViewStyle}>
      <Text style={styles.timeTextStyle}>{item?.date}</Text>
      <View style={styles.imageViewStyle}>
        <Image
          testID="weather-image"
          style={styles.imageStyle}
          source={{
            uri: item?.weatherImage?.image,
          }}
        />
      </View>
      <View style={styles.degreeIconViewStyle}>
        <Text style={styles.degreeTextStyle}>{item?.averageTemperature}</Text>
        <View style={styles.degreeOuterViewStyle}>
          <View style={styles.degreeInnerViewStyle} />
        </View>
      </View>
    </View>
  );
};

export default FutureWeatherDataItem;
