import api from "./api"
export const broker = (body) => {
    return api.post("/", body)
}