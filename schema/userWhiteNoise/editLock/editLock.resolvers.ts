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
          console.log(userWhitenoise);
          return {
            ok: true,
            whitenoise: userWhitenoise,
          };
        }
        return {
          ok: false,
          error: "화이트노이즈가 존재하지 않습니다",
        };
      }
    ),
  },
};
