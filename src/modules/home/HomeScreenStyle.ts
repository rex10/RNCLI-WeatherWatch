import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.blue500,
  },
  subContainerStyle: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  topDateContainer: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  searchIconContainerStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    margin: moderateScale(10)
  },
  searchIconStyle: {
    height: '100%',
    width: '100%'
  },
  locationName: {
    fontSize: moderateScale(35),
    color: Colors.white,
    fontWeight: '400'
  },
  currentDate: {
    fontSize: moderateScale(20),
    color: Colors.white,
  },
  currentTemp: {
    fontSize: moderateScale(60),
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '300'
  },
  temperatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(30)
  },
  degreeIconViewStyle: {
    flexDirection: 'row',
  },
  degreeOuterViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
    height: moderateScale(20),
    width: moderateScale(20),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    marginLeft: verticalScale(5)
  },
  degreeInnerViewStyle: {
    height: moderateScale(14),
    width: moderateScale(14),
    backgroundColor: Colors.blue500,
    borderRadius: moderateScale(10),
  },
  weatherImageContainer: {
    height: moderateScale(100),
    width: moderateScale(100),
  },
  weatherImageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  currentWeatherDescStyle: {
    fontSize: moderateScale(22),
    color: Colors.white,
    fontWeight: '500'
  },
  searchBarContainer: {
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
  },
  searchInput: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    fontSize: moderateScale(16),
    color: Colors.white
  },
  
  locationOption: {
    paddingVertical: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  locationOptionText: {
    fontSize: moderateScale(16),
    color: Colors.white,
  },
  locationListStyle: {
    maxHeight: verticalScale(200)
  },
  listEmptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10)
  },
  listEmptyTextStyle: {
    fontSize: moderateScale(18),
    color: Colors.white
  }
});
