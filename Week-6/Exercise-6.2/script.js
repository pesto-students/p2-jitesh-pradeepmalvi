const spiralOrderMatrix = (arr) => {

  let row = arr.length
  if (arr.length === 0) return
  let col = arr[0].length

  let list = []

  let l = 0
  let r = row - 1
  let t = 0
  let b = col - 1
  let d = 0

  while (l <= r || t <= b) {
    if (d === 0) {
      for (let i = l; i <= r; i++) {
        list.push(arr[t][i])
      }
      t++
      d = 1
    }
    if (d === 1) {
      for (let i = t; i <= b; i++) {
        list.push(arr[i][r])
      }
      r--
      d = 2
    }
    if (d === 2) {
      for (let i = r; i >= l; i--) {
        list.push(arr[b][i])
      }
      b--
      d = 3
    }
    if (d === 3) {
      for (let i = b; i >= t; i--) {
        list.push(arr[i][l])
      }
      l++
      d = 0
    }
  }
  return list
}

console.log(spiralOrderMatrix(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
))