import { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Modal } from "react-native";
import * as colors from "../colors/colors";

export default function Organizer(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [taskToEditIndex, setTaskToEditIndex] = useState(null);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setInputValue(null);
  };
  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
    console.log(inputValue);
  };
  const handleShowAlert = (idx) => {
    setTaskToEditIndex(idx);
    toggleModal();
  };

  const handleSave = (idx) => {
    const updatedTasks = props.tasks;
    console.log(updatedTasks);
    updatedTasks[idx] = inputValue;
    console.log(idx);
    props.setTasks(updatedTasks);
    toggleModal();
  };
  const deleteItem = (taskIndex) => {
    const updatedTasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1),
    ];
    props.setTasks(updatedTasks);
  };
  return (
    <View style={styles.body}>
      {props.tasks.map((val, idx) => {
        return (
          <View style={styles.item} key={idx}>
            <Text style={styles.text}>{val}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Edit"
                color={"darkgreen"}
                onPress={() => handleShowAlert(idx)}
              />
              <Button
                title="Delete"
                color={"darkred"}
                onPress={() => deleteItem(idx)}
              />
            </View>
          </View>
        );
      })}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modal}>
          <Text style={styles.modalText}>Change task:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            onChangeText={handleInputChange}
          />
          <View style={styles.modalButtons}>
            <Button title="Cancel" onPress={toggleModal} />
            <Button title="Save" onPress={() => handleSave(taskToEditIndex)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  item: {
    backgroundColor: "white",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modal: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    elevation: 5, // Android shadow
  },
  modalText: {
    fontSize: 18,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
