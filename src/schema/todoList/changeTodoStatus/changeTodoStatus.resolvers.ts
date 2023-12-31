import { Todo } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    changeTodoStatus: protectResolver(
      async (_: unknown, { id }: Todo, { loggedInUser }) => {
        const targetTodo = await client.todo.findUnique({ where: { id } });
        if (loggedInUser.id === targetTodo?.userId) {
          await client.todo.update({
            where: {
              id,
            },
            data: {
              status: true,
            },
          });
          await client.user.update({
            where: { id: loggedInUser.id },
            data: {
              points: loggedInUser.points + 5,
            },
          });

          return {
            ok: true,
          };
        }
        return {
          ok: false,
          error: "수정 권한이 없습니다",
        };
      }
    ),
  },
};
