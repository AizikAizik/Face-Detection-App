import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/linkform/ImageLinkForm'
import Particles from 'react-particles-js';

const particleOptions = {
        particles : {
                number : {
                        value : 250,
                        density : {
                                enable : true,
                                value_area : 800
                        }
                }
        }
}

function App() {
        return (
                <div className="App">
                        <Particles className ="particles" params ={ particleOptions }/>
                        <Navigation />
                        <Logo />
                        <Rank />
                        <ImageLinkForm />
                </div>
        );
}

export default App;