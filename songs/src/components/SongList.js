import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

//map over songs list
    renderList(){
        return this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
                        Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        // this.props = {songs: state.songs};
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

//always get state as a first argument and return objects
const mapStateToProps = ( state ) => {
    return {songs: state.songs};
}

export default connect(mapStateToProps)(SongList);