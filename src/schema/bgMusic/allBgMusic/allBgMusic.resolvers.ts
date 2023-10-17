import client from "../../../client";

export default {
  Query: {
    allBgMusic: async () => {
      const bgMusicList = await client.backgroundMusic.findMany({
        orderBy: {
          id: "asc",
        },
      });
      return bgMusicList;
    },
  },
};
