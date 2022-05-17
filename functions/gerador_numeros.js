function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getJogo(numeros = 6){
    let array = []

    for (let i = 0 ; i < numeros ; i++){
        array.push(getRandom(1, 60));   
    }
    
    array.sort((n1, n2) => n1 - n2)

    const result = array.toString().replaceAll(",", "-")
    return result
}
