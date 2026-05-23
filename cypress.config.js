module.exports = {
  allowCypressEnv: false,
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("task", {
        "db:seed": () => {
          const { execSync } = require("child_process");
          execSync("yarn db:seed", {
            cwd: "C:/Users/Usuario/Documents/development/learning-space/basic-programming/projeto-rwa/cypress-realworld-app",
          });
          return null;
        },
      });
    },
  },
};
