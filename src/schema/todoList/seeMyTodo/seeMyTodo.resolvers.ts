import { protectResolver } from "../../user/user.Utils";
import client from "../../../client";

export default {
  Query: {
    seeMyTodo: protectResolver(
      async (_: unknown, __: unknown, { loggedInUser }) => {
        const todos = await client.todo.findMany({
          where: { userId: loggedInUser.id },
        });
        return todos;
      }
    ),
  },
};
