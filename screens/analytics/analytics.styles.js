import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    height: Dimensions.get("window").height,
    marginTop: 30,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
    position: "relative",
  },
  datePickButton: {
    backgroundColor: colors.navbarBg,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    textAlign: "center",
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
  },
  datePickText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 700,
  },
  analyticsBox: {
    width: "100%",
    backgroundColor: colors.navbarBg,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  anTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    textAlign: "center",
  },
  anBoxText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 700,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    paddingHorizontal: 3,
    paddingVertical: 5,
    width: "100%",
    justifyContent: "space-between",
  },
  tableRowTitleText: {
    fontSize: 18,
    fontWeight: 500,
    color: colors.white,
  },

  tableRowDataText: {
    fontSize: 18,
    fontWeight: 500,
    color: colors.white,
  },
});

export default styles;
