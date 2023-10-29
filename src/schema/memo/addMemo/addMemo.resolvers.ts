import { Memo } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    addMemo: protectResolver(
      async (_: unknown, { content }: Memo, { loggedInUser }) => {
        if (content) {
          await client.memo.create({
            data: {
              content,
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
            },
          });
          return {
            ok: true,
          };
        }
        return {
          ok: false,
          error: "내용을 입력하세요",
        };
      }
    ),
  },
};
