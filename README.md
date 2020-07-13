## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
There are 5 test-driven cases: <br />
    `axios_ApiCall.test.js:` this test is used to check the redux call when succeed or failed. <br>
    `$_components.test.js:` this tests are used to check the components if the render match a previous snapshot.

### `NOTES:`

The app will fetch the API each time a filter is applied, I made it like this because the API didnt provide anyway to filter the data <br>
And keeping a huge amount of data in the memory (state) was going to make the app laggy.  The ideal will be fetching a limited amount data (paging) <br>
And then fit the amount for better display. <br>
The app will support partial responsive, the breakpoint are iphone5/SE ( 320x568 ) and 1080p (1920x1080). The size between could look not that well <br>
because adding all breakpoints will take some extra time to implement. So i decided to just make the minimun and maximun view.  

### `Others Scripts`
### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.