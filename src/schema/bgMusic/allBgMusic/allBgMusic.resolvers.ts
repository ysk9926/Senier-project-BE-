import client from "../../../client";

export default {
  Query: {
    allBgMusic: async () => {
      const bgMusicList = await client.backgroundMusic.findMany();
      return bgMusicList;
    },
  },
};
