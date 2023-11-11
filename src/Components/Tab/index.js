
import styles from './index.module.css'

import Icon from '../Icon'

const Tab = (props) => {

    const { name, width, type, start_top, start_left } = props
    return (
        <div style={{ 
            width: width,
            top: start_top,
            left: start_left, 
            }} className={styles.tab_wrapper}>
            <div className={styles.tab_file}>
                <Icon icon={type} color={'#999'} size={15} />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Tab