import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';

import reducers from './store/reducers'
import './styles/app.styles.scss';
import { Home } from './containers/home';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducers, composedEnhancer)

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
