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
      const uglyPassword = await bcrypt.hash(password, 10);
      const createdUser = await client.user.create({
        data: {
          username,
          userId,
          password: uglyPassword,
        },
      });

      // 데이터베이스에 있는 모든 WhiteNoise 가져오기
      const allWhiteNoises = await client.whiteNoise.findMany();

      // 각 WhiteNoise를 해당 사용자의 UserWhiteNoise로 추가
      for (const whiteNoise of allWhiteNoises) {
        await client.userWhiteNoise.create({
          data: {
            user: {
              connect: {
                id: createdUser.id, // 새로 생성된 사용자의 ID를 연결
              },
            },
            whiteNoise: {
              connect: {
                id: whiteNoise.id, // 기존 WhiteNoise의 ID를 연결
              },
            },
            isLocked: false, // 원하는 기본 잠금 상태를 설정
          },
        });
      }
      return {
        ok: true,
      };
    },
  },
};
