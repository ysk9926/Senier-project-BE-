import { BackgroundMusic } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";
import { awsDelete } from "../../shared/shared.utils";

export default {
  Mutation: {
    deleteBgMusic: protectResolver(
      async (_: unknown, { id }: BackgroundMusic, { loggedInUser }) => {
        const oldBgMusic = await client.backgroundMusic.findUnique({
          where: { id },
        });
        if (loggedInUser.admin === true) {
          if (oldBgMusic) {
            awsDelete(oldBgMusic?.bgMusicURL, "bgMusic");
          }
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
