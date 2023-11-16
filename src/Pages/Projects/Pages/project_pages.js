
import styles from './project_pages.module.css'

import lunar_ep_0 from '../images/lunar_ep_0.gif'
import lunar_ep_100 from '../images/lunar_ep_100.gif'
import lunar_ep_200 from '../images/lunar_ep_200.gif'
import lunar_ep_300 from '../images/lunar_ep_300.gif'
import lunar_ep_400 from '../images/lunar_ep_400.gif'
import lunar_ep_500 from '../images/lunar_ep_500.gif'

import Window from '../../../Components/Window'
import { useState } from 'react'


const Title = (props) => {

    const { title } = props

    return (
        <div className={styles.project_title}>
            <h1>{title}</h1>
        </div>
    )
}

const LunarLanderDemo = () => {

    const episodes = {
        0: lunar_ep_0,
        100: lunar_ep_100,
        200: lunar_ep_200,
        300: lunar_ep_300,
        400: lunar_ep_400,
        500: lunar_ep_500,
    }

    const [episode, setEpisode] = useState(0)

    const changeEpisode = (button, newEpisode) => {
        setEpisode(newEpisode)
    }

    const mapped = Object.keys(episodes).map((e) => (
        <button key={e} onClick={(button) => changeEpisode(button.target, e)}>{e}</button>
    ))

    return (
        <div className={styles.lander_demo}>
            <Title title={'Training GIFs here'} />
            <img src={episodes[episode]} alt='Episodes' />
            <p>Select training episode to view</p>
            <div className={styles.lander_demo_options}>
                {mapped}
            </div>
        </div>
    )

}


const LunarLander = () => {

    const title = "Solving OpenAI's Lunar Lander Environment using Deep Q-Learning"

    return (
        <div className={styles.lunar_lander}>
            <Window row='1 / 3' column='1' tab_name='description.txt' tab_type='text_file' content={
                <>
                    <Title title={title} />
                    <p>
                        In reinforcement learning, there are usually agents that act based on their 
                        states in an environment. In this project, I explored the case of a single 
                        actor in an environment that contains states with continuous values. In standard 
                        Q-learning, the agent uses a tabular method of learning the values associated 
                        with being in a certain state and taking an action which works very well for 
                        small discrete observation spaces. However, once the observation space becomes 
                        either very large or continuous, another mechanism is needed to approximate the 
                        Q-function.

                        <br /><br />

                        Introducing a universal function approximator, the neural network! I applied 
                        a neural network for the purpose of approximating the Q-function which takes in 
                        an observation of continuous values and passes it through to 4 output nodes which 
                        denote the value of taking an action given the observation as input. Learning the 
                        correct state-action value can be difficult using a neural network for a variety of 
                        reasons and requires a few additional mechanisms to ensure proper convergence. Firstly, 
                        it is very important that data being used to train networks is independent and 
                        identically distributed (iid). This environment generates data that is sequential and 
                        highly correlated since a series of states are "connected" by the actions taken. In order 
                        to break this correlation, a memory replay is needed that will store the agents experiences 
                        which can then be sampled from randomly. When we don't do this, network weight updates will 
                        be highly biased and consistently move in the wrong direction.

                        <br /><br />

                        Another problem that arises with this method is the use of the Bellman update as the loss 
                        function for our network. The Bellman update is a key algorithm in reinforcement learning 
                        that describes the way that future rewards get propogated back to past states. This allows 
                        the agent to act in their best long term interest and not take immediately greedy actions that 
                        result in poorer long term performance. In the Bellman equation, we use the reward that we 
                        receive in the current state and add it to the value of the next highest value state. 

                    </p>
                </>
            } />
            <Window row='1' column='2' tab_name='training.py' tab_type='python_filled' content={
                <LunarLanderDemo />        
            } />
            <Window row='2' column='2' tab_name='highlights.py' tab_type='python_filled' content={
                <Title title={'Skills / Algorithms'} />
            } />
        </div>
    )
}

const SuttonRecreation = () => {

    const title = "Recreating Sutton's Temporal Difference Experiements"

    return (
        <div className={styles.sutton_recreation}>
            <Window row='1' column='1 / 3' tab_name='description.txt' tab_type='text_file' content={
                <Title title={title} />
            } />
            <Window row='2' column='1' tab_name='graphs.py' tab_type='python_filled' content={
                <Title title="Sutton's Graphs Here" />
            } />
            <Window row='2' column='2' tab_name='interactive_graphs.py' tab_type='python_filled' content={
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