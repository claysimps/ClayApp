import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  getProjects: Array<PortfolioPayload>;
  getBooks: Array<BookPayload>;
};

export type QueryGetProjectsArgs = {
  data: Scalars["String"];
};

export type QueryGetBooksArgs = {
  data: Scalars["String"];
};

/** This is the portfolio payload */
export type PortfolioPayload = {
  __typename?: "PortfolioPayload";
  id: Scalars["ID"];
  queryType?: Maybe<Scalars["String"]>;
  projectName?: Maybe<Scalars["String"]>;
  headerTitle: Scalars["String"];
  headerBody: Scalars["String"];
  headerFooter: Scalars["String"];
  cardBodyText: Scalars["String"];
  buttonOptionOne: Scalars["String"];
  buttonOptionTwo?: Maybe<Scalars["String"]>;
};

/** This is the Book payload */
export type BookPayload = {
  __typename?: "BookPayload";
  id: Scalars["ID"];
  queryType?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  author: Scalars["String"];
  classification: Scalars["String"];
  bookUrl: Scalars["String"];
  synopsis: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  addProject: SuccessPayload;
  addBook: SuccessPayload;
};

export type MutationAddProjectArgs = {
  data: PortfolioInput;
};

export type MutationAddBookArgs = {
  data: BookInput;
};

/** confirms upload */
export type SuccessPayload = {
  __typename?: "SuccessPayload";
  successMessage: Scalars["String"];
};

/** Portfolio input */
export type PortfolioInput = {
  queryType: Scalars["String"];
  projectName: Scalars["String"];
  headerTitle: Scalars["String"];
  headerBody: Scalars["String"];
  headerFooter: Scalars["String"];
  cardBodyText: Scalars["String"];
  buttonOptionOne: Scalars["String"];
  buttonOptionTwo?: Maybe<Scalars["String"]>;
};

/** Portfolio input */
export type BookInput = {
  queryType: Scalars["String"];
  title: Scalars["String"];
  author: Scalars["String"];
  classification?: Maybe<Scalars["String"]>;
  bookUrl?: Maybe<Scalars["String"]>;
  synopsis?: Maybe<Scalars["String"]>;
};

export type UploadSuccessFragment = { __typename?: "SuccessPayload" } & Pick<
  SuccessPayload,
  "successMessage"
>;

export type BookFieldsFragment = { __typename?: "BookPayload" } & Pick<
  BookPayload,
  "author" | "bookUrl" | "classification" | "id" | "synopsis" | "title"
>;

export type ProjectFieldsFragment = { __typename?: "PortfolioPayload" } & Pick<
  PortfolioPayload,
  | "buttonOptionOne"
  | "buttonOptionTwo"
  | "cardBodyText"
  | "headerBody"
  | "headerFooter"
  | "headerTitle"
  | "id"
>;

export type AddBookMutationVariables = Exact<{
  BookInput: BookInput;
}>;

export type AddBookMutation = { __typename?: "Mutation" } & {
  addBook: { __typename?: "SuccessPayload" } & UploadSuccessFragment;
};

export type AddProjectMutationVariables = Exact<{
  PortfolioInput: PortfolioInput;
}>;

export type AddProjectMutation = { __typename?: "Mutation" } & {
  addProject: { __typename?: "SuccessPayload" } & UploadSuccessFragment;
};

export type GetBooksQueryVariables = Exact<{
  queryType: Scalars["String"];
}>;

export type GetBooksQuery = { __typename?: "Query" } & {
  getBooks: Array<{ __typename?: "BookPayload" } & BookFieldsFragment>;
};

export type GetProjectsQueryVariables = Exact<{
  queryType: Scalars["String"];
}>;

export type GetProjectsQuery = { __typename?: "Query" } & {
  getProjects: Array<
    { __typename?: "PortfolioPayload" } & ProjectFieldsFragment
  >;
};

export const UploadSuccessFragmentDoc = gql`
  fragment UploadSuccess on SuccessPayload {
    successMessage
  }
`;
export const BookFieldsFragmentDoc = gql`
  fragment BookFields on BookPayload {
    author
    bookUrl
    classification
    id
    synopsis
    title
  }
`;
export const ProjectFieldsFragmentDoc = gql`
  fragment ProjectFields on PortfolioPayload {
    buttonOptionOne
    buttonOptionTwo
    cardBodyText
    headerBody
    headerFooter
    headerTitle
    id
  }
`;
export const AddBookDocument = gql`
  mutation AddBook($BookInput: BookInput!) {
    addBook(data: $BookInput) {
      ...UploadSuccess
    }
  }
  ${UploadSuccessFragmentDoc}
`;

export function useAddBookMutation() {
  return Urql.useMutation<AddBookMutation, AddBookMutationVariables>(
    AddBookDocument,
  );
}
export const AddProjectDocument = gql`
  mutation AddProject($PortfolioInput: PortfolioInput!) {
    addProject(data: $PortfolioInput) {
      ...UploadSuccess
    }
  }
  ${UploadSuccessFragmentDoc}
`;

export function useAddProjectMutation() {
  return Urql.useMutation<AddProjectMutation, AddProjectMutationVariables>(
    AddProjectDocument,
  );
}
export const GetBooksDocument = gql`
  query GetBooks($queryType: String!) {
    getBooks(data: $queryType) {
      ...BookFields
    }
  }
  ${BookFieldsFragmentDoc}
`;

export function useGetBooksQuery(
  options: Omit<Urql.UseQueryArgs<GetBooksQueryVariables>, "query"> = {},
) {
  return Urql.useQuery<GetBooksQuery>({ query: GetBooksDocument, ...options });
}
export const GetProjectsDocument = gql`
  query GetProjects($queryType: String!) {
    getProjects(data: $queryType) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`;

export function useGetProjectsQuery(
  options: Omit<Urql.UseQueryArgs<GetProjectsQueryVariables>, "query"> = {},
) {
  return Urql.useQuery<GetProjectsQuery>({
    query: GetProjectsDocument,
    ...options,
  });
}
