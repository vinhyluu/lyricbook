import React from 'react';
import ReactDOM from 'react-dom';

class DisplaySong extends React.Component {
    render() {
            return <div className="lyricContainer">
                <div className="finalLyric">
                    <h2 className="categoryText">Category: {this.props.category}</h2>
                    <h2 className="dateText">{this.props.date}</h2>
                    <h3 className="titleText">{this.props.title}</h3>
                    <div>{this.props.lyrics}</div>
                </div>
            </div>
            }
        }
        
    


export default DisplaySong 