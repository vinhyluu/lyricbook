import React from 'react';
import ReactDOM from 'react-dom';

class SongForm extends React.Component {
    constructor() {
        super();
        this.state = {
            currentLyrics: "",
            currentGenre: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOption = this.handleOption.bind(this);
    }
    handleChange(e) {
        // console.log(e.target.value);
        this.setState({
            currentLyrics: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.submitForm(this.state.currentLyrics) 

        this.setState({
            currentLyrics: ""
        });

        // const dbRef = firebase.database().ref();
        const dbRef = firebase.database().ref(this.state.currentGenre);
        dbRef.push(this.state.currentLyrics);
    }

    handleOption(e){
        this.setState({
            currentGenre: e.target.value,
        })
    }

    render() {
        return (
            <div className="formContainer">
                <form action="" onSubmit={this.handleSubmit}>
                    <select name="songChoices" onChange={this.handleOption}>
                        <option value="love">Love</option>
                        <option value="sad">Lust</option>
                        <option value="separation">Separation</option>
                        <option value="random">Random</option>
                    </select>
                    
                    <div className="textContainer"> 
                        <textarea name="message" value={this.state.currentLyrics} onChange={this.handleChange} required></textarea>    
                    </div>             
                    
                    <div className="submitContainer">
                        <input type="submit" className="submitButton"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SongForm 