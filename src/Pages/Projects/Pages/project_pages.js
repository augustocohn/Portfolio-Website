
import styles from './project_pages.module.css'


const Title = (props) => {

    const { title } = props

    return (
        <div className={styles.project_title}>
            <h1>{title}</h1>
        </div>
    )
}



const LunarLander = () => {

    const title = "Solving OpenAI's Lunar Lander Environment using Deep Q-Learning"

    return (
        <Title title={title} />
    )
}

const SuttonRecreation = () => {

    const title = "Recreating Sutton's Temporal Difference Experiements"

    return (
        <Title title={title} />
    )
}

const PokemonGAN = () => {

    const title = "Using a Generative Adversarial Network to generate new Pokemon"

    return (
        <Title title={title} />
    )
}

export { LunarLander, SuttonRecreation, PokemonGAN }