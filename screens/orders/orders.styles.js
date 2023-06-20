import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/theme";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
  },
  orderTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    backgroundColor: "#ebebef",
    marginBottom: 5,
    borderRadius: 10,
  },
  tab: {
    width: "33%",
    height: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: colors.white,
  },
  indicator: {
    marginTop: 25,
  },
});

export default styles;
