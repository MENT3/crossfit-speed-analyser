export type Regressor = {
  slope: number
  intercept: number
  r2: number
}

export function linearRegression(x: Array<number>, y: Array<number>): Regressor {
  const lr: Regressor = { slope: 0, intercept: 0, r2: 0 }
  const n = y.length

  let sum_x = 0
  let sum_y = 0
  let sum_xy = 0
  let sum_xx = 0
  let sum_yy = 0

  for (let i = 0; i < y.length; i++) {
    sum_x += x[i]
    sum_y += y[i]
    sum_xy += (x[i]*y[i])
    sum_xx += (x[i]*x[i])
    sum_yy += (y[i]*y[i])
  }

  // https://i.stack.imgur.com/JxedC.jpg
  lr.slope = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x)
  lr.intercept = (sum_y - lr.slope * sum_x) / n
  lr.r2 = Math.round(
    Math.pow(
      (
        (n * sum_xy - sum_x * sum_y) /
        Math.sqrt(
          (n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)
        )
      ),
      2
    ) * 1000
  ) / 1000
  return lr
}
