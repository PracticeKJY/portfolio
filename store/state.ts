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
        value: 70,
        description:
          "Vite와 react-router-dom을 사용하여 프로젝트를 진행한 경험이 있습니다.",
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
        name: "Zustand",
        value: 60,
        description:
          "프로젝트에 Zustand를 적용한 경험이 있습니다.",
      },
      {
        id: "fro-7",
        name: "css Modules",
        value: 80,
        description:
          "css Modules를 사용하여 컴포넌트들의 CSS를 효율적으로 관리할 수 있습니다.",
      },
      {
        id: "fro-8",
        name: "Tailwind",
        value: 50,
        description:
          "Tailwind를 사용하여 효율적으로 반응형 UI를 제작한 경험이 있습니다.",
      },
      {
        id: "fro-9",
        name: "Styled-components",
        value: 80,
        description:
          "Styled-components를 사용하여 효율적으로 반응형 UI를 제작한 경험이 있습니다.",
      },
      {
        id: "fro-10",
        name: "UI Libraries",
        value: 80,
        description:
          "MUI, Ant Design 등 다양한 UI 라이브러리를 활용하여 재사용 가능한 공통 컴포넌트를 개발하고, 디자인 시스템을 구축한 경험이 있습니다.",
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
        name: "java",
        value: 30,
        description:
          "Java의 기본 문법과 객체지향 프로그래밍(OOP)의 핵심 개념을 학습하고 있으며, Spring Boot 기반의 백엔드 개발 역량을 확장하고 있습니다.",
      },

      {
        id: "bac-4",
        name: "Firebase",
        value: 60,
        description:
          "noSQL의 특징에 대해 이해하고 모델링 및 프로젝트에 적용한 경험을 가지고 있습니다.",
      },
    ],
  },
])
export const AIToolsLists = atom([
  {
    title: "AI",
    items: [
      {
        id: "ai-1",
        name: "Codex",
        value: 40,
        description:
          "AI 코딩 에이전트를 활용한 코드 분석, 리팩토링 및 테스트 자동화 방법을 학습하고 있으며, 개발 생산성과 코드 품질을 향상시키기 위한 AI 기반 개발 워크플로를 연구하고 있습니다.",
      },
    ],
  },
])
