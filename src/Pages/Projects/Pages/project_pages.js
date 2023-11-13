
import styles from './project_pages.module.css'

import Window from '../../../Components/Window'


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
        <div className={styles.lunar_lander}>
            <Window width='50%' height='100%' tab_name='description.txt' tab_type='text_file' content={
                <Title title={title} />
            } />
            <Window width='50%' height='50%' tab_name='training.py' tab_type='python_filled' content={
                <Title title={'Training GIFs here'} />
            } />
            <Window width='50%' height='49.69%' tab_name='highlights.py' tab_type='python_filled' content={
                <Title title={'Skills / Algorithms'} />
            } />
        </div>
    )
}

const SuttonRecreation = () => {

    const title = "Recreating Sutton's Temporal Difference Experiements"

    return (
        <div className={styles.sutton_recreation}>
            <Window width='100%' height='40%' tab_name='description.txt' tab_type='text_file' content={
                <Title title={title} />
            } />
            <Window width='50%' height='59.69%' tab_name='graphs.py' tab_type='python_filled' content={
                <Title title="Sutton's Graphs Here" />
            } />
            <Window width='49.69%' height='59.69%' tab_name='interactive_graphs.py' tab_type='python_filled' content={
                <Title title="Interactive Graphs -> Tune alpha / lambda" />
            } />
        </div>
    )
}

const PokemonGAN = () => {

    const title = "Using a Generative Adversarial Network to generate new Pokemon"

    return (
        <div className={styles.pokemon_gan}>
            <Window width='100%' height='100%' tab_name='pokemon_gan.txt' tab_type='text_file' content={
                <Title title={title} />
            } />
        </div>
    )
}

export { LunarLander, SuttonRecreation, PokemonGAN }