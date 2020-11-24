export default {
  transform: {
    /*"\\.js": "babel-jest"*/
  },
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
        sort: "titleAsc"
      }
    ]
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "./src/.internal/"],
  collectCoverageFrom: ["./src/*.js"]
};
