import "./App.css";
import Index from "./pages/Index";
import configureStore from "./store/configureStore.ts";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
