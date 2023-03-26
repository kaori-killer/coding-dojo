const sum = (array) => {
    return array.reduce((acc, cur) => acc + cur, 0);
}

const solution = (array) => {
    if(sum(array) !== 180)   return "Error";

    array.sort((a, b)=>a - b);
    if (array[0] === array[1] && array[1] === array[2]) return "Equilateral";
    if (array[0] === array[1] || array[1] === array[2]) return "Isosceles";
    
    return "Scalene";   
    
};

test("삼각형의 종류 구분", () => {
    expect(solution(
        [60, 60, 60]
    )).toBe("Equilateral");
});

test("삼각형의 종류 구분", () => {
    expect(solution(
        [60, 50, 50]
    )).toBe("Error");
});

test("삼각형의 종류 구분", () => {
    expect(solution(
        [70, 70, 40]
    )).toBe("Isosceles");
});

test("삼각형의 종류 구분", () => {
    expect(solution(
        [60, 70, 50]
    )).toBe("Scalene");
});

test("삼각형의 종류 구분", () => {
    expect(solution(
        [30, 30, 30]
    )).toBe("Error");
});

test("삼각형의 종류 구분", () => {
    expect(solution(
        [70, 40, 70]
    )).toBe("Isosceles");
});

test("삼각형의 종류 구분", () => {
    expect(solution(
        [40, 40, 100]
    )).toBe("Isosceles");
});

test("삼각형의 종류 구분", () => {
    expect(solution(
        [20, 80, 80]
    )).toBe("Isosceles");
});