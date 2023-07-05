import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./wallpapers.styles";
import { AntDesign } from "@expo/vector-icons";
import Skeleton from "../../animations/skeleton/Skeleton";
import { useStoreState, useStoreActions } from "easy-peasy";
const bg1 = require("../../assets/images/bg1.jpg");
const bg2 = require("../../assets/images/bg2.jpg");
const bg3 = require("../../assets/images/bg3.jpg");
const bg4 = require("../../assets/images/bg4.jpg");
const bg5 = require("../../assets/images/bg5.jpg");
const bg6 = require("../../assets/images/bg6.jpg");

const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6];

function Wallpapers({ navigation }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const setSelectedPicture = useStoreActions(
    (actions) => actions.wallModel.setSelectedPicture
  );
  const selectedPicture = useStoreState(
    (state) => state.wallModel.selectedPicture
  );
  const setRefresh = useStoreActions((actions) => actions.wallModel.setRefresh);

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, [isLoaded]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.wallpaperText}>Обои</Text>

      <View style={styles.images}>
        {!isLoaded
          ? bgImages.map((_, i) => {
              return (
                <Skeleton
                  height={120}
                  width={160}
                  style={{ borderRadius: 20 }}
                  key={i}
                />
              );
            })
          : bgImages.map((image, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.imageContainer}
                  onPress={async () => {
                    try {
                      await AsyncStorage.setItem(
                        "imagePath",
                        JSON.stringify(image)
                      );
                      setSelectedPicture(image);
                      setRefresh(true);
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                >
                  <Image
                    source={image}
                    style={styles.img}
                    resizeMode="cover"
                    onLoad={() => {
                      setIsLoaded(true);
                    }}
                  />
                </TouchableOpacity>
              );
            })}
      </View>
    </View>
  );
}

export default Wallpapers;
