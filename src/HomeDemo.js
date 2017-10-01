import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomeDemo extends Component {
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
        //Conditional Rendering. Choosing what info the component renders - based on what URL it is served.

        //Setting the null values
        //Photography Nulls
        var currentPhoto = null;
        var photoTitle = null;
        var photoDescription = null;
        //Video Nulls
        var filmTitle = null;
        var filmType = null;
        var currentVideo = null;
        var productionRole = null;
        //Rendering the photo URLs.
        var locationChecker = this.props.location.pathname;
        switch(locationChecker){
        case "/redmercedes/":
            photoTitle = <h4 className="photoTitle">AMINÉ - REDMERCEDES</h4>;
            photoDescription = <h4 className="photoDescription">SINGLE</h4>;
            currentPhoto = <img src="https://res.cloudinary.com/benjidurden/image/upload/v1506458553/b2fcba2db9cc8eace656aa81500c005e.1000x936x1_leg1om.jpg" className= {this.state.closedPhoto && this.state.closedFilm ? "currentPhoto" : "fixCurrentPhoto"} alt="Red Mercedes Cover" />;
            break;
        case "/heebiejeebies/":
            photoTitle = <h4 className = "photoTitle">AMINÉ FEAT. KEHLANI - HEEBIEJEEBIES</h4>; 
            photoDescription = <h4>SINGLE</h4>;
            // currentPhoto = <img src="https://res.cloudinary.com/benjidurden/image/upload/v1506458549/akeemofzamunda-amine-kehlani-heebiejeebies-0_rzl3bz.jpg" className= {this.state.closedPhoto && this.state.closedFilm ? "currentPhoto" : "fixCurrentPhoto"} alt="HeebieJeebies Cover"/>;
            currentPhoto = <img src="https://res.cloudinary.com/benjidurden/image/upload/v1506458549/akeemofzamunda-amine-kehlani-heebiejeebies-0_rzl3bz.jpg" className="currentPhoto" alt="HeebieJeebies Cover"/>;
            break;
        case "/caroline/":
            filmTitle = <h4 className = "filmTitle">AMINÉ - CAROLINE</h4>;
            filmType = <p className = "filmType">MUSIC VIDEO</p>;
            currentVideo = <iframe className = "currentVideo" width="560" height="315" src="https://www.youtube.com/embed/3j8ecF8Wt4E?rel=0" frameBorder="0" title="caroline" allowFullScreen></iframe>;
            productionRole = <p className = "productionRole">CREATIVE DIRECTION & WRITING: BRIAN KINNES</p>
            break;
        case "/myneighbor/":
            filmTitle = <h4 className = "filmTitle">BEAGLES - MY NEIGHBOR IS A DRUG DEALER</h4>;
            filmType = <p className = "filmType">MUSIC VIDEO</p>
            currentVideo = <iframe className = "currentVideo" width="560" height="315" src="https://www.youtube.com/embed/j3PqNsHPvQg?rel=0" frameBorder="0" allowFullScreen title="beagles"></iframe>;
            productionRole = <p className = "productionRole">DIRECTOR & DIRECTOR OF PHOTOGRAPHY: BRIAN KINNES</p>
            break;
        case "/wendy/":
            filmTitle = <h4 className = "filmTitle">RICHIE WOODS - WENDY</h4>;
            filmType = <p className = "filmType">MUSIC VIDEO</p>
            currentVideo = <iframe className = "currentVideo" width="560" height="315" src="https://www.youtube.com/embed/CMNa2xlG3GQ?rel=0" frameBorder="0" allowFullScreen title="wendy"></iframe>;
            productionRole = <p className = "productionRole">DIRECTOR & DIRECTOR OF PHOTOGRAPHY: BRIAN KINNES</p>;
            break;
        case "/american-boyband/":
            filmTitle = <h4 className = "filmTitle">AMERICAN BOYBAND with Kevin Abstract</h4>;
            filmType = <p className = "filmType">VICELAND Series</p>;
            currentVideo = <iframe className = "currentVideo" width="560" height="315" src="https://www.youtube.com/embed/DBDhBeG1tJY?rel=0" frameBorder="0" title="american-boyband" allowFullScreen></iframe>
            productionRole = <p className = "productionRole">CAST & ADDITIONAL PHOTOGRAPHY: BRIAN KINNES</p>
            break;
        case "/helmet-boy/":
            filmTitle = <h4 className = "filmTitle">HELMET BOY EPISODE 4</h4>;
            filmType = <p className = "filmType">MINI-SERIES</p>;
            currentVideo = <iframe className = "currentVideo" width="560" height="315" src="https://www.youtube.com/embed/YyPxFav9Tg8?rel=0" frameBorder="0" title="helmet_boy" allowFullScreen></iframe>;
            productionRole = <p className = "productionRole">DIRECTOR: BRIAN KINNES</p>
            break;
        case "/beauty-salon/":
            filmTitle = <h4 className = "filmTitle">FOX ACADEMY - BEAUTY SALON</h4>;
            filmType = <p className = "filmType">MUSIC VIDEO</p>;
            currentVideo = <iframe className = "currentVideo" width="560" height="315" src="https://www.youtube.com/embed/FVW3XfDmcsw?rel=0" frameBorder="0" allowFullScreen title="beauty_salon"></iframe>
            productionRole = <p className = "productionRole">DIRECTOR & DIRECTOR OF PHOTOGRAPHY: BRIAN KINNES</p>
            break;
        default:
            break;
        }

        return (
            <div className = "homeContainer">
            <h1 className="title">Brian Kinnes</h1>
            <ul className="catalog" onMouseOver = {this.rollPhoto}>Photo
                <div className={this.state.closedPhoto ? 'invisible': 'visible'}>
                    <li className="portfolioItem"><Link className="removeStyling" to = "/redmercedes/">Red Mercedes</Link></li>
                    <li className="portfolioItem"><Link className="removeStyling" to = "/heebiejeebies/">Heebiejeebies</Link></li>
                </div>
            </ul>
            <ul className="catalog2" onMouseOver = {this.rollFilm}>Film
                <div className={this.state.closedFilm ? 'invisible': 'visible'}>
                    <li className="portfolioItem"><Link className="removeStyling" to = "/caroline/">Caroline</Link></li>
                    <li className="portfolioItem"><Link className="removeStyling" to = "/myneighbor/">My Neighbor is a Drug Dealer</Link></li>
                    <li className="portfolioItem"><Link className="removeStyling" to ="/wendy/">Wendy</Link></li>
                    <li className="portfolioItem"><Link className="removeStyling" to = "/american-boyband/">American Boyband</Link></li>
                    <li className="portfolioItem"><Link className="removeStyling" to = "/helmet-boy/">Helmet Boy Episode 4</Link></li>
                    <li className="portfolioItem"><Link className="removeStyling" to = "/beauty-salon/">Beauty Salon</Link></li>
                </div>
                </ul>
            <ul>
            <li><a className="link" href="http://blog.briankinn.es">Blog</a></li>
            <li><Link className="storeLink" to="/store/">Store</Link></li>
            <li><a className="link" href="mailto:contact@briankinn.es">Contact</a></li>
            </ul>
            {/* Photography Section Info */}
            {currentPhoto}
            {photoTitle}
            {photoDescription}
            {/* Film Section Info*/}
            {filmTitle}
            {filmType}
            {currentVideo}
            {productionRole}
            </div>
        )
    }
}

export default HomeDemo;