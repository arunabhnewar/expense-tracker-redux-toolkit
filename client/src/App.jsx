import "./App.css";
import Balance from "./components/Balance/Balance";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <div className='App'>
      <Layout>
        <Balance />
        <Form />
        <Transactions />
      </Layout>
    </div>
  );
}

export default App;
