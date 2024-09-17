import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootViewStyle: {
    alignItems: 'center',
    backgroundColor: Colors.skyBlue,
    borderRadius: moderateScale(10),
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
    padding: moderateScale(10),
  },
  imageViewStyle: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(35),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  timeTextStyle: {
    fontSize: moderateScale(15),
    color: Colors.white,
  },
  degreeTextStyle: {
    fontSize: moderateScale(15),
    color: Colors.white,
  },
  degreeIconViewStyle: {
    flexDirection: 'row',
  },
  degreeOuterViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(3),
    marginLeft: horizontalScale(1),
    height: moderateScale(7),
    width: moderateScale(7),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(4),
  },
  degreeInnerViewStyle: {
    height: moderateScale(5),
    width: moderateScale(5),
    backgroundColor: Colors.skyBlue,
    borderRadius: moderateScale(4),
  },
});
