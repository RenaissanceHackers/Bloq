import { atom } from "jotai";

const userList = [{ name: "" }];

const postList = [
  {
    name: "",
    title: "",
    like: 0,
    comment: 0,
    type: "",
    content: "",
  },
];

const title = "";

export const userAtom = atom(userList);
export const postAtom = atom(postList);
export const titleAtom = atom(title);

const example = {
  path: "/hardcode/zeus.svg",
  title: "Zeus Network",
  token: false,
  description: "How Zeus Network Integrates Solana with Bitcoin?",
  tokenAmount: "1234",
  pointAmount: "200",
  tokenName: "W",
  contribution: "1000",
  participants: "45",
  accepted: false,
  taskTwitter: "",
  claim: false,
  progress: false,
  descriptionDetail: `Write a research articleon " What are TokenExtensions?"`,
};

const exploreList = [
  {
    path: "/test.jpg",
    title: "Solana",
    token: false,
    description: "Write a research article on 'What are Token Extensions?'",
    tokenAmount: "1234",
    pointAmount: "200",
    tokenName: "SOL",
    contribution: "1000",
    participants: "50",
    accepted: false,
    claim: true,
    progress: false,
    taskTwitter: "",
    descriptionDetail: `Write a research articleon " What are TokenExtensions?"`,
  },
  {
    path: "/hardcode/wormhole.webp",
    title: "Wormhole",
    token: false,
    description: "Everything You Need to Know About Wormhole Token $W Airdrops",
    tokenAmount: "1234",
    pointAmount: "200",
    tokenName: "W",
    contribution: "1000",
    participants: "45",
    accepted: false,
    taskTwitter: "",
    claim: false,
    progress: false,
    descriptionDetail: `Everything You Need toKnow About WormholeToken $W Airdrops`,
  },
  {
    path: "/hardcode/ore.png",
    title: "Ore",
    token: false,
    description: "What is ORE Mining and how does it affect Solana?",
    tokenAmount: "1234",
    pointAmount: "200",
    tokenName: "W",
    contribution: "1000",
    participants: "45",
    accepted: false,
    taskTwitter: "",
    claim: false,
    progress: false,
    descriptionDetail: `Write a research articleon " What are TokenExtensions?"`,
  },
  {
    path: "/hardcode/zeus.svg",
    title: "Zeus Network",
    token: false,
    description: "How Zeus Network Integrates Solana with Bitcoin?",
    tokenAmount: "1234",
    pointAmount: "200",
    tokenName: "W",
    contribution: "1000",
    participants: "45",
    accepted: false,
    taskTwitter: "",
    claim: false,
    progress: false,
    descriptionDetail: `Write a research articleon " What are TokenExtensions?"`,
  },
];

export const exploreTaskAtom = atom(exploreList);
export const draftTaskAtom = atom<typeof exploreList>([]);

export type TaskProps = typeof example;
