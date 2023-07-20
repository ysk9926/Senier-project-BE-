import { User } from "@prisma/client";
import client from "../../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (_: unknown, { username, password, userId }: User) => {
      const existingUser = await client.user.findFirst({
        where: {
          OR: [
            {
              userId,
            },
            {
              username,
            },
          ],
        },
      });
      if (existingUser) {
        return {
          ok: false,
          error: "이미 가입된 유저이름이나 아이디 입니다",
        };
      }
      const uglyPasswrod = await bcrypt.hash(password, 10);
      await client.user.create({
        data: {
          username,
          userId,
          password: uglyPasswrod,
        },
      });
      return {
        ok: true,
      };
    },
  },
};
