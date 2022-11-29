function furnitureFunc(input){
    let pattern = /^>>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/g;
    
    let furnitures = [];
    let total = 0;
    let match = pattern.exec(input);

    while(match != null){
        let price = Number(match.groups['price']);
        let qty = Number(match.groups['qty']);
        let name = match.groups['name'];
        furnitures.push(name);
        total += qty * price;

        match = pattern.exec(input);
    }

    console.log(furnitures);

}
furnitureFunc(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
)