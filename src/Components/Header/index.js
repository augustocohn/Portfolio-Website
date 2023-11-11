
import styles from './index.module.css'

import Icon from '../Icon/index.js'

const Header = () => {
    return (
        <header>
            <div className={styles.header_bar}>
                <Icon icon='terminal' color='#007acc' size='30px' />
                <h3>File</h3>
                <h3>Edit</h3>
                <h3>Selection</h3>
                <h3>View</h3>
                <h3>Go</h3>
                <h3>Run</h3>
                <h3>Terminal</h3>
                <h3>Help</h3>
                <div className={styles.links}>
                    <a href='https://github.com/augustocohn' rel="noopener noreferrer" target="_blank">
                        <Icon icon='github' color='#ff9248' size='30px' />
                    </a>
                    <a href='https://www.linkedin.com/in/augusto-cohn/' rel="noopener noreferrer" target="_blank">
                        <Icon icon='linkedin' color='#0077b5' size='34px' />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header