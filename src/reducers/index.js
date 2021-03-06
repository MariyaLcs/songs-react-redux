import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "First Song", duration: "4:05" },
    { title: "Second Song", duration: "4:15" },
    { title: "Third Song", duration: "4:25" },
    { title: "Fourth Song", duration: "4:35" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
