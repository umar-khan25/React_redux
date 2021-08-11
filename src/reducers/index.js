import { combineReducers } from "redux";

const songsReducer=()=>{
    return[
         {title:'Fallin' ,duration:'4:05',url:"https://www.youtube.com/embed/FS9cIWXVSY0"},        
         {title:'All star' ,duration:'3:50',url:"https://www.youtube.com/embed/yvOh7vVqlaE"},
         {title:'Dancing in the dark' ,duration:'3:37',url: "https://www.youtube.com/embed/K3Qzzggn--s"},
         {title:'Mood' ,duration:'3:12',url: "https://www.youtube.com/embed/qJqPpl3jvSs"},
    ]
}

const selectedSongReducer=(selectedSong=null, action)=>{
if(action.type==='Song_Selected'){
    return action.payload;
}
return selectedSong

}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})