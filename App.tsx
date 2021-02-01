import React from "react";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";

import { Navigation } from "navigation";
import { store } from "state";
import { ThemeManager } from "components";
import { UrqlClient } from "./gqlClient";

enableScreens();

export const App = () => {
  return (
    <UrqlClient>
      <Provider store={store}>
        <ThemeManager>
          <Navigation />
        </ThemeManager>
      </Provider>
    </UrqlClient>
  );
};
