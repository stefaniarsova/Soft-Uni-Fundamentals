function travelTime(input){
    let destinations = {};

    for(let line of input){
        let [country , town , price] = line.split(' > ');

        if(destinations.hasOwnProperty(country) == false){
            destinations[country] = new Map();
        }

        if(destinations[country].has(town)){
            let oldCost = destinations[country].get(town);

            if(oldCost > price){
                destinations[country].set(town,price);
            }
        }else {
            destinations[country].set(town,price);
        }
    }

    let sortedAlphabetically = Object.entries(destinations).sort((a,b) => a[0].localeCompare(b[0]));

    for(let [name , townInfo] of sortedAlphabetically){
        let result = '';
        result += `${name} -> `
        let sortedByPrice = Array.from(townInfo.entries()).sort((a,b) => a[1] - b[1]);
        for(let [town , price] of sortedByPrice){
            result += `${town} -> ${price} `;
        }
        console.log(result);
    }
}
travelTime([
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 500"
    ]
    )