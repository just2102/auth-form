import { users } from "./users"

export async function checkEmail(email: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return users.some((user) => user.email === email.trim())
}
