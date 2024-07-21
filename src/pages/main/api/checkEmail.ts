import { users } from "./users"

export function checkEmail(email: string) {
  return users.some((user) => user.email === email.trim())
}
