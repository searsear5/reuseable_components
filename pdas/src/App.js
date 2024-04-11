import Profilecard from './Profilecard'
import imgAlexa from './images/alexa.png'
import imgCortana from './images/cortana.png'
import imgSiri from './images/siri.png'

function App() {

    return (
        <div>
            <h1>Personal Digital Assistants</h1>
            <Profilecard title={"Alexa"} handle={"@alex99"} img={imgAlexa} />
            <Profilecard title={"Cortana"} handle={"@cortana23"} img={imgCortana} />
            <Profilecard title={"Siri"} handle={"@siri101"} img={imgSiri} />
        </div>
    )
}

export default App