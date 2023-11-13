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
                    <Link to='/education'>
                        <Icon icon='course_work' color={d_color} size={d_size} />
                    </Link>
                    <Link to='/projects'>
                        <Icon icon='projects' color={d_color} size={d_size} />
                    </Link>
                    <Link to='/extras'>
                        <Icon icon='extras' color={d_color} size={d_size} />
                    </Link>
                    <a href='https://github.com/augustocohn' rel="noopener noreferrer" target="_blank">
                        <Icon icon='github' color='#ff9248' size='30px' />
                    </a>
                    <a href='https://www.linkedin.com/in/augusto-cohn/' rel="noopener noreferrer" target="_blank">
                        <Icon icon='linkedin' color='#0077b5' size='30px' />
                    </a>
                </div>
            </div>
    )
}

export default Sidebar