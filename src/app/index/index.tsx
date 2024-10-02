import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Category } from "@/components/category";
import { categories } from "@/utils/categories";
import { Categories } from "@/components/categories";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      {/* {categories.map((category) => (
        <Category key={category.id} name={category.name} icon={category.icon} />
      ))} */}

      <Categories />
    </View>
  );
}
