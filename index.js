const number = 1



const one_to_nine = {
  0: '',
  1: {string: 'kunye', prefix: ""},
  2: {string: 'kubili', prefix: ""},
  3: {string: 'lesitsatfu', prefix: ""},
  4: {string: 'kune', prefix: ""},
  5: {string: 'sihlanu', prefix: ""},
  6: {string: 'sitfupha', prefix: ""},
  7: {string: 'sikhombisa', prefix: ""},
  8: {string: 'siphohlongo', prefix: ""},
  9: {string: 'infica', prefix: ""},
}

const ten_to_ninety = {
  0: {string: '', prefix: ""},
  1: {string: 'lishumi na', prefix: "le"},
  2: {string: 'emashumi lamabili na', prefix: "ema"},
  3: {string: 'emashumi lasitsatfu na', prefix: "ema"},
  4: {string: 'emashumi lasine na', prefix: "ema"},
  5: {string: 'emashumi lasihlanu na', prefix: "ema"},
  6: {string: 'emashumi lasitfupha na', prefix: "ema"},
  7: {string: '', prefix: ""},
  8: {string: '', prefix: ""},
  9: {string: 'emashumi lasiphohlongo na', prefix: "ema"}
}

const hundred_to_nine_hundred = {
  0: {string: '', prefix: ""},
  1: {string: 'likhulu', prefix: "li"},
}

const thousand_to_thousand_nine_hundred = {
  0: {string: '', prefix: ""},
  1: {string: '', prefix: ""},
}

const index = [
  one_to_nine,
  ten_to_ninety,
  hundred_to_nine_hundred,
  thousand_to_thousand_nine_hundred
]

const ten_to_nineteen = {


}

function get_string_from_number (input_number) {
  
  const individual_numbers = input_number.toString().split('').map((a) => parseInt(a)).reverse()
  
  let result =  look_up_numbers(individual_numbers)

  return clean_up(result)
}

function look_up_numbers(individual_numbers) {
  let result = []
  individual_numbers.map((number, i) => {
    const type = index[i]
    let res = type[number].string

    if (individual_numbers[i + 1] && i !== 0) {
      res = type[number].prefix + type[number].string
    }

    result.push(res)
  })
  const numbers_as_strings = result.reverse().join(' ').trim()
  
  return numbers_as_strings
}

function clean_up (numbers_as_strings) {
  const regex_result = numbers_as_strings.match(/na$/)
  if (regex_result) {
    return numbers_as_strings.substring(0, regex_result.index)  
  }

  return numbers_as_strings
}

console.log(get_string_from_number(119))

module.exports = get_string_from_number