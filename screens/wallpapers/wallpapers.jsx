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

const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6];

function Wallpapers({ navigation }) {
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
        {bgImages.map((image, index) => {
          return (
            <TouchableOpacity key={index} style={styles.imageContainer}>
              <Image source={image} style={styles.img} resizeMode="cover" />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default Wallpapers;
