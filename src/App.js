import React from "react";
import Add from "./component/add/Add"
import {store} from './redux/store'
import {Provider} from 'react-redux'

const App = () => {
  return (
      <Provider store={store}>
      <div>
         <Add/>
      </div>
      </Provider>
   
  );
}

export default App;