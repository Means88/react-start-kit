import { applyMiddleware, createStore } from 'redux'
import reducer from '../modules/reducer'

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store;
}