export type Role = "student" | "teacher" | "admin";

export interface User {
  id: number;
  name: string;
  role: Role;
  email?: string;
}

export type ApiResponse<T> = {
  data?: T;
  error?: string;
}

export function fetchUser(id: number): ApiResponse<User> {
  if (id > 0) {
    return {
      data: {
        id: id,
        name: `User ${id}`,
        role: "student",
        email: `user${id}@example.com`
      }
    };
  } else {
    return {
      error: "User not found"
    };
  }

}
