console.log("Welocme to Exopy");

// Initialize the Variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif= document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('masterSongName')

let songs =  [
    {songName:"Hamdard-Arjit Singh", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Allah Waariyan-Shafqat Amanat Ali", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Apna Bana le-Arijt Singh", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Ashma-NJK", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Askha ko Bato- B8", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Apthero Awastha- Bekcha", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Oi Nalakali", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Bhikhaari-Oasis Thapa", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Dhariya- Sajjin Raj Vaidya", filePath:"songs/10.mp3", coverPath:"covers/9.jpg"},
    {songName:"Tere Hawale- Arjit Singh", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},

]
songitem.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})



// audioElement.play();


// handle pause/play click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    }
)


// Listen to Events 
audioElement.addEventListener('timeupdate', ()=>{
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value= progress;
})
myProgressBar,addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay ')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})