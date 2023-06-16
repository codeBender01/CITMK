import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./wallpapers.styles";
import { AntDesign } from "@expo/vector-icons";
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";
import bg4 from "../../assets/images/bg4.jpg";
import bg5 from "../../assets/images/bg5.jpg";
import bg6 from "../../assets/images/bg6.jpg";
import Skeleton from "../../animations/skeleton/Skeleton";

const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6];

function Wallpapers({ navigation }) {
  const [isLoaded, setIsLoaded] = useState(false);
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
          : null}

        {bgImages.map((image, index) => {
          return (
            <TouchableOpacity key={index} style={styles.imageContainer}>
              <Image
                source={image}
                style={styles.img}
                resizeMode="cover"
                onLoad={() => setIsLoaded(true)}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default Wallpapers;
