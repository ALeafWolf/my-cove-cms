module.exports = {
  apps: [
    {
      name: "backend-my-cove",
      cwd: ".",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: "localhost", // database endpoint
        DATABASE_PORT: "5432",
        DATABASE_NAME: "my-cove", // DB name
        DATABASE_USERNAME: "postgres", // your username for psql
        DATABASE_PASSWORD: "password", // your password for psql
      },
    },
  ],
};
