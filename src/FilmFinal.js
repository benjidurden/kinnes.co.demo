import React, {Component} from 'react';

class FilmFinal extends Component {
    render(){
        var currentVideo = null;
        var filmPath = this.props.location.pathname;
        // What comparison operator does a switch statement use? is it == or ===? can this be changed?
        switch (filmPath) {
        case "/caroline/":
        currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/3j8ecF8Wt4E?rel=0" frameBorder="0" title="caroline" allowFullScreen></iframe>;
            break;
        case "/myneighbor/":
        currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/j3PqNsHPvQg?rel=0" frameBorder="0" allowFullScreen title="beagles"></iframe>;
            break;
        case "/wendy/":
        currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/CMNa2xlG3GQ?rel=0" frameBorder="0" allowFullScreen title="wendy"></iframe>;
            break;
        case "/american-boyband/":
        currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/DBDhBeG1tJY?rel=0" frameBorder="0" title="american-boyband" allowFullScreen></iframe>
            break;
        case "/helmet-boy/":
        currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/YyPxFav9Tg8?rel=0" frameBorder="0" title="helmet_boy" allowFullScreen></iframe>;
            break;
        case "/beauty-salon/":
        currentVideo = <iframe width="560" height="315" src="https://www.youtube.com/embed/FVW3XfDmcsw?rel=0" frameBorder="0" allowFullScreen title="beauty_salon"></iframe>
            break;
        default:
            break;
        }


        return (
            <div>
            <h1>Final film page</h1>
            <p>Add a video title property and pass that as well!</p>
            <p>Ask Brian what info I should put in</p>
            {currentVideo}
            </div>
        )
    }
}


export default FilmFinal;