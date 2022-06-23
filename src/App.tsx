import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Provider, connect } from "react-redux";
import { store } from "./store";
import Index from "./components";
import OfflineIcon from "./OfflineIcon";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <ColorModeSwitcher />
      <ConnectedComponent />
      <OfflineIcon />
    </Provider>
  </ChakraProvider>
);
const ConnectedComponent = connect()(() => <Index />);
