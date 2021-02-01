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

// export const booksListData: Array<BooksListDataProps> = [
//   {
//     id: "1",
//     title: "The Lean Startup",
//     creator: "Eric Ries",
//     type: "Business",
//     moreInfo:
//       "The Lean Startup method teaches you how to drive a startup-how to steer, when to turn, and when to persevere-and grow a business with maximum acceleration. It is a principled approach to new product development.",
//   },
//   {
//     id: "2",
//     title: "The Lean Startup",
//     creator: "Eric Ries",
//     type: "Business",
//     moreInfo:
//       "The Lean Startup method teaches you how to drive a startup-how to steer, when to turn, and when to persevere-and grow a business with maximum acceleration. It is a principled approach to new product development.",
//   },
//   {
//     id: "3",
//     title: "The Lean Startup",
//     creator: "Eric Ries",
//     type: "Business",
//     moreInfo:
//       "The Lean Startup method teaches you how to drive a startup-how to steer, when to turn, and when to persevere-and grow a business with maximum acceleration. It is a principled approach to new product development.",
//   },
//   {
//     id: "4",
//     title: "The Lean Startup",
//     creator: "Eric Ries",
//     type: "Business",
//     moreInfo:
//       "The Lean Startup method teaches you how to drive a startup-how to steer, when to turn, and when to persevere-and grow a business with maximum acceleration. It is a principled approach to new product development.",
//   },
//   {
//     id: "5",
//     title: "The Lean Startup",
//     creator: "Eric Ries",
//     type: "Business",
//     moreInfo:
//       "The Lean Startup method teaches you how to drive a startup-how to steer, when to turn, and when to persevere-and grow a business with maximum acceleration. It is a principled approach to new product development.",
//   },
// ];
