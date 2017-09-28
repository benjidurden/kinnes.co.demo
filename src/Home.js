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
            photoTitle = <h4>AMINÉ - REDMERCEDES</h4>;
            photoDescription = <h4>SINGLE</h4>;
            currentPhoto = <img src="https://res.cloudinary.com/benjidurden/image/upload/v1506458553/b2fcba2db9cc8eace656aa81500c005e.1000x936x1_leg1om.jpg" className="aminePhoto" alt="Red Mercedes Cover" />;
            break;
        case "/heebiejeebies/":
            photoTitle = <h4>AMINÉ FEAT. KEHLANI - HEEBIEJEEBIES</h4>; 
            photoDescription = <h4>SINGLE</h4>;
            currentPhoto = <img src="https://res.cloudinary.com/benjidurden/image/upload/v1506458549/akeemofzamunda-amine-kehlani-heebiejeebies-0_rzl3bz.jpg" className="aminePhoto" alt="HeebieJeebies Cover"/>;
            break;
        case "/caroline/":
            filmTitle = <h4>AMINÉ - CAROLINE</h4>;
            filmType = <p>MUSIC VIDEO</p>;
            currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/3j8ecF8Wt4E?rel=0" frameBorder="0" title="caroline" allowFullScreen></iframe>;
            productionRole = <p>CREATIVE DIRECTION & WRITING: BRIAN KINNES</p>
            break;
        case "/myneighbor/":
            filmTitle = <h4>BEAGLES - MY NEIGHBOR IS A DRUG DEALER</h4>;
            filmType = <p>MUSIC VIDEO</p>
            currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/j3PqNsHPvQg?rel=0" frameBorder="0" allowFullScreen title="beagles"></iframe>;
            productionRole = <p>DIRECTOR & DIRECTOR OF PHOTOGRAPHY: BRIAN KINNES</p>
            break;
        case "/wendy/":
            filmTitle = <h4>RICHIE WOODS - WENDY</h4>;
            filmType = <p>MUSIC VIDEO</p>
            currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/CMNa2xlG3GQ?rel=0" frameBorder="0" allowFullScreen title="wendy"></iframe>;
            productionRole = <p>DIRECTOR & DIRECTOR OF PHOTOGRAPHY: BRIAN KINNES</p>;
            break;
        case "/american-boyband/":
            filmTitle = <h4>AMERICAN BOYBAND with Kevin Abstract</h4>;
            filmType = <p>VICELAND Series</p>;
            currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/DBDhBeG1tJY?rel=0" frameBorder="0" title="american-boyband" allowFullScreen></iframe>
            productionRole = <p>CAST & ADDITIONAL PHOTOGRAPHY: BRIAN KINNES</p>
            break;
        case "/helmet-boy/":
            filmTitle = <h4>HELMET BOY EPISODE 4</h4>;
            filmType = <p>MINI-SERIES</p>;
            currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/YyPxFav9Tg8?rel=0" frameBorder="0" title="helmet_boy" allowFullScreen></iframe>;
            productionRole = <p>DIRECTOR: BRIAN KINNES</p>
            break;
        case "/beauty-salon/":
            filmTitle = <h4>FOX ACADEMY - BEAUTY SALON</h4>;
            filmType = <p>MUSIC VIDEO</p>;
            currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/FVW3XfDmcsw?rel=0" frameBorder="0" allowFullScreen title="beauty_salon"></iframe>
            productionRole = <p>DIRECTOR & DIRECTOR OF PHOTOGRAPHY: BRIAN KINNES</p>
            break;
        default:
            break;
        }

        return (
            <div>
            <h1 className="title">Brian Kinnes</h1>
            <h3 className="catalog" onMouseOver = {this.rollPhoto}>Photo</h3>
                <div className={this.state.closedPhoto ? 'invisible': 'visible'}>
                    <p className="portfolioItem"><Link className="removeStyling" to = "/redmercedes/">Red Mercedes</Link></p>
                    <p className="portfolioItem"><Link className="removeStyling" to = "/heebiejeebies/">Heebiejeebies</Link></p>
                </div>
            <h3 className="catalog2" onMouseOver = {this.rollFilm}>Film</h3>
                <div className={this.state.closedFilm ? 'invisible': 'visible'}>
                    <p className="portfolioItem"><Link className="removeStyling" to = "/caroline/">Caroline</Link></p>
                    <p className="portfolioItem"><Link className="removeStyling" to = "/myneighbor/">My Neighbor is a Drug Dealer</Link></p>
                    <p className="portfolioItem"><Link className="removeStyling" to ="/wendy/">Wendy</Link></p>
                    <p className="portfolioItem"><Link className="removeStyling" to = "/american-boyband/">American Boyband</Link></p>
                    <p className="portfolioItem"><Link className="removeStyling" to = "/helmet-boy/">Helmet Boy Episode 4</Link></p>
                    <p className="portfolioItem"><Link className="removeStyling" to = "/beauty-salon/">Beauty Salon</Link></p>
                </div>
            <h3><a className="link" href="http://blog.briankinn.es">Blog</a></h3>
            <h3><Link className="storeLink" to="/store/">Store</Link></h3>
            <h3><a className="link" href="mailto:contact@briankinn.es">Contact</a></h3>
            {/* Photography Section Info */}
            {photoTitle}
            {photoDescription}
            {currentPhoto}
            {/* Film Section Info*/}
            {filmTitle}
            {filmType}
            {currentVideo}
            {productionRole}
            </div>
        )
    }
}

export default Home;