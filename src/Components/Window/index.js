
import styles from './index.module.css'

import Tab from '../../Components/Tab'


const Window = (props) => {

    const {
        width,
        height,
        column,
        row,
        tab_name,
        tab_type,
        content
    } = props

    return (
        <div className={styles.window_wrapper} style={{
            maxWidth: width,
            height: height,
            gridColumn: column,
            gridRow: row,
        }}>
            <Tab name={tab_name} type={tab_type} />
            <div className={styles.content}>
                {content}
            </div>
        </div>
    )
}

export default Window