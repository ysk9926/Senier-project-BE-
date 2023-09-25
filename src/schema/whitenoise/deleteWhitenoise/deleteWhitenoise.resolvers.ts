import { WhiteNoise } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    deleteWhitenoise: protectResolver(
      async (_: unknown, { id }: WhiteNoise, { loggedInUser }) => {
        if (loggedInUser.admin === true) {
          await client.whiteNoise.delete({ where: { id } });
          return {
            ok: true,
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
