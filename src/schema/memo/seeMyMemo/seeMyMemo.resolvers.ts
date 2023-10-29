import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Query: {
    seeMyMemo: protectResolver(
      async (_: unknown, __: unknown, { loggedInUser }) =>
        await client.memo.findMany({ where: { userId: loggedInUser.id } })
    ),
  },
};
