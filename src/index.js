module.exports = function check(str, bracketsConfig) {
  let stringArray = str.split('')
    if(stringArray.length % 2 !== 0){
        return false
    }
    let openedConfigs = bracketsConfig.map(config => {
        return config[0]
    })
    let closedConfigs = bracketsConfig.map(config => {
        return config[1]
    })
    let bracketArray = []
    let resultArray = []
    stringArray.map((bracket, i) => {
        if(openedConfigs.indexOf(bracket) !== -1 && openedConfigs.indexOf(stringArray[i-1]) === -1 && stringArray[i-1]){
            resultArray.push(bracketArray)
            bracketArray = []
        }
        bracketArray.push(bracket)
        if(i === stringArray.length - 1){
            resultArray.push(bracketArray)
        }
    })
    for(let j = 0; j < resultArray.length; j++){
        let firstPart = []
        let secondPart = []
        for(let i = 0; i < resultArray[j].length; i++){
            if(i < resultArray[j].length / 2){
                firstPart.push(resultArray[j][i])
            }
            else{
                secondPart.push(resultArray[j][i])
            }
        }
        for(let i = 0; i < secondPart.length; i++){
            let index = closedConfigs.indexOf(secondPart[i])
            secondPart[i] = openedConfigs[index]
        }
        secondPart = secondPart.reverse()
        for(let i = 0; i < firstPart.length; i++){
            if(firstPart[i] !== secondPart[i]){
                return false
            }
        }
    }
    return true
}
