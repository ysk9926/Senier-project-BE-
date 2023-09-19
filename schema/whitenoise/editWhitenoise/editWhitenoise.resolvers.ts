import { WhiteNoise } from "@prisma/client";
import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";

export default {
  Mutation: {
    editWhitenoise: protectResolver(
      async (
        _: unknown,
        { id, whitenoiseName, whitenoiseURL }: WhiteNoise,
        { loggedInUser }
      ) => {
        const oldWHitenoise = await client.whiteNoise.findUnique({
          where: { id },
        });
        if (loggedInUser.admin === true) {
          if (oldWHitenoise) {
            await client.whiteNoise.update({
              where: { id },
              data: {
                whitenoiseName,
                whitenoiseURL,
              },
            });
            return {
              ok: true,
            };
          }
        }
        return {
          ok: false,
          error: "수정 권한이 없습니다",
        };
      }
    ),
  },
};
