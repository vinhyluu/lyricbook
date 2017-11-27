import React from 'react';
import ReactDOM from 'react-dom';
import SongForm from './SongForm';
import DisplaySong from './DisplaySong';

const config = {
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
  }

  componentDidMount() {
    const dbRef = firebase.database().ref()

    dbRef.on("value", (firebaseData) => {
      const songsArray = [];
      const songsData = firebaseData.val();

      for (let category in songsData) {
        // console.log(songsData[category])
        for(let title in songsData[category]){
          songsArray.push({
            title: title,
            date: songsData[category][title].date,
            lyrics: songsData[category][title].lyrics
          })
        }
      }
      //add a key category so that in displaysong you can see the category as well -- do this after bootcamp

      this.setState({
        songs: songsArray
      })
    });
  }

  //I removed this code because this is only relevant for local storage like in the to do app example
  // addSongItem(addSong) {
  //   const newSongs = Array.from(this.state.songs)
  //   newSongs.push(addSong);
  //   this.setState({
  //     songs: newSongs
  //   })
  // }


  render() {
    return (
      <div className="wrapper">
        <div className="mainContainer">
          <h1>LyricBook</h1>
          <SongForm />
          <div>
            {this.state.songs.map((song, i) => {
              // console.log(this.state.songs);
              return <DisplaySong title={song.title} lyrics={song.lyrics} date={song.date} key={i} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

    // return <div className="storedLyrics">
    //           <div>{this.props.data}</div>
    //        </div>
    //     }
    //   }

ReactDOM.render(<App />, document.getElementById('app'));