import './header-styles.scss'
import { useState } from 'react'


const Header = () => {
  const [isDarkMode, setTheme] = useState(true);
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
          setTheme(!isDarkMode);
          const root = document.querySelector(':root');
          // body.toggleAttribute('light-mode');
          if (isDarkMode) {
            document.documentElement.style.setProperty('--bgcolor', 'rgba(15, 15, 15, 0.87)');
            document.documentElement.style.setProperty('--color', 'rgba(241, 241, 241, 0.87)');
          }
          else {
            document.documentElement.style.setProperty('--bgcolor', 'rgba(241, 241, 241, 0.87)');
            document.documentElement.style.setProperty('--color', 'rgba(15, 15, 15, 0.87)');
          }
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