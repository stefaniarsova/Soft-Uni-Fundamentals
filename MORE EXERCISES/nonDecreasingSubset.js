function nonDecreasingSubset(array){
        let max = array[0];
        let result = array.filter((el) => {
            if(el >= max){
                max = el;
            }
            return el >= max;
        })
        
        console.log(result.join(' '));
        }
        
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])