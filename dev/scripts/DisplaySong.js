import React from 'react';
import ReactDOM from 'react-dom';

class DisplaySong extends React.Component {
    render() {
            return <div className="lyricContainer">
                <div className="finalLyric">
                    <h2>{this.props.date}</h2>
                    <h3>{this.props.title}</h3>
                    <div>{this.props.lyrics}</div>
                </div>
            </div>
            }
        }
        
    


export default DisplaySong 