import React from 'react';
import ReactDOM from 'react-dom';
import SongForm from './SongForm';

var config = {
  apiKey: "AIzaSyD3UAahOn--1beUuadqzIK6mAr7DsjjTD0",
  authDomain: "project-5-13be9.firebaseapp.com",
  databaseURL: "https://project-5-13be9.firebaseio.com",
  projectId: "project-5-13be9",
  storageBucket: "project-5-13be9.appspot.com",
  messagingSenderId: "247419288021"
};
firebase.initializeApp(config);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: []
    }
    this.addSongItem = this.addSongItem.bind(this);
  }

  componentDidMount() {
    const dbRef = firebase.database().ref()

    dbRef.on("value", (firebaseData) => {
      const songsArray = [];
      const songsData = firebaseData.val();

      for (let itemKey in songsData) {
        // console.log(songsData[itemKey]);
        songsArray.push(songsData[itemKey])
        
        
        //instead of pushing the value pushing an object that has key names and then a data property of the data you wanted 
        //or a nested for in loop 

        // {
        //   data: ['dasdf','dsaa'],
        //   key: 'love'
        // }

        // for (let itemKey in songsData) {
        //   // console.log(songsData[itemKey]);
        //   console.log(songsData);
        //   songsArray.push(songsData[itemKey]) ORIGINAL*********
      }

      this.setState({
        songs: songsArray
      })
    });
  }

  addSongItem(addSong) {
    // console.log(addSong);
    const newState = Array.from(this.state.songs)
    newState.push(addSong);
    this.setState({
      songs: newState
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="mainContainer">
            <h1>LyricBook</h1>
            <SongForm submitForm={this.addSongItem} />
          <div>
            {this.state.songs.map((song, i) => {
              return <DisplaySong data={song} key={i} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

class DisplaySong extends React.Component {
  render() {
    if(typeof this.props.data==="object"){
      return <li></li>
    }
    return <div className="storedLyrics">{this.props.data}</div>
  }
}

//objectkeys, for in loop or in coponent did mount 
ReactDOM.render(<App />, document.getElementById('app'));