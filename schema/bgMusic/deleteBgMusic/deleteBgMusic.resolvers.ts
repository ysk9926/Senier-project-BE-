import { BackgroundMusic } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    deleteBgMusic: protectResolver(
      async (_: unknown, { id }: BackgroundMusic, { loggedInUser }) => {
        if (loggedInUser.admin === true) {
          await client.backgroundMusic.delete({ where: { id } });
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
