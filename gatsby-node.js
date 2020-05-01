exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  createRedirect({ fromPath: '/', toPath: '/fa', isPermanent: true, redirectInBrowser: true });
};
