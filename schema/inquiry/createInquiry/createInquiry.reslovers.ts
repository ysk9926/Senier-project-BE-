import { Inquiry } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    createInquiry: protectResolver(
      async (_: unknown, { title, contents }: Inquiry, { loggedInUser }) => {
        await client.inquiry.create({
          data: {
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            title,
            contents,
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
