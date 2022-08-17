// import process from 'process/browser';
import './App.css';

function App() {
  console.log("process.env.REACT_APP_ENV", process.env.REACT_APP_ENV);
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  const devJson = {
    locol: "locolhost:80",
    evn: "dev",
  }

  const testJson = {
    locol: "test.com:80",
    evn: "test",
  }

  const proJson = {
    locol: "pro.com:80",
    evn: "pro",
  }

  let envJson;
  switch(process.env.REACT_APP_ENV) {
    case "pro":
      envJson = proJson;
      break;
    case "test":
      envJson = testJson;
      break;
    default:
      envJson = devJson;
  }

  const {locol, evn} = envJson;

  return (
    <div className="App">
      <div className="App-header">
        <p>NODE_ENV: {process.env.NODE_ENV}</p>
        <p>REACT_APP_ENV: {process.env.REACT_APP_ENV}</p>
        <p>REACT_APP_BASEURL: {process.env.REACT_APP_BASEURL}</p>
        <p>{process.env.REACT_APP_ENV === 'dev' ? 'dev': 'no dev'}</p>
        <div className='hr'/>
        <p>env: {evn}</p>
        <p>locol: {locol}</p>
        <div className='hr'/>
        <p>REACT_APP_ENV_CMD: {process.env.REACT_APP_ENV_CMD}</p>
        <p>S3: {process.env.S1}</p>
      </div>
    </div>
  );
}

export default App;
