function catalogue(input){
    let list = {};

    for(let product of input){
        let [name , price] = product.split(" : ");
        list[name] = price;
    }
    
    let sorted = Object.entries(list).sort((a,b) => a[0].localeCompare(b[0]));

    let previousLetter = sorted[0][0][0];
    let clonOfGroup = false;

    for(let [product , price] of sorted){
      let currentLetter = product[0];

      if(currentLetter == previousLetter){
        if(!clonOfGroup){
          clonOfGroup = true;
          console.log(currentLetter);
        }
        
        console.log(`${product}: ${price}`);

      }else{
        console.log(currentLetter);
        console.log(`${product}: ${price}`);
      }

      previousLetter = product[0];
      
      
    }

}
catalogue
  (['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])