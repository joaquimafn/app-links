import { Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

type CategoriesProp = PressableProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  name: string;
};

export function Category(props: CategoriesProp) {
  return (
    <Pressable style={styles.container} {...props}>
      <MaterialIcons name={props.icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
}
