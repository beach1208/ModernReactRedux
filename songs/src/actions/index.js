// action creator
//export many functions by writing export before const name
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

