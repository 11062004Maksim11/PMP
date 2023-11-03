import { Provider } from "react-redux";
import store from "./store/store";
import Router from "./Router";
import { Realm } from "@realm/react";

class Task extends Realm.Object {
  _id;
  description;
  isComplete;
  createdAt;

  static generate(description) {
    return {
      _id,
      description,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: "Task",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      description: "string",
      isComplete: { type: "bool", default: false },
      createdAt: "date",
    },
  };
}

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
