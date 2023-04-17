import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  camera: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    border: "1px solid #E8E8E8",
    borderRadius: 8,
  },
  cameraBnt: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 30,
  },
  cameraText: {
    marginTop: 8,
    marginBottom: 32,
    alignSelf: "flex-start",
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
  input: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 8,
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  inputThumb: {
    position: "relative",
    width: "100%",
    marginTop: 16,
    marginBottom: 32,
  },
  locationIcon: {
    position: "absolute",
    top: 16,
    left: 8,
  },
});
