export const dateFormatter = date => {
  const dateToBeFormatted = new Date(date)
  const day = dateToBeFormatted.getUTCDate()
  const month = dateToBeFormatted.getMonth()
  const year = dateToBeFormatted.getFullYear()
  const dateFormatted = `${day}/${month + 1}/${year}`
  return dateFormatted
}

export const dateDeformatter = date => {
  const dateToBeFormatted = new Date(date)
  const day = dateToBeFormatted.getUTCDate()
  const month = dateToBeFormatted.getMonth()
  const year = dateToBeFormatted.getFullYear()
  let dateFormatted = ""
  dateFormatted = `${year}-${month + 1}-${day}`
  if (month + 1 < 10 && day < 10) {
    dateFormatted = `${year}-0${month + 1}-0${day}`
  } else if (month + 1 > 10 && day < 10) {
    dateFormatted = `${year}-${month + 1}-0${day}`
  } else if (month + 1 < 10 && day < 10) {
    dateFormatted = `${year}-0${month + 1}-${day}`
  }
  return dateFormatted
}

export const getAge = date => {
  if (date === null) {
    return "Birthdate is Null"
  }
  let today = new Date()
  let birthDate = new Date(date)
  let year = today.getFullYear() - birthDate.getFullYear()
  let month = today.getMonth() - birthDate.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    year = year - 1
  }
  if (month < 0) {
    month = month + 12
  }
  return { year, month }
}
