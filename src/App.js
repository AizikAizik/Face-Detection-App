import React from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/linkform/ImageLinkForm'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import FaceRecognition from './components/facerecognition/FacaRecognition'
import SignIn from "./components/registeration/SignIn"
import Register from "./components/registeration/Register"

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
    apiKey: "3abddf73648e4bcba4dfe007069541c5"
})

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
            imageURL: "",
            box: {},
            route: "signin",
            isSignedIn : false
        }
    }

    calculateFaceLocation = (data) => {
        const faces = data.outputs[0].data.regions[0].region_info.bounding_box
        const image = document.getElementById("input-image")
        const width = Number(image.width)
        const height = Number(image.height)

        console.log(width, height)

        return {
            leftCol: faces.left_col * width,
            topRow: faces.top_row * height,
            rightCol: width - (faces.right_col * width),
            bottomRow: height - (faces.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        console.log(box)
        this.setState({box: box})
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value})
    }

    onButtonDetect = () => {
        this.setState({imageURL: this.state.input})
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
            (response) => {
                // do something with response
                console.log(response)
                console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
                this.displayFaceBox(this.calculateFaceLocation(response))
            })
            .catch(err => {
                    // there was an error
                    console.log(err)
                }
            )
    }

    onRouteChange = (routetext) => {
        if(routetext === "signout"){
            this.setState({ isSignedIn : false })
        } else if(routetext === "home"){
            this.setState({ isSignedIn : true })
        }
        this.setState( {route :  routetext} )
    }


    render() {
        const {isSignedIn, route, imageURL, box} = this.state
        return (
            <div className="App">
                <Particles className="particles" params={particleOptions}/>
                <Navigation onRouteChange= { this.onRouteChange }  isSignedIn={ isSignedIn } />
                {
                    route === "home" ?
                        (
                            <div>
                                <Logo/>
                                <Rank/>
                                <ImageLinkForm onInputChange={this.onInputChange} onButtonDetect={this.onButtonDetect}/>
                                <FaceRecognition box={box} imageURL={imageURL}/>
                            </div>
                        ) : ( route === "signin" ) ?
                        <SignIn onRouteChange={this.onRouteChange}/>
                        : <Register onRouteChange={this.onRouteChange} />
                }
            </div>
        )
    }
}

export default App