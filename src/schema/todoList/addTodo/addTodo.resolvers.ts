import { Todo } from "@prisma/client";
import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Mutation: {
    addTodo: protectResolver(
      async (_: unknown, { content }: Todo, { loggedInUser }) => {
        await client.todo.create({
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
    ),
  },
};
