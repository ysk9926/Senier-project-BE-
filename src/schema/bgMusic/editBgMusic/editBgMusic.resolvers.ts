import { BackgroundMusic } from "@prisma/client";
import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";
import { awsDelete, awsUpload } from "../../shared/shared.utils";

export default {
  Mutation: {
    editBgMusic: protectResolver(
      async (
        _: unknown,
        { id, bgMusicName, bgMusicURL }: BackgroundMusic,
        { loggedInUser }
      ) => {
        const oldBgMusic = await client.backgroundMusic.findUnique({
          where: { id },
        });
        if (loggedInUser.admin === true) {
          if (oldBgMusic) {
            let bgMusicUrl = "";
            if (bgMusicURL) {
              bgMusicUrl = await awsUpload(
                bgMusicURL,
                loggedInUser.id,
                "bgMusic"
              );
              if (oldBgMusic.bgMusicURL) {
                awsDelete(oldBgMusic.bgMusicURL, "bgMusic");
              }
            }
            await client.backgroundMusic.update({
              where: { id },
              data: {
                bgMusicName,
                ...(bgMusicURL && { bgMusicURL: bgMusicUrl }),
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
