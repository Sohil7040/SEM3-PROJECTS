let songs = [{ songName: "Shape of You", filePath: "1.mp3", coverPath: "Covers/1.jpg" }]
let audio = new Audio("1.mp3");
let playing = false;
var maaster_play = document.getElementById("play")
const albumImage = {
    0: "jalebi baby.png",
    1: "cheap thrills.png",
    2: "shape of you.png"
}
const albumName={
    0:"Jalebi Baby",
    1:"Cheap Thrills",
    2:"Shape Of You"
}
const albumSongs = {
    0: "1.mp3",
    1: "Music/Hikaru Nara.mp3",
    2: "Music/Toradora Op 2.mp3"
}
playMusic = () => {
    if (!playing) {
        audio.play();
        playing = true;
    }
    else {
        playing = false;
        audio.pause()
    }
}
changeSong = (e) => {
    let index = parseInt(e.id);
    console.log(index)
    let cur_song_img = document.getElementById("curSongImg")
    let cur_song_name = document.getElementById("curSongName")
    cur_song_img.src = albumImage[index]
    cur_song_name.innerHTML=albumName[index]
    audio.pause()
    audio = new Audio(albumSongs[index])
    audio.currentTime = 0;
    audio.play()
    playing = true;
}
scrollSongleft=(e)=>{
    let item = document.getElementById(e)
    item.scrollBy({ left: -200, behavior: 'smooth' })
}
scrollSongright=(e)=>{
    let item = document.getElementById(e)
    item.scrollBy({ left: 200, behavior: 'smooth' })
}