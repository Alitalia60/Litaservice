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
import Goods_TO from './pages/Goods_TO/Goods_TO';
import App_Navigator from './components/Navigator/App_Navigator';
import About from './components/About/About';
import { useState } from 'react';



const setCurrentPage = (e) => {
  if (e.currentTarget.tagName == 'UL') {
    // setActiveLink(e.target.getAttribute('href'));
    const ul = document.querySelector('.nav_wrapper');
    for (let index = 0; index < ul.children.length; index++) {
      const el = ul.children[index];
      el.classList.remove('active_link');
    }
    e.target.parentNode.classList.add('active_link')
  }
}
export const itemsList = [
  { linkTo: '/', linkImg: '', title: 'Home', element: < Main /> },
  { linkTo: '/service_copy', linkImg: '', title: 'Ксерокопия', element: <Service_Copy onLinkChange={setCurrentPage} /> },
  { linkTo: '/service_pc', linkImg: '', title: 'Компьютерные услуги', element: <Service_PC /> },
  { linkTo: '/service_print', linkImg: '', title: 'Ремонт', element: <Service_Print /> },
  { linkTo: '/service_web', linkImg: '', title: 'WEB-верстка', element: <Service_WEB /> },
  { linkTo: '/goods_kanc', linkImg: '', title: 'Кантовары', element: <Goods_Kanc /> },
  { linkTo: '/goods_pc', linkImg: '', title: 'Аксессуары', element: <Goods_PC /> },
  { linkTo: '/goods_rasx', linkImg: '', title: 'Расходники', element: <Goods_TO /> },
  { linkTo: '/about_us', linkImg: '', title: 'О нас', element: <About /> },
];
export function App() {




  return (
    <>
      <div className="app_wrapper">
        <Header />
        <App_Navigator className='app_navigation' onLinkChange={setCurrentPage} />
        <div className="content_wrapper" >
          <Routes>
            {itemsList.map((item, index) => {
              return <Route key={index} path={item.linkTo} element={item.element} title={item.title} />
            })}
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div >

    </>
  )
}


