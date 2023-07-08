import App from "./App";
import { registerRootComponent } from "expo";
import { StoreProvider } from "easy-peasy";
import store from "./store";

function Index() {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
}

export default registerRootComponent(Index);
