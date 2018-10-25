// 正常的递归算法
function recursive(n) {
  if (n <= 1) {
    return 1
  } else {
    return n * recursive(n - 1)
  }
}
recursive(10)

// 尾递归优化
function facior(n, result = 1) {
  if (n <= 1) {
    return result
  } else {
    let p = n * result
    return facior(n - 1, p)
  }
}


function fib(n) {
  if (n === 1 || n === 2) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

// 优化的斐波那契数列
var cache = [];

function fibs(n) {
  if (cache[n] !== undefined) {
    return cache[n];
  }
  if (n <= 2) {
    cache[n] = 1;
    return 1;
  }
  cache.push(fib(n - 1) + fib(n - 2));
  return cache[n];
}
console.log(fib(5));
