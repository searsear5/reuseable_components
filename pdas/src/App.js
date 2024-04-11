import 'bulma/css/bulma.css'
import Profilecard from './Profilecard'
import imgAlexa from './images/alexa.png'
import imgCortana from './images/cortana.png'
import imgSiri from './images/siri.png'

function App() {

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <Profilecard
                                title={"Alexa"}
                                handle={"@alex99"}
                                img={imgAlexa}
                                description={"Alexa was created by Amazon and helps you buy things."} />
                        </div>
                        <div className='column is-4'>
                            <Profilecard
                                title={"Cortana"}
                                handle={"@cortana23"}
                                img={imgCortana}
                                description={"Cortana was made by Microsoft. who knows what it does"} />
                        </div>
                        <div className='column is-4'>
                            <Profilecard
                                title={"Siri"}
                                handle={"@siri101"}
                                img={imgSiri}
                                description={"Siri was made by Apple and is being phased out."} />
                        </div>
                    </div>
                </section>
            </div>



        </div>
    )
}

export default App