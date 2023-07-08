import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/theme";

const styles = StyleSheet.create({
  noDataContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  noDataText: {
    fontSize: 32,
    color: colors.white,
    fontFamily: fonts.bold,
  },
});

export default styles;
