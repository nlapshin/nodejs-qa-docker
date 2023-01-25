
export default {
  testMatch: ['**/src/index.spec.js'],
  "transform": {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  "testRunner": "jest-jasmine2",
  setupFilesAfterEnv: ["jest-allure/dist/setup"],
  reporters: [
    "default", 
    "jest-allure",
    [
      "jest-html-reporters", {
        "publicPath": "./jest-html-report",
        "filename": "report.html"
      }
    ]
  ]
}
