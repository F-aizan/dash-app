import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient,QueryClientProvider } from "react-query";
import { createStore,combineReducers } from "redux";
import store from './redux_files/store'


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  
  <QueryClientProvider client={queryClient}>
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  </Provider>
  </QueryClientProvider>
);