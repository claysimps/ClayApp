import React from "react";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";

import { Navigation } from "navigation";
import { store } from "state";
import { ThemeManager } from "components";

enableScreens();

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeManager>
        <Navigation />
      </ThemeManager>
    </Provider>
  );
};
