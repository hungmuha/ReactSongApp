import React from 'react';
//using {} for named export 
import {selectSong} from '../actions';
import SongList from './SongList';

const App = () =>{
    return (
        <div>
            <SongList/>
        </div>
    );
};

export default App;