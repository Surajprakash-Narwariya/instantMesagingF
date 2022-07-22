import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import userReducer from './Redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

const store = createStore(userReducer);
store.subscribe(() => {
    console.log('redux state is updated');
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);

const User = (store) => {
    return store.getState();
};

export { store, User };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
