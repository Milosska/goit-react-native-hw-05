import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./CreatePostsScreen.styles";
import { useOrientation } from "../../../hooks/useOrientation";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StyledButton } from "../../../components/StyledButton/StyledButton";

const CreatePostsScreen = () => {
  let orientation = useOrientation();

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        flex: orientation === "landscape" ? 0 : 1,
      }}
    >
      <View style={styles.camera}>
        <TouchableOpacity style={styles.cameraBnt}>
          <FontAwesome name="camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <Text style={styles.cameraText}>Загрузите фото</Text>
      <TextInput
        style={styles.input}
        placeholder="Название..."
        placeholderTextColor="#BDBDBD"
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
      <StyledButton textContent="Опубликовать" />
    </ScrollView>
  );
};

export default CreatePostsScreen;
