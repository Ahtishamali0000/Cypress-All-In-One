const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    // specPattern: "**/*.feature",  // Ensure the feature files are in the correct location
    specPattern: 'cypress/e2e/**/*.js',  // Path to your spec files (not feature files anymore)

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());  // Apply the cucumber preprocessor
    },
    // baseUrl: 'https://ecommerce-playground.lambdatest.io', // Update the base URL as per your test site
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth', // Base URL for tests

    supportFile: false,
  },
});





// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

// module.exports = defineConfig({
//   e2e: {
//     async setupNodeEvents(on, config) {
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)], // Ensure this is correctly imported
//       });

//       on("file:preprocessor", bundler);
//       await addCucumberPreprocessorPlugin(on, config);

//       return config;
//     },
    
//     specPattern: "**/*.feature", // Adjust based on your feature file location
//     baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth', // Base URL for tests
//     supportFile: false,
//     stepDefinitions: "cypress/e2e/step_definitions/**/*.{js,ts}",

//   },
// });








// import { defineConfig } from 'cypress';

// export default defineConfig({
//   e2e: {
//     // specPattern: 'cypress/e2e/**/*.js',  // Path to your spec files (not feature files anymore)
//     supportFile: false, // Disable support file if not needed
//     baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth', // Base URL for tests
//     sauceDemo: 'https://www.saucedemo.com/v1/'
//   },
// });
