import React, {Component} from 'react';

class FilmFinal extends Component {
    render(){
        var filmTitle = null;
        var filmType = null;
        var currentVideo = null;
        var productionRole = null;
        var filmPath = this.props.location.pathname;
        // What comparison operator does a switch statement use? is it == or ===? can this be changed?
        switch (filmPath) {
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
            {filmTitle}
            {filmType}
            {currentVideo}
            {productionRole}
            </div>
        )
    }
}


export default FilmFinal;