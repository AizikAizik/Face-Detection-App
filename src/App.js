import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/linkform/ImageLinkForm'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import FaceRecognition from './components/facerecognition/FacaRecognition'

const particleOptions = {
        particles: {
                number: {
                        value: 200,
                        density: {
                                enable: true,
                                value_area: 800
                        }
                }
        }
}

const app = new Clarifai.App({
        apiKey : "3abddf73648e4bcba4dfe007069541c5"
})

class App extends React.Component {
        constructor(props) {
                super(props)

                this.state = {
                        input : "",
                        imageURL : ""
                }
        }

        onInputChange = (event) =>{
                this.setState({ input : event.target.value })
        }

        onButtonDetect = () =>{
                this.setState({ imageURL : this.state.input })
                app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err) {
      // there was an error
    }
  );
        }

        render() {
                return (
                        <div className="App">
                                <Particles className="particles" params={particleOptions} />
                                <Navigation />
                                <Logo />
                                <Rank />
                                <ImageLinkForm  onInputChange = { this.onInputChange } onButtonDetect = { this.onButtonDetect }/>
                                <FaceRecognition imageURL = { this.state.imageURL }/>
                        </div>
                );
        }


}

export default App;