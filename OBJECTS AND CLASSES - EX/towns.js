function towns(input){

    let townsInfo = {}

    for(let info of input){
        let tokens = info.split(' | ')
        let town = tokens[0];
        let latitude = (Number(tokens[1])).toFixed(2);
        let longitude = (Number(tokens[2])).toFixed(2);
        townsInfo.town = town;
        townsInfo.latitude = latitude;
        townsInfo.longitude = longitude;
        console.log(townsInfo);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])