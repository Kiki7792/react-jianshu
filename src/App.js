import { React, Component } from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import store from './store';
import Header from "./common/header";

class Home extends Component {
  render() {
    return (
      <div>home</div>
    )
  }
}
class Detail extends Component {
  render() {
    return (
      <div>detail</div>
    )
  }
}

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/detail" exact element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
