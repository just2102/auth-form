import { users } from "./users"

export const register = async (email: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  users.push({ id: users.length + 1, email, password })
}
