// type Role
export type Role = "student" | "teacher" | "admin";

// interface User
export interface User {
  id: number;
  name: string;
  role: Role;
  email?: string;
}

// type ApiResponse générique
export type ApiResponse<T> = {
  data?: T;
  error?: string;
}

// fonction fetchUser
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