module.exports = {
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json",
      },
    },
    moduleFileExtensions: ["ts", "js"],
    setupFiles: ["dotenv/config"],
    transform: {
      "^.+\\.(ts)$": "ts-jest",
    },
    testMatch: ["**/test/**/*.test.(ts|js)"],
    testEnvironment: "node",
  };
  