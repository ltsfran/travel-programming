import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { medicine as medicineReducer } from '@app/src/views/Medicines/description/state/medicine'

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      medicine: medicineReducer,
    }),
    (window).__PRELOADED_STATE__,
    composeEnhancers(
      applyMiddleware(
        thunk
      )
    )
  )
  return store;
}
