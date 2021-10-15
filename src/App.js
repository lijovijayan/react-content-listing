import React from 'react'
import StoreProvider from './store/store.provider'

import './styles/app.styles.scss'
import { Movies } from './containers/movies'
function App() {
    return (
        <StoreProvider>
            <div className="app-container">
                <Movies />
            </div>
        </StoreProvider>
    )
}

export default App
