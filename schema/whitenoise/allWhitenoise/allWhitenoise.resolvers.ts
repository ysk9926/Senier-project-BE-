import client from "../../../client";

export default {
  Query: {
    allWhitenoise: async () => {
      const allWhitenoise = await client.whiteNoise.findMany();
      return allWhitenoise;
    },
  },
};
