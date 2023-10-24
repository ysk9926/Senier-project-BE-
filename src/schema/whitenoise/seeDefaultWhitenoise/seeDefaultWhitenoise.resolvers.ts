import client from "../../../client";

export default {
  Query: {
    seeDefaultWhitenoise: async () => {
      const defaultWhitenoise = await client.whiteNoise.findMany({
        where: {
          id: {
            in: [1, 2, 3], // id가 1, 2, 3인 화이트노이즈를 필터링
          },
        },
      });

      return defaultWhitenoise;
    },
  },
};
