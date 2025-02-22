/**
 * 从 0 到 range-1 范围内的随机数
 * @param {number} range
 * @returns {number}
 */
const random = range => Math.floor(Math.random(0, 1) * range)

const VIN_CODE = '0123456789ABCDEFGHJKLMNPRSTUVWXYZ'
const YEAR_CODE = '123456789ABCDEFGHJKLMNPRSTVXY'
const LOCATION_WEIGHT = [8, 7, 6, 5, 4, 3, 2, 10, '*', 9, 8, 7, 6, 5, 4, 3, 2]
const CODE_VALUE_MAP = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8,
  'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'P': 7, 'R': 9,
  'S': 2, 'T': 3, 'U': 4, 'V': 5, 'W': 6, 'X': 7, 'Y': 8, 'Z': 9
}

/**
 * 生成年产量 1000 以上的车架号
 * WMI，VDS 前5位，VIS 随机生成，导致车架号可能实际不存在
 * @returns {string} vin - 车架号
 */
const generateVIN = () => {
  const vcl = VIN_CODE.length
  let vin = '*'
  for (let i = 1; i < 9; i++) {
    const left = VIN_CODE[random(vcl)]
    vin = left + vin

    if (i === 1) { // 年份
      vin += YEAR_CODE[random(YEAR_CODE.length)]
    } else if (i > 3) {
      vin += VIN_CODE[random(10)]
    } else {
      vin += VIN_CODE[random(vcl)]
    }
  }
  let verifyVal = LOCATION_WEIGHT.reduce((total, val, index) =>
    index === 8 ? total :  total += (val * CODE_VALUE_MAP[vin[index]]),
    0
  )
  verifyVal %= 11 // 取余
  verifyVal = verifyVal < 10 ? verifyVal : 'X'
  return vin.replace('*', verifyVal)
}

const batchGenVIN = total => {
  const vins = []
  for (let i = 0; i < total; i++) {
    const vin = generateVIN()
    if (vin.length !== 17) {
      console.log(`error__${vin}`)
    } else {
      vins.push(vin)
    }
  }
  console.log(vins)
}

if (require.main === module) {
  const n = Number(process.argv[2] || 1)
  batchGenVIN(n)
}

exports.batchGenVIN = batchGenVIN