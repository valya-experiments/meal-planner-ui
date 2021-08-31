/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  resetMocks: true,
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["./utils/tests/setupTestingEnv.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/utils/tests/fileMock.ts",
    "\\.(css|less|scss)$": "<rootDir>/utils/tests/fileMock.ts",
    "^utils/(.*)": "<rootDir>/utils/$1",
  },
};
