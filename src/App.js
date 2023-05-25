import { Space } from 'antd';
import './App.css';
import Header from './Components/Header';
import SideMenu from './Components/SideMenu';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Space className='SideMenuAndPageContent'>
        <SideMenu></SideMenu>
        <Content></Content>
      </Space>
      <Footer/>
    </div>
  );
}

export default App;
