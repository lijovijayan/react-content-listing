import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

import reducers from './store/reducers'
import './styles/app.styles.scss'
import { Movies } from './containers/movies'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducers, composedEnhancer)

function App() {
    return (
        <Provider store={store}>
            <div className="app-container">
                <Movies />
            </div>
        </Provider>
    )
}

export default App
