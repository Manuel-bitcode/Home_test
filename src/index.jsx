import React from 'react';
import ReactDOM from 'react-dom';
import SocialPost from './container/SocialPost'

import { createUseStyles } from 'react-jss';
import { Provider } from 'react-redux';
import store from './store'

const useStyles = createUseStyles({
  '@global': {
    body: {
      fontFamily:'Raleway, sans-serif',
      margin:0,
      padding:0
    },
    p:{
      margin:0
    },
    '*::-webkit-scrollbar': {
      width: '10px'
    },
    '*::-webkit-scrollbar-thumb': {
    background: '#5C18FF',
    borderRadius:'5px'
    }
  }
});

const App=()=>{
  useStyles()
  return(
    <Provider store={store}>
      <div className='App'>
        <SocialPost></SocialPost>
      </div>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));