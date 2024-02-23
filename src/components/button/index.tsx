import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type Props = {
  removeStyle?: boolean;
  onPress: () => void;
};

export const Button = ({ removeStyle, onPress }: Props) => {
  const { button, buttonText, add, remove } = styles;
  const styleButton = removeStyle ? remove : add;

  return (
    <TouchableOpacity style={{ ...button, ...styleButton }} onPress={onPress}>
      <Text style={buttonText}>{removeStyle ? "-" : "+"}</Text>
    </TouchableOpacity>
  );
};
