import React from 'react';
import {connect} from 'react-redux';

class SongList extends React.Component {
    render(){
        console.log(this.props);
        return <div>SongList</div>
    }
};

//convention name for this function, state are all the state in redux that we are tracking
const mapStateToProps = state =>{
    return {song: state.songs};
}

export default connect(mapStateToProps)(SongList);