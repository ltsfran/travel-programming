import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { medicine as medicineReducer } from '@app/src/views/Medicines/description/state/medicine';
import { disease as diseaseReducer } from '@app/src/views/Diseases/description/state/disease';

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      medicine: medicineReducer,
      disease: diseaseReducer
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
