import React from 'react'
import './Main.scss';
import MenuItem from '../../components/Menu_item/Menu-item';
import { itemsList } from '../../App'


const Main = ({ setCurrentPage }) => {
  return (
    <div className='main_wrapper'>
      {itemsList.map((item, index) => {
        if (index > 0) {
          return <MenuItem key={index} title={item.title} goto={item.linkTo} setCurrentPage={setCurrentPage} />

        }
      })}
      {/* <MenuItem title="Печатные услуги" goto='service_copy' setCurrentPage={setCurrentPage} />
      <MenuItem title="Программные услуги" goto='service_pc' setCurrentPage={setCurrentPage} />
      <MenuItem title="Техобслуживание оргтехники" goto='service_print' setCurrentPage={setCurrentPage} />
      <MenuItem title="WEB верстка" goto='service_web' setCurrentPage={setCurrentPage} />

      <MenuItem title="Канцтовары" goto='goods_kanc' setCurrentPage={setCurrentPage} />
      <MenuItem title="Компьютерные аксессуары" goto='goods_pc' setCurrentPage={setCurrentPage} />
      <MenuItem title="Расходные материалы" goto='goods_to' setCurrentPage={setCurrentPage} /> */}


    </div>
  )
}

export default Main;