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
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }
    handleChange(e) {
        this.setState({
            currentLyrics: e.target.value
        })
    }

    handleTitle(e){
        this.setState({
            currentTitle: e.target.value
        })
    }

    handleDate(e){
        this.setState({
            currentDate: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.submitForm(this.state.handleDate),
        this.props.submitForm(this.state.currentTitle),
        this.props.submitForm(this.state.currentLyrics),

        this.setState({
            currentLyrics: "",
            currentTitle: "",
            currentDate: "",
        });

        // const dbRef = firebase.database().ref();
        let song = {
            date: this.state.currentDate,
            lyrics: this.state.currentLyrics
        }

        firebase.database().ref(`${this.state.currentGenre}/${this.state.currentTitle}`).set(song);
    }

    handleOption(e){
        this.setState({
            currentGenre: e.target.value,
        })
    }

    render() {
        return (
            <div className="appContainer">
                <div className="formContainer">
                    <form action="" onSubmit={this.handleSubmit}>
                        <select name="songChoices" onChange={this.handleOption}>
                            <option value="love">Love</option>
                            <option value="lust">Lust</option>
                            <option value="separation">Separation</option>
                            <option value="random">Random</option>
                        </select>
                        
                        <div className="textContainer"> 
                            <div>
                                <textarea className="dateBox" name="date" value={this.state.currentDate} onChange={this.handleDate} required>Date: </textarea> 
                                <textarea className="titleBox" name="title" value={this.state.currentTitle} onChange={this.handleTitle} required>Title: </textarea>
                            </div>
                            <div>
                                <textarea className="lyricBox" name="message" value={this.state.currentLyrics} onChange={this.handleChange} required></textarea>   
                            </div> 
                        </div>             
                        
                        <div className="submitContainer">
                            <input type="submit" className="submitButton"></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SongForm 