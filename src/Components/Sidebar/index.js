import styles from './index.module.css'
import Icon from '../Icon/index.js'

import { Link } from 'react-router-dom'


const Sidebar = () => {

    const d_color = '#999'
    const d_size = '30px'

    return (
            <div className={styles.sidebar_wrapper}>
                <div className={styles.icons}>
                    <Link to='/'>
                    <Icon icon='home' color={d_color} size={d_size} />
                    </Link>
                    <Link to='/about'>
                        <Icon icon='about_me' color={d_color} size={d_size} />
                    </Link>
                    <Link to='/courses'>
                        <Icon icon='course_work' color={d_color} size={d_size} />
                    </Link>
                    <Link to='/projects'>
                        <Icon icon='projects' color={d_color} size={d_size} />
                    </Link>
                    <Link to='/extras'>
                        <Icon icon='extras' color={d_color} size={d_size} />
                    </Link>
                </div>
            </div>
    )
}

export default Sidebar