## Available Scripts

#### Spanish
En el directorio del proyecto, pueden ejecutar:

#### English
In the project directory, you can run:

### `yarn start`

#### Spanish
Corre la aplicacion en modo desarrollo <br />
Abre en navegador con la ruta [http://localhost:3000](http://localhost:3000)

#### English
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

#### Spanish
Correr el entorno interactivo para testeo.<br />
Hay 6 casos descriptivos de test-driven: <br />
    `axios_api.test:` este test esta echo para testear la funcion de axios para llamar al API. <br />
    `redux_flow.test:` este test esta echo para testear el flujo de redux con la llamada del API si falla o triunfa. <br />
    `$_components.test:` estos test estan echo para checkear los componentes si el renderizado machea con los snapshot sacados anteriormente.

#### English
Launches the test runner in the interactive watch mode.<br />
There are 6 describe test-driven cases: <br />
    `axios_api.test:` this test is used to check the axios API call. <br />
    `redux_flow.test:` this test is used to check the redux call to the API to check when succeeded or failed. <br />
    `$_components.test:` this tests are used to check the components if the render match a previous snapshot.

### `NOTES:`

#### Spanish
La aplicacion trae datos del API cada vez que se aplica un filtro, Una de las razones que lo hice de esta manera es que el API no provee endpoints <br />
para filtrar datos, y mantener todo el dato en memoria ( en un estado )  podria hacer que la aplicacion se haga mas lenta. En volumenes grandes de datos <br />
ayudaria traer datos en cantidades limitadas usando paginado y despues ver como mostralo mejor.<br />
Se le aplico parcialmente que sea responsive, limitando solo un tamanio minimo iphone5/SE ( 320x568 ) y un tamanio maximo 1080p (1920x1080) para que se vea bien, <br />
los tamanios intermedios pueden no verse bien ya que agregar breakpoint en todos los puntos tomaria un tiempo extra para hacerlo. Por eso solo decidi usar esos 2. <br />
Por cierto la profesion 'Tinker' viene mal el dato ya que en el API viene con un espacio al comienzo ' Tinker'

#### English
The app will fetch the API each time a filter is applied, I made it like this because the API didnt provide anyway endpoints to filter the data <br />
And keeping a huge amount of data in the memory (state) was going to make the app laggy.  The ideal will be fetching a limited amount data (paging) <br />
And then fit the amount for better display. <br />
The app will support partial responsive, the breakpoint are iphone5/SE ( 320x568 ) and 1080p (1920x1080). The size between could look not that well <br />
because adding all breakpoints will take some extra time to implement. So i decided to just make the minimun and maximun view.  <br />
By the way the profession 'Tinker' the data is wrong in the API because it comes with a blank space at the start ' Tinker'

## `Others Scripts`
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