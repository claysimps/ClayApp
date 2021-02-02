import React from "react";
import { ScreenLayout, Divider } from "components";
import Webview from "react-native-webview";

const infoText = ` Thanks for checking out ClayApp, THE app for all things Clayton! Have
a look around, I’m sure you’ll agree, that Clayton is an amazing dude;
with energy and drive by the bucket load! 😉`;
export const HomeScreen = () => {
  return (
    <ScreenLayout>
      <ScreenLayout.Header title="Home" />
      <ScreenLayout.Info infoText={infoText} />
      <ScreenLayout.Body>
        <Divider />
        <Webview
          source={{
            uri:
              "https://www.amazon.co.uk/Lean-Startup-Innovation-Successful-Businesses/dp/0670921602/?_encoding=UTF8&pd_rd_w=HQf8W&pf_rd_p=dc48a86e-e8e6-463b-b5a6-be2ccfb37ec3&pf_rd_r=HXVJ9HZFDP27HJ7069YG&pd_rd_r=0f18fcbe-c90e-4824-a988-2468c93fac00&pd_rd_wg=Oz7jZ&ref_=pd_gw_ci_mcx_mr_hp_d",
          }}
        />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
