import React from "react";
import ReactDOM from "react-dom";
import Himesphere from "./HemisphereDispaly";
class App extends React.Component {
    state = { latitude: null, errorMassege: '' }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            (error) => {
                this.setState({ errorMassege: error.message })
            }
        );
    }

    render() {
        if (this.state.errorMassege && !this.state.latitude) {
            return <div>{this.state.errorMassege}</div>
        }
        if (!this.state.errorMassege && this.state.latitude) {
            return <div><Himesphere latitude={this.state.latitude} /></div>
        }
        else {
            return <div>Loading...</div>
        }
    }
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)