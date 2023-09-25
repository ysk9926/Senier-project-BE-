import client from "../../../client";

export default {
  Query: {
    allInquiry: async () => {
      const inquiries = await client.inquiry.findMany();
      return inquiries;
    },
  },
};
