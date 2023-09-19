import { User } from "@prisma/client";
import { protectResolver } from "../user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    deleteAccount: protectResolver(
      async (_: unknown, { userId }: User, { loggedInUser }) => {
        if (loggedInUser.admin === true) {
          await client.user.delete({ where: { userId } });
          return {
            ok: true,
          };
        }
        if (loggedInUser.userId === userId) {
          await client.user.delete({ where: { userId } });
          return {
            ok: true,
          };
        }
        return {
          ok: false,
          error: "권한이 없습니다",
        };
      }
    ),
  },
};
