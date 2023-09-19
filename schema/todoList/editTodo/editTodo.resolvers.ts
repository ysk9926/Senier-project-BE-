import { Todo } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    editTodo: protectResolver(async (_: unknown, { content, id }: Todo) => {
      const oldTodo = await client.todo.findFirst({
        where: {
          id,
        },
      });
      if (oldTodo?.content !== content) {
        await client.todo.update({
          where: {
            id,
          },
          data: {
            content,
          },
        });
        return {
          ok: true,
        };
      } else if (oldTodo.content === content) {
        return {
          ok: false,
          error: "변경사항이 없습니다",
        };
      }
      return {
        ok: false,
        error: "투두를 찾을수 없습니다",
      };
    }),
  },
};
