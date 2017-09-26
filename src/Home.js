import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);
    this.state = {
        closedPhoto: true,
        closedFilm: true,
    };
    this.rollPhoto = this.rollPhoto.bind(this);
    this.rollFilm = this.rollFilm.bind(this);
    //Initially, I'm gonna have a lot of methods for each p tag. I'll go back and refactor into one method that runs the method based on refs
    this.showMercedes = this.showMercedes.bind(this);
    this.showHeebie = this.showHeebie.bind(this);
    this.showCaroline = this.showCaroline.bind(this);
    this.showBeagle = this.showBeagle.bind(this);
    this.showWendy = this.showWendy.bind(this);
    this.showAmericanBF = this.showAmericanBF.bind(this);
    this.showHelmetBoy = this.showHelmetBoy.bind(this);
    this.showBeautySalon = this.showBeautySalon.bind(this);
    }
    rollPhoto = () => {
        this.setState({closedPhoto: false});
    }
    rollFilm = () => {
        this.setState({closedFilm: false});
    }
    //Individual click events
    showMercedes = () => {

    }
    showHeebie = () => {

    }
    showCaroline = () => {

    }
    showBeagle = () => {

    }
    showWendy = () => {

    }
    showAmericanBF = () => {

    }
    showHelmetBoy = () => {

    }
    showBeautySalon = () => {

    }

    render(){
        return (
            <div>
            <h1 className="title">Brian Kinnes</h1>
            <h3 className="catalog" onMouseOver = {this.rollPhoto}>Photo</h3>
                <div className={this.state.closedPhoto ? 'invisible': 'visible'}>
                    <p onClick={this.showMercedes} className="portfolioItem">Red Mercedes</p>
                    <p onClick={this.showHeebie} className="portfolioItem">Heebiejeebies</p>
                </div>
            <h3 className="catalog2" onMouseOver = {this.rollFilm}>Film</h3>
                <div className={this.state.closedFilm ? 'invisible': 'visible'}>
                    <p onClick={this.showCaroline} className="portfolioItem">Caroline</p>
                    <p onClick={this.showBeagle} className="portfolioItem">My Neighbor is a Drug Dealer</p>
                    <p onClick={this.showWendy} className="portfolioItem">Wendy</p>
                    <p onClick={this.showAmericanBF} className="portfolioItem">American Boyband</p>
                    <p onClick={this.showHelmetBoy} className="portfolioItem">Helmet Boy EP.04</p>
                    <p onClick={this.showBeautySalon} className="portfolioItem">Beauty Salon</p>
                </div>
            <h3><a className="link" href="http://blog.briankinn.es">Blog</a></h3>
            <h3><Link className="storeLink" to="/store/">Store</Link></h3>
            <h3><a className="link" href="mailto:contact@briankinn.es">Contact</a></h3>
            </div>
        )
    }
}

export default Home;