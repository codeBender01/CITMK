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
  },
  profileInfo: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  initials: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    width: 100,
    height: 100,
    borderRadius: 1000,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 13,
  },
  initialsText: {
    fontSize: 26,
    fontFamily: fonts.medium,
    color: colors.mainFont,
  },
  username: {
    fontSize: 20,
    fontFamily: fonts.regular,
    color: colors.mainFont,
    textAlign: "center",
    marginVertical: 5,
  },
  email: {
    fontSize: 18,
    fontFamily: fonts.regular,
    color: colors.grayFinished,
    textDecorationStyle: "solid",
    textDecorationColor: colors.grayFinished,
    textDecorationLine: "underline",
  },
  settingBars: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  settingBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: colors.grayFinished,
    borderBottomWidth: 1,
    borderRadius: 3,
  },
  settingBarNoBorder: {
    borderBottomWidth: 0,
  },
  settingIcon: {
    backgroundColor: colors.greenAccept,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  settingName: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.mainFont,
  },
  settingActionText: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.grayFinished,
  },
});

export default styles;
