

import styles from './index.module.css'

import Icon from '../../Components/Icon'


const Options = (props) => {



    const mapped = props.options.map((option) => (
        <button key={option} className={styles.option} onClick={(e) => {
            e.preventDefault()
            props.updatePage(option)
        }}><Icon icon='python_filled' color='#3776ab' size='16px' />{option}</button>
    ))

    return (
        <div className={styles.options_wrapper}>
            {mapped}
        </div>
    )
}



const Navigator = (props) => {

    const options = props.options
    const optionNames = Object.keys(options)

    return (
        <div className={styles.navigator_wrapper}>
            <p>PROJECT EXPLORER</p>
            <Options options={optionNames} updatePage={props.updatePage}/>
        </div>
    )

}

export default Navigator