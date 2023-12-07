import React from 'react'
import './Main.scss';
import MenuItem from '../../components/Menu_item/Menu-item';


const Main = ({ setCurrentPage }) => {
  return (
    <div className='main_wrapper'>
      <MenuItem title="Печатные услуги" goto='service_copy' setCurrentPage={setCurrentPage} />
      <MenuItem title="Программные услуги" goto='service_pc' />
      <MenuItem title="Техобслуживание оргтехники" goto='service_print' />
      <MenuItem title="WEB верстка" goto='service_web' />

      <MenuItem title="Канцтовары" goto='goods_kanc' />
      <MenuItem title="Компьютерные аксессуары" goto='goods_pc' />
      <MenuItem title="Расходные материалы" goto='goods_to' />


    </div>
  )
}

export default Main;