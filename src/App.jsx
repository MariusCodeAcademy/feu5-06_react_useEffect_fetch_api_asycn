import './styles/reset.css';
import './styles/App.css';
import Timer from './components/ui/Timer';
import Counter from './components/ui/Counter';
import UsersList from './components/ui/UsersList';

function App() {
  return (
    <div className='container'>
      <h1>06_react_useEffect_fetch_api_asycn</h1>
      <UsersList />
      {/* <Counter /> */}
      {/* <Timer /> */}
    </div>
  );
}
export default App;
