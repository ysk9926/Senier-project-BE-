import { User } from "@prisma/client";
import client from "../../../client";

export default {
  Query: {
    seeUser: (_: unknown, { username }: User) =>
      client.user.findUnique({ where: { username } }),
  },
};
