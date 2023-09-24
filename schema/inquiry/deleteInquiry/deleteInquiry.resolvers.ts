import { Inquiry } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Muataion: {
    deleteInquiry: protectResolver(
      async (_: unknown, { id }: Inquiry, { loggedInUser }) => {
        const inquiry = await client.inquiry.findUnique({ where: { id } });
        if (loggedInUser.admin === true) {
          await client.inquiry.delete({ where: { id } });
          return {
            ok: true,
          };
        }
        if (inquiry?.userID === loggedInUser.id) {
          await client.inquiry.delete({ where: { id } });
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
