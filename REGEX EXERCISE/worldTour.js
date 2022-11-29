function solve(input){
    let stops = input.shift();

    while(input[0] != 'Travel'){
        let tokens = input.shift().split(':');
        let command = tokens[0];

    if(command === 'Add Stop'){
        let [_,index,string] = tokens;
        index = Number(index);
        if(index == 0 || index <= stops.length - 1){
            stops = stops.substring(0,index) + string + stops.substring(index,stops.length);
            console.log(stops);
        }else {
            console.log(stops);
        }
        

    }else if(command === 'Remove Stop'){
        let [_,startIndex,endIndex] = tokens;
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        if((startIndex == 0 || startIndex <= stops.length - 1) && (endIndex == 0 || endIndex <= stops.length - 1)){
        stops = stops.substring(0,startIndex) + stops.substring(endIndex + 1,stops.length);
        console.log(stops);
        }else {
        console.log(stops);
        }

    }else if(command === 'Switch'){
        let [_,oldString,newString] = tokens;
        if(stops.includes(oldString)){
            stops = stops.replace(oldString,newString);
            console.log(stops);
        }else{
            console.log(stops);
        }

    }
 }
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}
solve((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
)