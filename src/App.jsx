import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Service_WEB from './pages/Service_WEB/Service_WEB';
import Service_Copy from './pages/Service_Copy/Service_Copy';
import Service_PC from './pages/Service_PC/Service_PC';
import Service_Print from './pages/Service_Print/Service_Print';
import Main from './pages/Main/Main';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Goods_PC from './pages/Goods_PC/Goods_PC';
import Goods_Kanc from './pages/Goods_Kanc/Goods_Kanc';
import Goods_TO from './pages/Goods_TO copy/Goods_TO';
import App_Navigator from './components/Navigator/App_Navigator';
import About from './components/About/About';


function App() {
  window.addEventListener('load', () => console.log('on load 2'));
  return (
    <>
      <div className="app_wrapper">
        <Header />
        <App_Navigator className='app_navigation' />
        <div className="content_wrapper">
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/service_print' element={<Service_Print />} />
            <Route path='/service_copy' element={<Service_Copy />} />
            <Route path='/service_pc' element={<Service_PC />} />
            <Route path='/service_web' element={<Service_WEB />} />
            <Route path='/goods_kanc' element={<Goods_Kanc />} />
            <Route path='/goods_pc' element={<Goods_PC />} />
            <Route path='/goods_to' element={<Goods_TO />} />
            <Route path='/about_us' element={<About />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div >

    </>
  )
}

export default App
