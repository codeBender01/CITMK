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
  wallpaperText: {
    color: colors.mainFont,
    fontFamily: fonts.bold,
    fontSize: 32,
    textAlign: "center",
    marginVertical: 5,
  },
  images: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "45%",
    height: 120,
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default styles;
