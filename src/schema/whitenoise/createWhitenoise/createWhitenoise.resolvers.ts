import { WhiteNoise } from "@prisma/client";
import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";

export default {
  Mutation: {
    createWhitenoise: protectResolver(
      async (
        _: unknown,
        { whitenoiseName, whitenoiseURL, requirePoints }: WhiteNoise,
        { loggedInUser }
      ) => {
        const existWhitenoise = await client.whiteNoise.findUnique({
          where: { whitenoiseName },
        });
        if (loggedInUser.admin === true) {
          if (!existWhitenoise) {
            await client.whiteNoise.create({
              data: {
                whitenoiseName,
                whitenoiseURL,
                requirePoints,
              },
            });
            return {
              ok: true,
            };
          }
          return {
            ok: false,
            error: "이미 존재하는 백색소음입니다",
          };
        }
        return {
          ok: false,
          error: "권한이 없습니다",
        };
      }
    ),
  },
};
