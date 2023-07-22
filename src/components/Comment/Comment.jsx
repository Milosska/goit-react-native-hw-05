import { View, Text, Image } from "react-native";
import styles from "./Comment.styles";

export const Comment = ({ item }) => {
  console.log(item);

  return (
    <View style={styles.container}>
      <Text>Comment</Text>
    </View>
  );
};
