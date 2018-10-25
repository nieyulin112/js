// 正常的递归算法
function recursive(n) {
  if (n <= 1) {
    return 1
  } else {
    return n * function recursive(n - 1)
  }
}

// 尾递归优化
function facior(n, result = 1) {
  if (n <= 1) {
    return result
  } else {
    let p = n * result
    return facior(n - 1 , p)
  }
}
