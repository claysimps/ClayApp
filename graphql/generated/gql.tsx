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
  getArticles: Array<ArticlePayload>;
};

export type QueryGetProjectsArgs = {
  data: Scalars["String"];
};

export type QueryGetBooksArgs = {
  data: Scalars["String"];
};

export type QueryGetArticlesArgs = {
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
  buttonOneLink: Scalars["String"];
  buttonTwoLink?: Maybe<Scalars["String"]>;
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

/** Article Payload */
export type ArticlePayload = {
  __typename?: "ArticlePayload";
  id: Scalars["ID"];
  queryType?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  publisher: Scalars["String"];
  articleUrl: Scalars["String"];
  excerpt: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  addProject: SuccessPayload;
  addBook: SuccessPayload;
  addArticle: SuccessPayload;
};

export type MutationAddProjectArgs = {
  data: PortfolioInput;
};

export type MutationAddBookArgs = {
  data: BookInput;
};

export type MutationAddArticleArgs = {
  data: ArticleInput;
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
  buttonOneLink: Scalars["String"];
  buttonTwoLink?: Maybe<Scalars["String"]>;
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

/** Article input */
export type ArticleInput = {
  queryType: Scalars["String"];
  title: Scalars["String"];
  publisher: Scalars["String"];
  articleUrl: Scalars["String"];
  excerpt: Scalars["String"];
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
  | "buttonOneLink"
  | "buttonOptionOne"
  | "buttonOptionTwo"
  | "buttonTwoLink"
  | "cardBodyText"
  | "headerBody"
  | "headerFooter"
  | "headerTitle"
  | "id"
>;

export type ArticleFieldsFragment = { __typename?: "ArticlePayload" } & Pick<
  ArticlePayload,
  "title" | "publisher" | "articleUrl" | "excerpt" | "id"
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

export type AddArticleMutationVariables = Exact<{
  ArticleInput: ArticleInput;
}>;

export type AddArticleMutation = { __typename?: "Mutation" } & {
  addArticle: { __typename?: "SuccessPayload" } & UploadSuccessFragment;
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

export type GetArticlesQueryVariables = Exact<{
  queryType: Scalars["String"];
}>;

export type GetArticlesQuery = { __typename?: "Query" } & {
  getArticles: Array<{ __typename?: "ArticlePayload" } & ArticleFieldsFragment>;
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
    buttonOneLink
    buttonOptionOne
    buttonOptionTwo
    buttonTwoLink
    cardBodyText
    headerBody
    headerFooter
    headerTitle
    id
  }
`;
export const ArticleFieldsFragmentDoc = gql`
  fragment ArticleFields on ArticlePayload {
    title
    publisher
    articleUrl
    excerpt
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
export const AddArticleDocument = gql`
  mutation AddArticle($ArticleInput: ArticleInput!) {
    addArticle(data: $ArticleInput) {
      ...UploadSuccess
    }
  }
  ${UploadSuccessFragmentDoc}
`;

export function useAddArticleMutation() {
  return Urql.useMutation<AddArticleMutation, AddArticleMutationVariables>(
    AddArticleDocument,
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
export const GetArticlesDocument = gql`
  query GetArticles($queryType: String!) {
    getArticles(data: $queryType) {
      ...ArticleFields
    }
  }
  ${ArticleFieldsFragmentDoc}
`;

export function useGetArticlesQuery(
  options: Omit<Urql.UseQueryArgs<GetArticlesQueryVariables>, "query"> = {},
) {
  return Urql.useQuery<GetArticlesQuery>({
    query: GetArticlesDocument,
    ...options,
  });
}
