import { BiHome, RiTeamLine } from 'react-icons/all'
import { Link } from 'react-router-dom'

import styles from './Nav.module.css'

const Items = [
    {
        title: 'Home',
        path: '/',
        icon: <BiHome />
    },
    {
        title: 'Team',
        path: '/team',
        icon: <RiTeamLine />
    }
]

export const Navbar = () => {

    return (
        <nav className={styles.nav}>
            <ul>
                {Items.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>{item.title} {item.icon}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )

}