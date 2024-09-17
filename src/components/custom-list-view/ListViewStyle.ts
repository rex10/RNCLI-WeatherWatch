import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';


export const styles = StyleSheet.create({
  titleTextStyle: {
    fontSize: moderateScale(20),
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(10),
    fontWeight: '500',
    color: Colors.white,
  },
});
