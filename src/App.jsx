import './styles/reset.css';
import './styles/App.css';
import Timer from './components/Timer';
import Counter from './components/Counter';
import UsersList from './components/UsersList';
import ProductsList from './components/shop/ProductsList';
import PostList from './components/posts/PostList';

function App() {
  return (
    <div className='container'>
      <h1>06_react_useEffect_fetch_api_asycn</h1>
      {/* <ProductsList /> */}
      <PostList />
      {/* <UsersList /> */}
      {/* <Counter /> */}
      {/* <Timer /> */}
    </div>
  );
}
export default App;
