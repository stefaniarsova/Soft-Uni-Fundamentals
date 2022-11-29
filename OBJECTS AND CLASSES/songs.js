function typeSongs(input){
    class Songs {
        constructor(type , name , time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberSongs = input.shift();
    let songType =input.pop();

    for(let i = 0; i < numberSongs;i++){
        let [type , name , time] = input[i].split('_');
        let song = new Songs(type , name , time);
        songs.push(song);
    }

    if(songType === 'all'){
        songs.forEach((i) => console.log(i.name))
    }else {
        let filtered = songs.filter((i) => i.type === songType);
        filtered.forEach((i) => console.log(i.name));
    }

}
typeSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )