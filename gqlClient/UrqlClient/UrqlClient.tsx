import React, { FC } from "react";
import { Provider } from "urql";
import {
  createClient,
  dedupExchange,
  fetchExchange,
  debugExchange,
  Client,
} from "@urql/core";
import { devtoolsExchange } from "@urql/devtools";

const client: Client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    debugExchange,
    // Must be called before fetchExchange and after all others sync exchanges, respecting the rule Synchronous first, Asynchronous last
    /*    fetchOptionsExchange(async (fetchOptions: any) => {
      const token = tokenKey;
      return Promise.resolve({
        ...fetchOptions,
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
    }),*/
    fetchExchange,
  ],
});

export const UrqlClient: FC = ({ children }) => (
  <Provider value={client}>{children}</Provider>
);
