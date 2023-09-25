import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";

export default {
  Mutation: {
    editLock: protectResolver(
      async (
        _: unknown,
        { whiteNoiseId }: { whiteNoiseId: number },
        { loggedInUser }
      ) => {
        const userWhitenoise = await client.userWhiteNoise.findFirst({
          where: {
            whiteNoiseId,
            userId: loggedInUser.id,
          },
          include: {
            whiteNoise: true, // whiteNoise 필드를 포함시킴
          },
        });
        if (userWhitenoise) {
          if (userWhitenoise.whiteNoise.requirePoints !== null) {
            if (
              userWhitenoise.whiteNoise.requirePoints <= loggedInUser.points
            ) {
              const points =
                loggedInUser.points - userWhitenoise.whiteNoise.requirePoints;
              await client.user.update({
                where: {
                  id: loggedInUser.id,
                },
                data: {
                  points,
                },
              });
              await client.userWhiteNoise.update({
                where: {
                  id: userWhitenoise.id,
                },
                data: {
                  isLocked: !userWhitenoise.isLocked,
                },
              });
              return {
                ok: true,
              };
            }
            return {
              ok: false,
              error: "잠금에 필요한 포인트가 부족합니다",
            };
          }
        }
        return {
          ok: false,
          error: "화이트노이즈가 존재하지 않습니다",
        };
      }
    ),
  },
};
