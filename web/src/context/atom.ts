import { atom } from 'jotai'

const userList = [
    { name: "" }
]

const postList = [
    {
        name: "",
        title: "",
        like: 0,
        comment: 0,
        type: "",
        content: ""
    }
]

const title = ""

export const userAtom = atom(userList)
export const postAtom = atom(postList)
export const titleAtom = atom(title)