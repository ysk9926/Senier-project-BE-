import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";

export default {
  Query: {
    allInquiry: async () => {
      const inquiries = await client.inquiry.findMany();
      return inquiries;
    },
  },
};
