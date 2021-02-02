import { InterestsProps } from "../../../containers";

export interface BooksListDataProps extends InterestsProps {
  id: string;
}

export const getBooksList = `
query {
  getAllBooks(data: "book") {
    id
    title
    author
    classification
    bookUrl
    synopsis
  }
}
`;

export const screenInfo =
  "Here, you will find a list of React Native projects that I’ve built or worked on, along with more information and and further options. ";
