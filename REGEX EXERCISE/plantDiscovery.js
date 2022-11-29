function solve(input){
    let n = Number(input.shift());
    let list = {};

    for(let i = 0; i < n; i++){
        let [plant,rarity] = input.shift().split('<->');
        
        rarity = Number(rarity);
        if(list.hasOwnProperty(plant) === false){
            list[plant] = {rarity : 0 ,rating : [] };
        }
        list[plant].rarity += rarity;
    }

    while(input[0] != 'Exhibition'){
        let tokens = input.shift().split(': ');
        let command = tokens[0];
        let [plant,parameter] = tokens[1].split(' - ');
        parameter = Number(parameter);
        if(list.hasOwnProperty(plant)){

        if(command === 'Rate'){
            list[plant].rating.push(parameter);

        }else if(command === 'Update'){
            list[plant].rarity = parameter;

        }else if(command === 'Reset'){
            list[plant].rating = 0;
            

        }
        }else{
        console.log('error');

    }
    }


    console.log("Plants for the exhibition:");
    for(let plant in list){
        let rating = list[plant].rating
        let averageRating = 0; 

        for(let rate of rating){
                rate = Number(rate);
                averageRating += rate;
        }
        
        if(rating.length !== 0){
            averageRating /= rating.length;
        }

        console.log(`- ${plant}; Rarity: ${list[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }



}
solve(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
