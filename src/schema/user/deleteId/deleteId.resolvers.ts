import client from "../../../client";
import { protectResolver } from "../user.Utils";

export default {
  Mutation: {
    deleteId: protectResolver(
      async (_: unknown, __: unknown, { loggedInUser }) => {
        await client.userWhiteNoise.deleteMany({
          where: { userId: loggedInUser.id },
        });
        await client.user.delete({ where: { id: loggedInUser.id } });
        return {
          ok: true,
        };
      }
    ),
  },
};
