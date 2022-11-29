function solve(input) {

    let pattern = />>(?<furniture>[A-Z][a-zA-Z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
    let match = pattern.exec(input);
    let furniture = [];
    let totalPrice = 0;

    while (match != null) {

        let price = match.groups['price'];
        let quantity = match.groups['quantity'];

        let currentCost = price * quantity;
        furniture.push(match.groups['furniture']);
        totalPrice += currentCost;

        match = pattern.exec(input);
    }
    console.log(furniture);
}
solve(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
)