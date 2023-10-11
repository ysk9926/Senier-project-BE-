import client from "../../../client";

export default {
  Query: {
    allInquiry: async () => {
      const a = await client.inquiry.findMany({
        include: {
          user: true,
        },
      });
      return a;
    },
  },
};
