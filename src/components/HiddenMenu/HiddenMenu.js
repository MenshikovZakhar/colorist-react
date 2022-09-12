import { NavLink, Link } from 'react-router-dom';
import './HiddenMenu.css';
import logo from '../../images/logo_2.png';
import instagram from '../../images/instagram.svg';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';
import phone from '../../images/phone.svg';
function HiddenMenu({ onClickCloseMenu }) {
  return (
    <section className='hidden-menu'>
      <nav className='nav__menu_adapt'>
        <div className='nav-menu__close' onClick={onClickCloseMenu}></div>
        <div className='nav-movie__movie_adapt'>
          <Link to='/' className='header__link'>
            <img className='header__logo header__logo-hiddenMenu' src={logo} alt='logo' />
          </Link>
          <Link
            to='/'
            className='nav-movie__link-adapt'
            onClick={onClickCloseMenu}
          >
            Главная
          </Link>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Обо мне
          </NavLink>
          <NavLink
            to='/services'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Услуги
          </NavLink>
          <NavLink
            to='/price'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Стоимость
          </NavLink>
          <NavLink
            to='/portfolio'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Портфолио
          </NavLink>
          <NavLink
            to='/contacts'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Контакты
          </NavLink>
        </div>
        <h1 class="hidden-menu__title">Cвязаться со мной</h1>

        <div className='iqons'>
          <a href="tel:+79514840077">
            <img className='iqons__logo' src={phone} alt='logo' />
          </a>
          <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
            <img className='iqons__logo' src={instagram} alt='logo' />
          </a>
          <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
            <img className='iqons__logo' src={telegram} alt='logo' />
          </a>
          <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
            <img className='iqons__logo' src={vk} alt='logo' />
          </a>
        </div>
      </nav>
    </section>
  );
};

export default HiddenMenu;