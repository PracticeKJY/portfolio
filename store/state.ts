import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const toggleAtom = atomWithStorage("toggle", false)
export const notionDataAtom = atom({
  has_more: false,
  next_cursor: null,
  object: "",
  page_or_database: {},
  results: [],
  type: "",
})
export const LanguageLists = atom([
  {
    title: "Language",
    items: [
      {
        id: "lan-1",
        name: "JavaScript",
        value: 70,
        description:
          "ES6 문법 및 Document Object Model을 이해하고 있습니다.",
      },
      {
        id: "lan-2",
        name: "TypeScript",
        value: 60,
        description:
          "타입선언 및 제너릭 등 문법을 이해하고 있으며, 프로젝트에 적용한 경험이 있습니다",
      },
    ],
  },
])
export const FrontEndLists = atom([
  {
    title: "FrontEnd",
    items: [
      {
        id: "fro-1",
        name: "React",
        value: 70,
        description:
          "React의 life cycle, hook 등을 이해하고 코드를 작성합니다.",
      },
      {
        id: "fro-2",
        name: "Next.js",
        value: 70,
        description:
          "Next.js의 page와 app router를 프로젝트에 적용 및 마이그레이션한 경험이 있습니다. 또한 언어셋(next-intl) 및 REST API를 적용한 경험이 있습니다.",
      },
      {
        id: "fro-3",
        name: "Vite",
        value: 50,
        description:
          "Vite를 이용한 todoList 등 토이프로젝트를 적용한 경험이 있습니다.",
      },
      {
        id: "fro-4",
        name: "Recoil",
        value: 70,
        description:
          "프로젝트를 진행하며 props Drilling을 경험하고 Recoil을 적용함으로써 해결한 경험이 있습니다.",
      },
      {
        id: "fro-5",
        name: "Jotai",
        value: 70,
        description:
          "프로젝트에 Jotai의 atomWithStorage같은 util들을 적용한 경험이 있습니다.",
      },
      {
        id: "fro-6",
        name: "css Modules",
        value: 80,
        description:
          "css Modules를 사용하여 컴포넌트들의 CSS를 효율적으로 관리할 수 있습니다.",
      },
      {
        id: "fro-7",
        name: "Tailwind",
        value: 50,
        description:
          "Tailwind를 사용하여 효율적으로 반응형 UI를 제작한 경험이 있습니다.",
      },
      {
        id: "fro-8",
        name: "Styled-components",
        value: 80,
        description:
          "Styled-components를 사용하여 효율적으로 반응형 UI를 제작한 경험이 있습니다.",
      },
    ],
  },
])
export const BackEndLists = atom([
  {
    title: "BackEnd",
    items: [
      {
        id: "bac-1",
        name: "Node.js / express",
        value: 60,
        description:
          "express의 구조를 이해하고 백앤드(controller)를 구현한 경험을 가지고 있습니다.",
      },
      {
        id: "bac-2",
        name: "MongoDB",
        value: 70,
        description:
          "noSQL의 특징에 대해 이해하고 모델링 및 프로젝트에 적용한 경험을 가지고 있습니다.",
      },
      {
        id: "bac-3",
        name: "Firebase",
        value: 60,
        description:
          "noSQL의 특징에 대해 이해하고 모델링 및 프로젝트에 적용한 경험을 가지고 있습니다.",
      },
    ],
  },
])
export const EtcLists = atom([
  {
    title: "Etc",
    items: [
      {
        id: "etc-1",
        name: "Eslint & Prettier",
        value: 60,
        description:
          "팀 단위로 코드컨벤션을 논의하고 적용한 경험이 있습니다 ",
      },
      {
        id: "etc-2",
        name: "Webpack",
        value: 50,
        description:
          "webpack 환경의 CI & CD 파이프라인 구축 및 자바스트립트에서 타입스크립트로 마이그레이션을 적용한 경험이 있습니다. ",
      },
      {
        id: "etc-3",
        name: "Postman",
        value: 50,
        description:
          "Postman을 통한 api 테스트 및 적용을 한 경험이 있습니다 ",
      },
    ],
  },
])
