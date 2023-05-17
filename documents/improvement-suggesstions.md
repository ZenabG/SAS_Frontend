# 💪 Improvement Suggestions

As mentioned in the readme we understand you won't have time to implement all the possible improvements within your tech assessment, but we would like to hear your throughs on the improvements you would add if this was your actual teams product.

For example explain:
- What is the improvement
- How would you implement it
- Why would this be an improvement

...


## Improvement 1:
What is the improvement? - 
Missing unit tests. All components are missing unit tests completely. 

How would you implement it? - 
- By using Jest alongwith React [Testing library](https://testing-library.com/docs/). 
- Install it using the following commands : 
```
    - npm install --save-dev jest @testing-library/react @testing-library/jest-dom
    - npm i -D jest ts-jest @types/jest
```
- Create jest config file using command `npx ts-jest config:init`
- Go to `jest.config.js` created in above step and change `testEnvironment` property value to `jsdom`
- Create a test class for the component with syntax `MyComponent.test.tsx`
- Refer to `Error.test.tsx` to see how to write unit tests for individual component `Error.tsx`
- Go to package.json and under scripts add a script `"test": "jest"`
- Run the tests using command `npm test`

Why would this be an improvement? - 
- Unit tests help identify bugs and issues early in the development process
- Unit tests gives confidence when refactoring code 


## Improvement 2:
What is the improvement? - 
Missing component/integration tests.

How would you implement it? - 
- Same as above for installation.
- It's also possible to use cypress for writing these component tests
- For how to write tests, these tests should target integration between two components. In case of this project, all files under src/pages.

Why would this be an improvement? - 
- Integration tests also help identify bugs earlier in the dev process 
- Mocks can be used to avoid creating prod traffic
- Also gives confidence when refactoring code 

## Improvement 3:
What is the improvement? - 
Missing E2E tests.

How would you implement it? - 
- Using cypress framework with TS/JS
- Install it using following command:
```
npm install cypress
```
- Now start cypress using `npx cypress open` from within the project directory
- This will start cypress runner
- Use 'Configure E2E tests' and then chose browser
- Once done, this will create cypress folder and files in the project
- Use page object model to design project structure
- See ReadMeSolution.md for all details

Why would this be an improvement? - 
Automating E2E tests are important to test the overall system under test without having to run them manually which is error prone

## Improvement 4:
What is the improvement? - 
Missing identifiers in code.

How would you implement it? -
- By adding `id=""` in each web element under all components and pages. These ids should be unique to create stable E2E automated tests. 
- I have added some of these ids for the E2E tests implemented. Check `DataGrid.tsx` line number 55, `Album.tsx` line number 25, etc. 

Why would this be an improvement? - 
- Currently all web elements are just using class names which are css properties and are prone to change. This can lead to increased test maintenance when writing E2E tests. 
- Also, the class names don't make any sense when trying to identify a specific web element

## Improvement 5:
What is the improvement? -
Run tests from CI/CD


How would you implement it? -
There are several tools available for configuring this. Eg. Jenkins, CircleCI, etc.

Why would this be an improvement? - 
- CI/CD ensures that tests are executed regularly and automatically
- Regression testing
- Confidence in deployments

