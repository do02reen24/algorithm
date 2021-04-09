function solution(m, musicinfos) {
    function replaceCode(str) {
        const codes = ['C', 'D', 'F', 'G', 'A'];
        for(const code of codes) {
            const regExp = new RegExp(`${code}#`, 'g');
            str = str.replace(regExp, code.toLowerCase());
        }
        return str;
    }
    function getTime(time) {
        const [min, sec] = time.split(":").map((n) => Number(n));
        return min * 60 + sec;
    }
    function makeSong(code, time) {
        const len = code.length;
        const share = Math.floor(time / len);
        const rest = time % len;
        return code.repeat(share) + code.substring(0, rest);
    }
    m = replaceCode(m);
    let answer = "(None)"
    let maxRunTime = 0;
    for(const musicinfo of musicinfos) {
        let [start, end, title, melody] = musicinfo.split(",");
        const runTime = getTime(end) - getTime(start);
        const song = makeSong(replaceCode(melody), runTime);
        if(song.indexOf(m) === -1) continue;
        if(maxRunTime < runTime) {
            answer = title;
            maxRunTime = runTime;
        }
    }
    return answer;
}