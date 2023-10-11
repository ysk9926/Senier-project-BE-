import client from "../../../client";
import { protectResolver } from "../user.Utils";

export default {
  Query: {
    me: protectResolver(
      async (_: unknown, __: unknown, { loggedInUser }) =>
        await client.user.findUnique({
          where: {
            userId: loggedInUser.userId,
          },
        })
    ),
  },
};
