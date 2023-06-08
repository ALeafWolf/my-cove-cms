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
        APP_KEYS:
          "mI6gkCTUZoJKUrT5BO71Lg==,OcrTOPmIw9cstAMVl/poIg==,7LUxWfgcmiv2J0og1VdxEg==,EtXZeP9KSZwJ+10km87/DA==",
        API_TOKEN_SALT: "Tr1UvvGnBLuCE5zrsLDTrw==",
        ADMIN_JWT_SECRET: "AOhXTPmrCd/AtmokpgkPpA==",
        JWT_SECRET: "OSEwIk1a54Sz3yECsjFrXg==",
        AWS_ACCESS_KEY_ID: "AKIA2FR3C53NCNKF2KHQ",
        AWS_ACCESS_SECRET: "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",
        AWS_REGION: "ca-central-1",
        AWS_BUCKET: "my-cove"
      },
    },
  ],
};
