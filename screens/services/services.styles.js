import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
    position: "relative",
    backgroundColor: colors.white,
  },
  editServicesText: {
    color: colors.mainFont,
    fontFamily: fonts.bold,
    fontSize: 32,
    textAlign: "center",
    marginVertical: 5,
  },
  addService: {
    marginTop: 10,
    backgroundColor: colors.navbarBg,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    marginLeft: "auto",
  },
  addServiceText: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: 14,
  },
});

export default styles;
