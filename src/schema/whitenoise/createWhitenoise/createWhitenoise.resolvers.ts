import { WhiteNoise } from "@prisma/client";
import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";
import { awsUpload } from "../../shared/shared.utils";

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
            let whitenoiseUrl = "";
            if (whitenoiseURL) {
              whitenoiseUrl = await awsUpload(
                whitenoiseURL,
                loggedInUser.id,
                "whitenoise"
              );
            }
            const createdWhitenoise = await client.whiteNoise.create({
              data: {
                whitenoiseName,
                whitenoiseURL: whitenoiseUrl,
                requirePoints,
              },
              select: {
                id: true, // 생성된 백색소음의 ID만 선택
              },
            });
            return {
              ok: true,
              id: createdWhitenoise.id,
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
