import { Todo } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    deleteTodo: protectResolver(
      async (_: unknown, { id }: Todo, { loggedInUser }) => {
        const oldTodo = await client.todo.findUnique({ where: { id } });
        if (loggedInUser.id === oldTodo?.userId) {
          await client.todo.delete({
            where: {
              id,
            },
          });
          return {
            ok: true,
          };
        }
        return {
          ok: false,
          error: "삭제 권한이 없습니다",
        };
      }
    ),
  },
};
