import { WhiteNoise } from "@prisma/client";
import client from "../../../client";

export default {
  Mutation: {
    createWhitenoise: async (
      _: unknown,
      { whitenoiseName, whitenoiseURL, requirePoints }: WhiteNoise
    ) => {
      const existWhitenoise = await client.whiteNoise.findUnique({
        where: { whitenoiseName },
      });
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
    },
  },
};
