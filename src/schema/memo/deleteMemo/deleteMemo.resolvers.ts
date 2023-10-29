import { Memo } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    deleteMemo: protectResolver(
      async (_: unknown, { id }: Memo, { loggedInUser }) => {
        const oldMemo = await client.memo.findUnique({ where: { id } });
        if (oldMemo?.userId === loggedInUser.id) {
          await client.memo.delete({ where: { id } });
          return {
            ok: true,
          };
        }
        return {
          ok: false,
          error: "메모를 삭제하지 못했습니다.",
        };
      }
    ),
  },
};
