import { Inquiry } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    answerInquiry: protectResolver(
      async (
        _: unknown,
        { id, answer, isClosed }: Inquiry,
        { loggedInUser }
      ) => {
        const nowUser = await client.user.findUnique({
          where: { id: loggedInUser.id },
        });
        if (nowUser?.admin === true) {
          await client.inquiry.update({
            where: {
              id,
            },
            data: {
              answer,
              isClosed,
            },
          });
          return {
            ok: true,
          };
        }
        return {
          ok: false,
          error: "권한이 존재하지 않습니다",
        };
      }
    ),
  },
};
