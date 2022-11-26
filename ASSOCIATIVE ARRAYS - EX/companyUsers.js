function companyUsers(input){
    let companyEmployees = {};

    for(let line of input){
        let [companyName , employeeId] = line.split(' -> ');
        
        if(companyEmployees.hasOwnProperty(companyName) == false){
            companyEmployees[companyName] = new Set ();
        }
        companyEmployees[companyName].add(employeeId);
        
    }

    let sorted = Object.entries(companyEmployees).sort((a,b) => a[0].localeCompare(b[0]));

    for(let [name , employees] of sorted){
     console.log(name);
     for(let employee of employees){
         console.log(`-- ${employee}`);
     }
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )