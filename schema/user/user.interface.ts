import { Todo, User } from "@prisma/client";
import { int } from "aws-sdk/clients/datapipeline";

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

export interface IContext {
  loggedInUser: User;
}

export interface IError {
  ok: boolean;
  error: string;
}
