import { WhiteNoise } from "@prisma/client";
import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";

export default {
  Mutation: {
    updateUserWhitenoise: protectResolver(
      async (
        _: unknown,
        { whiteNoiseId }: { whiteNoiseId: number },
        { loggedInUser }
      ) => {
        const allUser = await client.user.findMany({
          where: {
            admin: false,
          },
          select: {
            id: true, // id만 선택
          },
        });
        console.log(allUser);
        await Promise.all(
          allUser.map(async (user) => {
            // userWhiteNoise 생성
            await client.userWhiteNoise.create({
              data: {
                user: {
                  connect: {
                    id: user.id,
                  },
                },
                whiteNoise: {
                  connect: {
                    id: whiteNoiseId,
                  },
                },
                isLocked: true,
              },
            });
          })
        );
        return {
          ok: true,
        };
      }
    ),
  },
};
