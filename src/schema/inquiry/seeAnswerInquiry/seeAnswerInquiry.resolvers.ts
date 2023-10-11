import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";

export default {
  Query: {
    seeAnswerInquiry: async () =>
      await client.inquiry.findMany({
        where: {
          isClosed: true,
        },
        include: {
          user: true,
        },
      }),
  },
};
