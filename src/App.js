import { Provider } from 'react-redux'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import store from './store';
import Header from "./common/header";
import Home from './pages/home'
import Login from './pages/login'
import Detail from './pages/detail'
import Write from './pages/write'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/write" exact element={<Write />} />
          <Route path="/detail/:id" exact element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
