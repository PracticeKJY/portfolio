import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const toggleAtom = atomWithStorage("toggle", false)
