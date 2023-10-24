import client from "../../../client";
import { protectResolver } from "../user.Utils";

export default {
  Query: {
    seeMyWhitenoise: protectResolver(
      async (_: unknown, __: unknown, { loggedInUser }) => {
        const ownWhitenoise = await client.userWhiteNoise.findMany({
          where: {
            userId: loggedInUser.id,
          },
          include: {
            whiteNoise: true,
          },
          orderBy: {
            whiteNoise: {
              id: "asc",
            },
          },
        });
        return ownWhitenoise;
      }
    ),
  },
};
