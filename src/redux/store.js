import { applyMiddleware, createStore } from "redux"
import createSagaMiddleWare from "redux-saga"
import rootReducer from "./reducer"
import rootSaga from "./middleware/sagas"

const sagaMiddleware = createSagaMiddleWare();

const globalStore = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default globalStore