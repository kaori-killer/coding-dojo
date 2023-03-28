const solution = (array) => {
    const a = array[0];
    const b = array[1];
    const c = array[2];
    const d = array[3];
    const e = array[4];
    const f = array[5];

    for(let i = -999; i < 1000; i++){
        for(let j = -999; j < 1000; j++){
            if(a * i + b * j === c && d * i + e * j === f) { return [i, j].join(" ");}
        }
    }
}

test("연립 방정식", () => {
    expect(solution(
        [1, 3, -1, 4, 1, 7]
    )).toBe("2 -1");
});