import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  AppRegistry,
  Button,
  FlatList,
} from "react-native";
import Organizer from "./components/Organizer";
import * as colors from "./colors/colors";
import { useState } from "react";

export default function App() {
  [tasksEditing, setTasksEditing] = useState(true);
  [tasks, setTasks] = useState([]);
  const addTask = () => {
    const updatedTasks = [...tasks, "New task..."];
    setTasks(updatedTasks);
  };
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
  return (
    <View style={styles.body}>
      {tasksEditing ? (
        <ScrollView>
          <Text style={styles.headingText}>Organizer App</Text>
          <Button
            title="Switch task list"
            color={colors.secondaryColor}
            onPress={() => setTasksEditing(!tasksEditing)}
          />
          <View>
            <View>
              <Organizer tasks={tasks} setTasks={setTasks} />
            </View>
            <Button
              title="Add task"
              color={colors.secondaryColor}
              onPress={addTask}
            />
          </View>
        </ScrollView>
      ) : (
        <View>
          <ScrollView>
            <Text style={styles.headingText}>Organizer App</Text>
            <Button
              title="Switch task list"
              color={colors.secondaryColor}
              onPress={() => setTasksEditing(!tasksEditing)}
            />
          </ScrollView>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={() => {
              tasks.map((_, index) => index);
            }}
            ItemSeparatorComponent={<View style={styles.horizontalLine} />}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: "beige",
  },
  headingText: {
    textAlign: "center",
    margin: 40,
    fontSize: 40,
    color: colors.primaryTextColor,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "gray",
    marginTop: 10,
    marginBottom: 10,
  },
});

AppRegistry.registerComponent("MyApp", () => App);
