import { Exchange, Operation } from "urql";
import { pipe, mergeMap, fromPromise, fromValue, map } from "wonka";

const isPromise = (value: any) => value && typeof value.then === "function";

export const fetchOptionsExchange = (fn: any): Exchange => ({ forward }) => (
  ops$,
) => {
  return pipe(
    ops$,
    mergeMap((operation: Operation) => {
      const result = fn(operation.context.fetchOptions);
      return pipe(
        isPromise(result) ? fromPromise(result) : (fromValue(result) as any),
        map((fetchOptions: RequestInit | (() => RequestInit)) => ({
          ...operation,
          context: { ...operation.context, fetchOptions },
        })),
      );
    }),
    forward,
  );
};
