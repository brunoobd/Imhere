import { Alert, FlatList, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { Button } from "../../components/button";
import { Participant } from "../../components/participant";
import type { ParticipantType } from "../../model";
import { useEffect, useState } from "react";

export const Home = () => {
  const [participants, setParticipants] = useState(Array<ParticipantType>);
  const [participantName, setParticipantName] = useState("");
  const { container, eventName, eventDate, form, input, listEmptyComponent } =
    styles;

  const addParticipant = () => {
    const nextParticipantId = !!participants.length
      ? participants[participants.length - 1].id + 1
      : 0;

    setParticipants((prevState) => [
      ...prevState,
      { id: nextParticipantId, name: participantName.trim() },
    ]);

    setParticipantName("");
  };

  const handleParticipantAdd = () => {
    if (participantName.trim() === "") {
      return Alert.alert(
        "Nome do participante",
        "O nome do participante não pode ser vazio.",
        [{ text: "Ok", onPress: () => setParticipantName("") }]
      );
    } else if (
      !!participants.filter(
        (participant) => participant.name === participantName.trim()
      ).length
    ) {
      return Alert.alert(
        "Participante existente",
        "Já existe um participante com esse nome, deseja adiconar mesmo assim?",
        [
          { text: "Sim", onPress: addParticipant },
          {
            text: "Não",
            style: "cancel",
            onPress: () => setParticipantName(""),
          },
        ]
      );
    }
    addParticipant();
  };

  const handleParticipantRemove = (item: ParticipantType) => {
    Alert.alert("Remover", `Remover o participante ${item.name}?`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== item)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const renderItem = ({ item }: { item: ParticipantType }) => {
    return (
      <Participant
        key={item.id}
        participant={item}
        onRemove={handleParticipantRemove}
      />
    );
  };

  const keyExtractor = ({ id }: ParticipantType) => `${id}`;

  return (
    <View style={container}>
      <Text style={eventName}>Nome do Evento</Text>
      <Text style={eventDate}>Quinta, 22 de fevereiro de 2024</Text>
      <View style={form}>
        <TextInput
          style={input}
          placeholder={"Nome do participante"}
          placeholderTextColor={"#6B6B6B"}
          onChangeText={setParticipantName}
          value={participantName}
        />
        <Button onPress={handleParticipantAdd} />
      </View>
      <FlatList
        data={participants}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={listEmptyComponent}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
};
