function binarySearch(array, find){
    let start = 0;
    let end = array.length;
    while(start < end) {
        const mid = Math.floor((end + start) / 2);
        if(array[mid] === find) return mid;
        if(array[mid] >= find) end = mid;
        if(array[mid] < find) start = mid + 1;
    }
    return array.length - start;
}

function solution(info, query) {
    const answer = [];
    const infoDict = {};
    
    function combination(array, index, score) {
        const key = array.join("");
        if(!infoDict[key]) infoDict[key] = [];
        infoDict[key].push(score);
        if(index === array.length) return ;
        
        for(let i = index; i < array.length; i++){
            const temp = [...array];
            temp[i] = "-";
            combination(temp, i + 1, score);
        }
    }
    
    info.forEach((data) => {
        const [language, position, career, food, score] = data.split(" ");
        combination([language, position, career, food], 0, Number(score));
    })
    
    for (const [key, value] of Object.entries(infoDict)) {
        infoDict[key] = value.sort((a, b) => a - b);
    }

    query.forEach((command) => {
        const array = command.replace(/and /gi, "").split(" ");
        const score = array.pop();
        const key = array.join("");
        const value = infoDict[key] ? infoDict[key] : [];
        const index = binarySearch(value, score);
        answer.push(index);
    })

    return answer;
}