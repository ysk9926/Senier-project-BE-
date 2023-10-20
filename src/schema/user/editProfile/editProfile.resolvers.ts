import { User } from "@prisma/client";
import { protectResolver } from "../user.Utils";
import { awsDelete, awsUpload } from "../../shared/shared.utils";
import bcrypt from "bcrypt";
import client from "../../../client";

export default {
  Mutation: {
    editProfile: protectResolver(
      async (
        _: unknown,
        { userId, username, password: newPassword, avatar }: User,
        { loggedInUser }
      ) => {
        let avatarURL = null;
        if (avatar) {
          avatarURL = await awsUpload(avatar, loggedInUser.id, "avatars");
          if (loggedInUser.avatar) {
            awsDelete(loggedInUser.avatar, "avatars");
          }
        }
        let uglyPassword = null;
        if (newPassword) {
          uglyPassword = await bcrypt.hash(newPassword, 10);
        }

        const updateUser = await client.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            userId,
            username,
            ...(uglyPassword && { password: uglyPassword }),
            ...(avatar && { avatar: avatarURL }),
          },
        });
        if (updateUser.id) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "업데이트가 불가능합니다",
          };
        }
      }
    ),
  },
};
