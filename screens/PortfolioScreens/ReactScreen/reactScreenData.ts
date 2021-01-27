import { PortfolioCardProps } from "../../../containers";

export interface ReactScreenDataProps extends PortfolioCardProps {
  id: string;
}

export const screenInfo =
  "Here, you will find a list of React projects that I’ve worked on, along with more information and and further options. ";

export const reactScreenData: Array<ReactScreenDataProps> = [
  {
    id: "devcherWebsite",
    headerTitle: "devcher.com",
    headerBody: "TypeScript",
    headerFooter: "Next js",
    cardBodyText:
      "A website for a startup that I’m co-founding. App Beta launch scheduled for February 2021.",
  },
  {
    id: "filldWebsite",
    headerTitle: "filld.com",
    headerBody: "TypeScript",
    headerFooter: "Next js",
    cardBodyText: "A website for a startup that I’m co-founding. ",
  },
];
