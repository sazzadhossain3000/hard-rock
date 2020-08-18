const searchbutton=document.getElementById('search-Button');
searchbutton.addEventListener('click',function(){
    const searchBox=document.getElementById('search-Box').value;
    fetch(`https://api.lyrics.ovh/suggest/${searchBox}`)
   .then(response=>response.json())
   .then(data=>{
         console.log(data);

   const lyrcisList=document.getElementById('lyrics-List');
   lyrcisList.innerText="";
   const allData=data.data;
   const dataInfo=allData.slice(0,5)
    for (let i = 0; i < dataInfo.length; i++) {
        const songTitle = dataInfo[i].title;
        const artistName=dataInfo[i].artist.name;
        // lyrcisList.innerHTML+=`<p class="author lead"><strong>${songTitle}</strong> Album by<strong>${artistName}</strong>
        // <button onclick="lyricName('${songTitle}','${artistName}')" class="btn btn-success">Get Lyrics</button></p>`

        lyrcisList.innerHTML+= `<div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9">
                <h3 class="lyrics-name"><strong>${songTitle}</strong></h3>
                <p class="author lead">Album by <span><strong>${artistName}</strong></span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="lyricName('${songTitle}','${artistName}')"class="btn btn-success">Get Lyrics</button>
            </div>
      </div>`


    }
   })
})


function lyricName(artistName,songTitle){
    fetch(`https://api.lyrics.ovh/v1/${songTitle}/${artistName}`)
   .then(response=>response.json())
   .then(data=>{
    const songLiricSee=document.getElementById("songLiric");
      
        songLiricSee.innerHTML=data.lyrics;
      
     
    } )
   }