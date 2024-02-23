import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: "#131016",
  },
  eventName: {
    marginTop: 48,
    fontWeight: "bold",
    fontSize: 24,
    color: "#FDFCFE",
  },
  eventDate: {
    fontSize: 16,
    color: "#6B6B6B",
  },
  form: {
    width: "100%",
    marginTop: 36,
    marginBottom: 42,
    flexDirection: "row",
    gap: 12,
  },
  input: {
    height: 56,
    padding: 16,
    flex: 1,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: "#1F1E25",
    color: "#FFF",
  },
  listEmptyComponent: {
    color: "#FFF",
    textAlign: "center",
  },
});
