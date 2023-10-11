import client from "../../../client";

export default {
  Mutation: {
    clearAll: async () => {
      await client.user.deleteMany();
      return {
        ok: true,
      };
    },
  },
};
