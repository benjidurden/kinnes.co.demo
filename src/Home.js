import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render(){
        return (
            <div>
            <h1>Brian Kin·nes</h1>
            <h3>/'kinniss/</h3>
            <h5>A photographer and cinematographer, who currently resides in Portland, Oregon.</h5>
            <Link to = "/works/">Works</Link>
            <Link to = "/thoughts/">Thoughts</Link>
            <Link to = "/contact/">Contact</Link>
            </div>
        )
    }
}

export default Home;