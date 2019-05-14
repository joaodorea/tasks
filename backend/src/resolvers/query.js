const { forwardTo } = require("prisma-binding");

const Query = {
  // tasks: forwardTo('db'),
  async tasks(root, args, context, info) {
    const resp = await context.db.query.tasks(
      {
        where: { id: args.id }
      },
      info
    );
    return resp;
  },
  async users(root, args, context, info) {
    const resp = await context.db.query.users({}, info);
    console.log(info);
    return resp;
  }
};

module.exports = Query;
