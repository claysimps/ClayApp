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
  exchanges: [devtoolsExchange, dedupExchange, debugExchange, fetchExchange],
});

export const UrqlClient: FC = ({ children }) => (
  <Provider value={client}>{children}</Provider>
);
