import React from 'react'
import {connect} from 'react-redux'



const SongDetail=(props)=>{
    console.log(props,"propssss")
    if(!props.song){
    return <div><h1>Select a song</h1></div>
    }
    return(
        <div>
            <h2><iframe src={props.song.url}
                        width="250px"
                        height="150px"
                        id="myId"
                        display="initial"
                        position="relative"/></h2>
            <h3>Details for:</h3>
            <p>Tittle:{props.song.title}</p>
            <p>Duration:{props.song.duration}</p>
        </div>
    ) 
}

const mapStateToProps=(state)=>{
    return {song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);