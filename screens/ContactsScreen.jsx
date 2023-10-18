import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ContactsScreen() {
  const contacts = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "+9876543210",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      phone: "+1122334455",
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Wilson",
      email: "bob.wilson@example.com",
      phone: "+9988776655",
    },
    {
      id: 5,
      firstName: "Eva",
      lastName: "Brown",
      email: "eva.brown@example.com",
      phone: "+5544332211",
    },
  ];

  return (
    <View style={styles.container}>
      {contacts.map((contact) => (
        <View style={styles.card} key={contact.id}>
          <Text
            style={styles.name}
          >{`${contact.firstName} ${contact.lastName}`}</Text>
          <Text style={styles.email}>{contact.email}</Text>
          <Text style={styles.phone}>{contact.phone}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "white",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "blue",
  },
  phone: {
    fontSize: 16,
    color: "green",
  },
});

export default ContactsScreen;
