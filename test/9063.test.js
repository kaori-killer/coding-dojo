const findWidth = (array) => {
    array.sort((a, b) => a[0] - b[0]);
    return array[array.length-1][0] - array[0][0];
};

const findHeigth = (array) => {
    array.sort((a, b)=>a[1] - b[1]);
    return array[array.length-1][1] - array[0][1];
};

const solution = (n, array) => {
    return findWidth(array) * findHeigth(array);
}

test("대지 찾기", () => {
    expect(solution(
        4, [[2, 1], [3, 2], [5, 2], [3, 4]]
    )).toBe(9);
});

test("대지 찾기", () => {
    expect(solution(
        4, [[20, 24], [40, 21], [10, 12]]
    )).toBe(360);
});

test("대지 찾기", () => {
    expect(solution(
        1, [[15, 13]]
    )).toBe(0);
});

test("대지 찾기", () => {
    expect(solution(
        4, [[2, 1], [3, 2], [5, 2], [3, 4]]
    )).toBe(9);
});

test("가로 길이 찾기", () => {
    expect(findWidth(
        [[2, 1], [3, 2], [5, 2], [3, 4]]
    )).toBe(3);
});

test("가로 길이 찾기", () => {
    expect(findWidth(
        [[20, 24], [40, 21], [10, 12]]
    )).toBe(30);
});

test("세로 길이 찾기", () => {
    expect(findHeigth(
        [[2, 1], [3, 2], [5, 2], [3, 4]]
    )).toBe(3);
});

test("세로 길이 찾기", () => {
    expect(findHeigth(
        [[20, 24], [40, 21], [10, 12]]
    )).toBe(12);
});