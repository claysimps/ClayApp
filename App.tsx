import React from "react";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";

import { Navigation } from "navigation";
import { useColorScheme } from "hooks";
import { store } from "state";
import { ThemeManager } from "components";

enableScreens();

export const App = () => {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <ThemeManager>
        <Navigation colorScheme={colorScheme} />
      </ThemeManager>
    </Provider>
  );
};
