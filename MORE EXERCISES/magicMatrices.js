
    function magicMatrices(arr) {
        let isEqual = true;
     
        for (let i = 0; i < arr.length; i++) {
     
            for (let j = 0; j < arr.length; j++) {
                let rawElement = arr[i];
                let sumRaw = 0;
                let sumCol = 0
     
                for (let k = 0; k < arr.length; k++) {
                    let colElement = arr[k];
                    sumRaw += rawElement[k];
                    sumCol += colElement[j];
                }
                if (sumRaw != sumCol) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual == false) {
                break;
            }
        }
        console.log(isEqual);
    }
magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])
