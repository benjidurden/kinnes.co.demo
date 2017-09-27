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
    }
    rollPhoto = () => {
        this.setState({closedPhoto: false});
    }
    rollFilm = () => {
        this.setState({closedFilm: false});
    }
    render(){
        return (
            <div>
            <h1 className="title">Brian Kinnes</h1>
            <h3 className="catalog" onMouseOver = {this.rollPhoto}>Photo</h3>
                <div className={this.state.closedPhoto ? 'invisible': 'visible'}>
                    <p className="portfolioItem"><Link to = "/redmercedes/">Red Mercedes</Link></p>
                    <p className="portfolioItem"><Link to = "/heebiejeebies/">Heebiejeebies</Link></p>
                </div>
            <h3 className="catalog2" onMouseOver = {this.rollFilm}>Film</h3>
                <div className={this.state.closedFilm ? 'invisible': 'visible'}>
                    <p className="portfolioItem"><Link to = "/caroline/">Caroline</Link></p>
                    <p className="portfolioItem"><Link to = "/myneighbor/">My Neighbor is a Drug Dealer</Link></p>
                    <p className="portfolioItem"><Link to ="/wendy/">Wendy</Link></p>
                    <p className="portfolioItem"><Link to = "/american-boyband/">American Boyband</Link></p>
                    <p className="portfolioItem"><Link to = "/helmet-boy/">Helmet Boy EP.04</Link></p>
                    <p className="portfolioItem"><Link to = "/beauty-salon/">Beauty Salon</Link></p>
                </div>
            <h3><a className="link" href="http://blog.briankinn.es">Blog</a></h3>
            <h3><Link className="storeLink" to="/store/">Store</Link></h3>
            <h3><a className="link" href="mailto:contact@briankinn.es">Contact</a></h3>
            </div>
        )
    }
}

export default Home;