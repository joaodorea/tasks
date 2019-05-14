const Mutation = {
  createTask: (root, args, context) => {
    console.log(args);
    return context.prisma.createTask({
      title: args.title,
      description: args.description
    });
  }
};

module.exports = Mutation;