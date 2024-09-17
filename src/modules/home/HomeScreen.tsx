import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './HomeScreenStyle';
import useHomeScreen from './useHomeScreen';
import {formatDate} from '../../helpers/globalFunctions';
import {CustomLoader, ListView} from '../../components';
import {Images} from '../../assets';
import { Colors } from '../../theme';

const HomeScreen = (): React.JSX.Element => {
  const {
    locationData,
    weatherData,
    weeklyForecast,
    weatherImage,
    handleSearchIconPress,
    showSearchBar,
    searchQuery,
    handleSearch,
    locations,
    onLocationItemPress,
    isLoading,
  } = useHomeScreen();
  return (
    <SafeAreaView style={styles.rootContainerStyle} testID="homescreen">
      <CustomLoader isVisible={isLoading} />
      {!isLoading && (
        <View style={styles.subContainerStyle}>
          <View style={styles.topDateContainer}>
            <View>
              <Text style={styles.locationName}>{locationData?.name}</Text>
              <Text style={styles.currentDate}>
                {formatDate(weatherData?.current?.time)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleSearchIconPress}
              activeOpacity={0.8}
              style={styles.searchIconContainerStyle}>
              <Image source={Images.search} style={styles.searchIconStyle} />
            </TouchableOpacity>
          </View>
          {showSearchBar && (
            <View style={styles.searchBarContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search location"
                value={searchQuery}
                onChangeText={handleSearch}
                placeholderTextColor={Colors.white}
              />

              <FlatList
                data={locations}
                keyExtractor={item => item.id.toString()}
                style={styles.locationListStyle}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.locationOption}
                    onPress={() => onLocationItemPress(item)}>
                    <Text style={styles.locationOptionText}>
                      {item?.name}, {item?.country}
                    </Text>
                  </TouchableOpacity>
                )}
                ListEmptyComponent={
                  <View style={styles.listEmptyContainer}>
                    {searchQuery?.length > 2 && (
                      <Text style={styles.listEmptyTextStyle}>
                        No Data Found
                      </Text>
                    )}
                  </View>
                }
              />
            </View>
          )}
          <View style={styles.temperatureContainer}>
            <View>
              <View style={styles.degreeIconViewStyle}>
                <Text style={styles.currentTemp}>
                  {weatherData?.current.temperature_2m?.toFixed()}
                </Text>
                <View style={styles.degreeOuterViewStyle}>
                  <View style={styles.degreeInnerViewStyle} />
                </View>
              </View>
              <Text style={styles.currentWeatherDescStyle}>
                {weatherImage?.description}
              </Text>
            </View>
            {weatherImage?.image && (
              <View style={styles.weatherImageContainer}>
                <Image
                  source={{uri: weatherImage?.image}}
                  style={styles.weatherImageStyle}
                />
              </View>
            )}
          </View>
          <ListView title={`Weekly Weather`} data={weeklyForecast} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
