// n = 1) 0
// n = 2) 0
// n = 3) 1
// n = 4) 4
// n = 5) 10
// n = 6) 20
// n = 7) 35
// n = 8) 56

// if(n == 3) return 1;
// if(n == 4) return solution(n-1) + (1 + 2);
// if(n == 5) return solution(n-1) + (1 + 2 + 3);
// if(n == 6) return solution(n-1) + (1 + 2 + 3 + 4);


const solution = (n) => {
    const li = new Array(BigInt(n + 1)).fill(0);
    const dp = new Array(BigInt(n + 1)).fill(0);

    li[1] = 0;
    for(let i = 2; i <= n; i++){
        if( i === 2 || i === 3 ) { 
            li[i] = 1; 
            dp[i] = 1 + 2; 
        }
        if(i > 3) { 
            li[i] = li[i-1] + dp[i-1]; 
            dp[i] = dp[i-1] + i - 1; 
        }
    }
    return li[n];
}



test("", () => {
    expect(solution(1)).toBe(0);
});

test("", () => {
    expect(solution(2)).toBe(1);
});

test("", () => {
    expect(solution(3)).toBe(1);
});

test("", () => {
    expect(solution(4)).toBe(4);
});

test("", () => {
    expect(solution(5)).toBe(10);
});

test("", () => {
    expect(solution(6)).toBe(20);
});

test("", () => {
    expect(solution(7)).toBe(35);
});

test("", () => {
    expect(solution(8)).toBe(56);
});