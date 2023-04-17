import { View, Text } from "react-native";
import styles from "./PostsScreen.styles";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userData}>
        <View style={styles.imagePlaceholder} />
        <View>
          <Text style={styles.username}>User Name</Text>
          <Text style={styles.email}>email@mail.com</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;
