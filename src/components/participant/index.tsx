import { Text, View } from "react-native";
import { styles } from "./style";
import { Button } from "../button";
import { ParticipantType } from "../../model";

type Props = {
  participant: ParticipantType;
  onRemove: (participant: ParticipantType) => void;
};

export const Participant = ({ participant, onRemove }: Props) => {
  const { container, text } = styles;

  const _onRemove = () => {
    onRemove(participant);
  };

  return (
    <View style={container}>
      <Text style={text}>{participant.name}</Text>
      <Button removeStyle onPress={_onRemove} />
    </View>
  );
};
