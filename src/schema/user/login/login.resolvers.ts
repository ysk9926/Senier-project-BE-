import client from "../../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface ILogin {
  userId: string;
  password: string;
}

export default {
  Mutation: {
    login: async (_: unknown, { userId, password }: any) => {
      const user = await client.user.findFirst({ where: { userId } });
      if (!user) {
        return {
          ok: false,
          error: "유저 정보가 존제하지 않습니다",
        };
      }
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "비밀번호가 다릅니다",
        };
      }
      const token = jwt.sign({ id: user.id }, String(process.env.SECRET_KEY));
      return {
        ok: true,
        token,
      };
    },
  },
};
