import './header-styles.scss'
import { useState } from 'react'


const Header = () => {
  const [dark, setTheme] = useState(true);
  return (
    <>
      <div className="header_wrapper">
        <div className='header_logo'>
          <div className="header_logo_inner">
            <h1 className='header_name'>Литасервис</h1>
            <h5 className='header_subname'>Частное предприятие</h5>
          </div>
        </div>
        <div className='theme_button' onClick={() => {
          setTheme(!dark);
          const root = document.querySelector(":root");
          root.classList.toggle('light')
        }
        }>
        </div>

      </div></>
  )
}

// Header.propTypes = {
//   someProps!: PropTypes.string
// }
export default Header;