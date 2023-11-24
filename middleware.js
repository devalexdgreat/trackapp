export { default } from "next-auth/middleware";

export const config = { matcher: ["/track", "/createid", "/editid", "/admin", "/register"] };