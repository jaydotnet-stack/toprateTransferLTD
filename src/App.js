import logo from './logo.svg';
import './App.css';

// import CreateCustomer from './components/EFT/CreateCustomer';
// import CreateTransaction from './components/EFT/CreateTransaction';
// import WebHookRequest from './components/EFT/WebHookRequest';
import UpdateCustomerAccount from './components/EFT/UpdateCustomerAccount';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <CreateCustomer /> */}
      {/* <CreateTransaction /> */}
      {/* <WebHookRequest /> */}
      <UpdateCustomerAccount />
    </div>
  );
}

export default App;
