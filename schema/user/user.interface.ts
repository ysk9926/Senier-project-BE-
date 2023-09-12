import { Todo } from "@prisma/client";

export interface IAccount {
  id: number;
  username: string;
  userId: string;
  password: string;
  avatar: string;
  todos: {
    todo: Todo;
  };
}

export interface IJwt {
  id: number;
}

export interface IOurResolver {
  root: any;
  args: any;
  context: string;
  info: any;
}

export interface IUser {
  id: number;
  username: string;
  userId: string;
  password: string;
  avatar: string;
  todos: {
    todo: Todo;
  };
  createdAt: any;
  updatedAt: any;
}

export interface IContext {
  loggedInUser: IUser;
}

export interface IError {
  ok: boolean;
  error: string;
}
