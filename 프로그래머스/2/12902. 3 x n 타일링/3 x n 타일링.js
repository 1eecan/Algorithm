function solution(n) {
  const MOD = 1000000007;
  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[2] = 3;

  for (let i = 4; i <= n; i += 2) {
    for (let j = 2; j <= i; j += 2) {
      dp[i] = (dp[i] + dp[i - j] * ((j === 2) ? 3 : 2)) % MOD;
    }
  }
  return dp[n];
}

