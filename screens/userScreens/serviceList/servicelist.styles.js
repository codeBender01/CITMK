import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: colors.navbarBg,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 700,
  },
  service: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  serviceName: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 600,
  },
  serviceDesc: {
    color: colors.white,
    fontSize: 16,
    marginTop: 3,
  },
  serviceBtn: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },

  serviceBtnText: {
    color: colors.navbarBg,
    fontSize: 18,
  },
});

export default styles;
