import client from "../../../client";
import { protectResolver } from "../../user/user.Utils";

export default {
  Mutation: {
    seeMyInquiry: protectResolver(
      async (_: unknown, __: unknown, { loggedInUser }) => {
        const userInquirise = await client.inquiry.findMany({
          where: { userID: loggedInUser.id },
        });
        return userInquirise;
      }
    ),
  },
};
