import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {WeeklyWeatherItem} from '../../types';
import {FutureWeatherDataItem} from '../custom-future-weather-data';
import {styles} from './ListViewStyle';

const ListView = ({
  title,
  data,
}: {
  title: string;
  data: WeeklyWeatherItem[];
}) => {
  return (
    <>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <View>
        <FlatList
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <FutureWeatherDataItem item={item} />}
        />
      </View>
    </>
  );
};

export default ListView;
