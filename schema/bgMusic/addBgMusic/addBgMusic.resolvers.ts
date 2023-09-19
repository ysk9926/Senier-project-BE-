import { BackgroundMusic } from "@prisma/client";
import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";

export default {
  Mutation: {
    addBgMusic: protectResolver(
      async (
        _: unknown,
        { bgMusicName, bgMusicURL }: BackgroundMusic,
        { loggedInUser }
      ) => {
        const existBgMusic = await client.backgroundMusic.findUnique({
          where: { bgMusicName },
        });
        if (loggedInUser.admin === true) {
          if (!existBgMusic) {
            await client.backgroundMusic.create({
              data: {
                bgMusicName,
                bgMusicURL,
              },
            });
            return {
              ok: true,
            };
          }
          return {
            ok: false,
            error: "이미 존재하는 배경음악입니다",
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
