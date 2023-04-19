import { useState } from "react";
import { ScrollView, View, TextInput } from "react-native";
import styles from "./CreatePostsScreen.styles";
import { useOrientation } from "../../../hooks/useOrientation";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StyledButton } from "../../../components/StyledButton/StyledButton";
import { CameraEl } from "../../../components/Camera/Camera";

const initialState = {
  title: "",
  location: "",
};

const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(null);
  const [data, setData] = useState(initialState);
  let orientation = useOrientation();

  const handleValidation = () => {
    if (!photo || !data.title) {
      return false;
    }
    return true;
  };

  const handlePublish = () => {
    console.log(data.title);

    if (!data.title.trim()) {
      return;
    }

    setPhoto(null);
    setData(initialState);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        flex: orientation === "landscape" ? 0 : 1,
      }}
    >
      <CameraEl photo={photo} setPhoto={setPhoto} />
      <TextInput
        value={data.title}
        style={styles.input}
        placeholder="Название..."
        placeholderTextColor="#BDBDBD"
        onChangeText={(e) => setData((prev) => ({ ...prev, title: e }))}
      />
      <View style={styles.inputThumb}>
        <SimpleLineIcons
          name="location-pin"
          size={24}
          color="#E8E8E8"
          style={styles.locationIcon}
        />
        <TextInput
          style={{ ...styles.input, paddingHorizontal: 36 }}
          placeholder="Местность..."
          placeholderTextColor="#BDBDBD"
        />
      </View>
      <StyledButton
        textContent="Опубликовать"
        disabled={handleValidation() ? false : true}
        onPress={handlePublish}
      />
    </ScrollView>
  );
};

export default CreatePostsScreen;
