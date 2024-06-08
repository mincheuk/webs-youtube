import React from 'react'

import { headerMenus, searchKeyword} from '../../data/header'
import { Link, useLocation} from 'react-router-dom';

const Menu = () => {
    const location = useLocation(); 
    return (
        <nav className='header__menu'>
                    <ul className='menu'>
                        {headerMenus.map((menu, key) => {  {/* menu는 배열의 요소 key는 배열의 인덱스*/ }
                            return (
                                <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                                <Link to={menu.src}>                             {/*Link는 React의 a 태그 */}
                                {menu.icon}{menu.title}
                                </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className='keyword'>
                        {searchKeyword.map((keyword, key) => {
                            return (
                                <li key={key} className={location.pathname === keyword.src ? 'active' : ''} >
                                <Link to={keyword.src}> {/* React의 a 태그 */}
                                    {keyword.title}
                                </Link>
                                </li>
                            );
                            })}
                    </ul>
            </nav>
            )
}

export default Menu