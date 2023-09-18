import { WhiteNoise } from "@prisma/client";
import client from "../../../client";

export default {
  Mutation: {
    createWhitenoise: async (
      _: unknown,
      { whitenoiseName, whitenoiseURL }: WhiteNoise
    ) => {
      const existWhitenoise = await client.whiteNoise.findUnique({
        where: { whitenoiseName },
      });
      if (existWhitenoise) {
        return {
          ok: false,
          error: "이미 존재하는 백색소음입니다",
        };
      } else {
        await client.whiteNoise.create({
          data: {
            whitenoiseName,
            whitenoiseURL,
          },
        });
        return {
          ok: true,
        };
      }
    },
  },
};
