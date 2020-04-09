import React, { Component } from 'react';

let images = [
    './images/dog1.jpg',
    './images/dog2.jpg',
    './images/dog3.jpg',
    './images/dog4.jpg',
    './images/dog5.jpg',
    './images/dog6.jpg',
    './images/dog7.jpg',
    './images/dog8.jpg',
    './images/dog9.jpg',
    './images/dog10.jpg',
];

let names = [
    'Joe Mama',
    'Master Splinter',
    'Battle',
    'Roamin',
    'Brando',
    'Griffy',
    'Kevin Spacey',
    'Val Kilmer',
    'Natalie Portman',
    'Robert DeNiro',
]

let times = [
    'Last Seen 2 days ago',
    'Last Seen 4 hours ago',
    'Last Seen 5 minutes ago',
    'Last Seen 2 seconds ago',
    'Last Seen 2 lightyears ago',
    'Last Seen pre-COVID-19',
    'Last Seen under your bed',
    'Last Seen stealing a T.V',
    'Last Seen begging for attention',
    'Last Seen 8 days ago',
    'Last Seen 9 days ago',
    'Last Seen 3 days ago',
];

class Dogs extends Component {
    constructor() {
        super();
        this.state = {
            image: './images/dog1.jpg',
            name: 'Mike Overly',
            time: 'Last Seen ordering dinner'
        };
    }

    randomImg = () => {
        this.setState({ image: images[Math.floor(Math.random() * 10)] });
        this.setState({ name: names[Math.floor(Math.random() * 10)] });
        this.setState({ time: times[Math.floor(Math.random() * 10)] });
    };

    render() {
        return (
            <div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div class='ui card'>
                        <a class='image' href='/'>
                            <img src={this.state.image} alt='...' />
                        </a>
                        <div class='content'>
                            <a class='header' href='/'>
                                {this.state.name}
                            </a>
                            <div class='meta'>
                                <p>{this.state.time}</p>
                            </div>
                        </div>
                        <button
                            className='ui black button'
                            onClick={this.randomImg}
                        >
                            Randomize
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dogs;
