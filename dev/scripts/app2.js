import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            songs: ""
        }

        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addItem(e) {

    }

    render() {
        return (
            <div>
                <div>
                    <h1>LyricBook</h1>
                </div>

                <div>
                    <form action="" onSubmit={this.handleSubmit}>
                        <select name="songChoices">
                            <option value="love">Love</option>
                            <option value="sad">Lust</option>
                            <option value="separation">Separation</option>
                            <option value="random">Random</option>
                        </select>
                        <textarea name="message" value={this.state.currentSong} onChange={this.handleChange}></textarea>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));












// import React from 'react';
// import ReactDOM from 'react-dom';
// // import SongForm from './searchbox';

// var config = {
//     apiKey: "AIzaSyD3UAahOn--1beUuadqzIK6mAr7DsjjTD0",
//     authDomain: "project-5-13be9.firebaseapp.com",
//     databaseURL: "https://project-5-13be9.firebaseio.com",
//     projectId: "project-5-13be9",
//     storageBucket: "project-5-13be9.appspot.com",
//     messagingSenderId: "247419288021"
// };
// firebase.initializeApp(config);

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             songs: []
//             //songs will append into this list 
//         }
//         this.addSongItem = this.addSongItem.bind(this);
//     }

//     addSongItem(addSong) {
//         console.log(addSong);
//         const newState = Array.from(this.state.songs)
//         newState.push(addSong);
//         this.setState({
//             songs: newState
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>LyricBook</h1>
//                 <SongForm submitForm={this.addSongItem} />
//                 <div>
//                     {this.state.songs.map((hello) => {
//                         return <DisplaySong item={hello} />
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }

// class DisplaySong extends React.Component {
//     render() {
//         return <div>{this.props.item}</div>
//     }
// }

// class SongForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             currentSong: ""
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     componentDidMount() {
//         const dbRef = firebase.database().ref();

//         dbRef.on("value", (firebaseData) => {
//             const itemsArray = [];
//             const itemsData = firebaseData.val();

//             for (let itemKey in itemsData) {
//                 itemsArray.push(itemsData[itemKey])
//             }
//             this.setState({
//                 items: itemsArray
//             })
//         })
//     }

//     handleChange(e) {
//         console.log(e.target.value);
//         this.setState({
//             currentSong: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.submitForm(this.state.currentSong)
//         // change this line of code to ensure that it does not display automatically on the page
//         // maybe move this line of code into componentdIDmoUNT

//         this.setState({
//             currentSong: ""
//         });
//         const dbRef = firebase.database().ref();
//         dbRef.push(this.state.currentSong);
//     }

//     render() {
//         return (
//             <form action="" onSubmit={this.handleSubmit}>
//                 <select name="songChoices">
//                     <option value="love">Love</option>
//                     <option value="sad">Lust</option>
//                     <option value="separation">Separation</option>
//                     <option value="random">Random</option>
//                 </select>
//                 <textarea name="message" value={this.state.currentSong} onChange={this.handleChange}></textarea>
//                 <input type="submit"></input>

//                 {/* {Object.keys(this.state.currentArray.map((songs) => {
//         console.log(songs)
//         return (
//           PUT CODE IN HERE JSX
//         )
//       }))} */}

//             </form>
//         )
//     }
// }



// ReactDOM.render(<App />, document.getElementById('app'));