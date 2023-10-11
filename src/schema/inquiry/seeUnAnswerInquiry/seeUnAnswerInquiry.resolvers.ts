import client from "../../../client";

export default {
  Query: {
    seeUnAnswerInquiry: async () =>
      await client.inquiry.findMany({
        where: {
          isClosed: false,
        },
        include: {
          user: true,
        },
      }),
  },
};
