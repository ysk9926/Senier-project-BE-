import { WhiteNoise } from "@prisma/client";
import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";
import { awsDelete, awsUpload } from "../../shared/shared.utils";

export default {
  Mutation: {
    editWhitenoise: protectResolver(
      async (
        _: unknown,
        { id, whitenoiseName, whitenoiseURL, requirePoints }: WhiteNoise,
        { loggedInUser }
      ) => {
        const oldWHitenoise = await client.whiteNoise.findUnique({
          where: { id },
        });
        if (loggedInUser.admin === true) {
          if (oldWHitenoise) {
            let whitenoiseUrl = "";
            if (whitenoiseURL) {
              whitenoiseUrl = await awsUpload(
                whitenoiseURL,
                loggedInUser.id,
                "whitenoise"
              );
              if (oldWHitenoise.whitenoiseURL) {
                awsDelete(oldWHitenoise.whitenoiseURL, "whitenoise");
              }
            }
            await client.whiteNoise.update({
              where: { id },
              data: {
                whitenoiseName,
                ...(whitenoiseURL && { whitenoiseURL: whitenoiseUrl }),
                requirePoints,
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
