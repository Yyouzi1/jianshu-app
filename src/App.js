import React from 'react';
import { Provider } from 'react-redux'
import store from './store/index'
import Route from './router/index'

function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
export default App;
