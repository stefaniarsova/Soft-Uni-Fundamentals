function solve(input){
    let followers = {};

    while(input[0] != 'Log out'){
        let line = input.shift();
        let tokens = line.split(': ');
        let command = tokens[0];

        if(command === 'New follower'){
            let username = tokens[1];
            if(followers.hasOwnProperty(username) === false){
                followers[username] = 0;
            }

        }else if(command === 'Like'){
            let username = tokens[1];
            let count = Number(tokens[2]);

            if(followers.hasOwnProperty(username) === false){
                followers[username] = count;
            }else {
                followers[username] += count;
            }            

        }else if(command === 'Comment'){
            let username = tokens[1];
            
            if(followers.hasOwnProperty(username) === false){
                followers[username] = 1
            }else {
                followers[username] += 1;
            }
            

        }else if(command === 'Blocked'){
            let username = tokens[1];

            if(followers.hasOwnProperty(username) === false){
                console.log(`${username} doesn't exist.`);
            }else {
                delete followers[username];
            }

        }
    }
    let followersCount = Object.keys(followers).length;

    console.log(`${followersCount} followers`);
    for(let follower in followers){
        console.log(`${follower}: ${followers[follower]}`);
    }
}
solve(["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])
