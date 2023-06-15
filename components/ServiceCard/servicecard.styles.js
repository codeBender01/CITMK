import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.navbarBg,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  text: {
    width: "50%",
  },
  serviceName: {
    fontFamily: fonts.medium,
    fontSize: 24,
    color: colors.white,
  },
  serviceDesc: {
    fontFamily: fonts.regular,
    fontSize: 18,
    color: colors.white,
    lineHeight: 24,
  },
  actionBtns: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
});

export default styles;
