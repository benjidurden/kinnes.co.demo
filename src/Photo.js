import React, {Component} from 'react';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageName:  "",
            videoName: "",
        };
    this.newMercedes = this.newMercedes.bind(this);
    this.kinnesShirt = this.kinnesShirt.bind(this);
    this.showCaroline = this.showCaroline.bind(this);
    this.showMVC = this.showMVC.bind(this);
    }

    newMercedes = () => {
    this.setState({
        imageName:  "RedMercedes"
    });
    }

    kinnesShirt = () => {
    this.setState({
        imageName: "Shirt"
    });
    }

    showCaroline = () => {
    this.setState({
        videoName: "Caroline"

    });
    }

    showMVC = () => {
    this.setState({
        videoName: "MVC"
    });
    }

    render(){
        //Conditional Rendering
        //Can I write a conditional that checks if the imgName or the videoname != "" then another conditional that checks for the name and updates it with the info
        var content = null;
        var assignedImgName = this.state.imageName;
        var assignedVideoName = this.state.videoName;
        //picture conditional - soon to be a video conditional
        if(assignedImgName || assignedVideoName !== ""){
        if (assignedImgName === "RedMercedes"){
            //Aren't img tags self-closing?
            content = <img src="http://www.sfgalleries.net/art/sf3/sf3-3soe/avatars/sf33soe-avatar-yun.png" alt="yun" />;
        }
        else if (assignedImgName === "Shirt"){
            content = <img src="https://cdn.shopify.com/s/files/1/0748/3745/products/SFIII_3S_balltop_0008_Ken_grande.jpg?v=1422674952" alt="ken-masters" />;
        }
        else if (assignedVideoName === "Caroline"){
            content = <iframe width="560" height="315" src="https://www.youtube.com/embed/3j8ecF8Wt4E" title="Caroline" frameBorder="0" allowFullScreen></iframe>;
        }
        else if (assignedVideoName === "MVC"){
            content = <iframe width="560" height="315" src="https://www.youtube.com/embed/yPjjnfGKrPc" title="MVC" frameBorder="0" allowFullScreen></iframe>
        }
    }

        return (
            <div>
            <h1>Testing ground for Home page photos</h1>
            {/* On click - this button will change the SRC of the img below */}
            <h3 onClick={this.newMercedes}>Red Mercedes</h3>
            <h3 onClick={this.kinnesShirt}>Shirt</h3>
            <h3 onClick={this.showCaroline}>Caroline</h3>
            <h3 onClick={this.showMVC}>MVC, anyone?</h3>
            {content}
            </div>
        )
    }
}

export default Photo;