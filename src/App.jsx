import './styles/reset.css';
import './styles/App.css';
import Timer from './components/ui/Timer';
import Counter from './components/ui/Counter';

function App() {
  return (
    <div className='container'>
      <h1>06_react_useEffect_fetch_api_asycn</h1>
      <Counter />
      {/* <Timer /> */}
    </div>
  );
}
export default App;
