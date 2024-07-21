import { users } from "./users"

export const login = async (email: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const user = users.find((user) => user.email === email && user.password === password)

  if (!user) {
    throw new Error("User not found")
  }

  return user
}
