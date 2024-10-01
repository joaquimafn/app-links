import { Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

type CategoriesProp = PressableProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  name: string;
  isSelected: boolean;
};

export function Category(props: CategoriesProp) {
  const color = props.isSelected ? colors.green[300] : colors.gray[400];

  return (
    <Pressable style={styles.container} {...props}>
      <MaterialIcons name={props.icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{props.name}</Text>
    </Pressable>
  );
}
