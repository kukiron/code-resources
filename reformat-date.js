// Format date from '20th Oct 2017' to 'Oct 20, 2017'
// and then return it as 'YYYY-MM-DD'
function reformatDate(dates) {
  let result = []

  dates.map(el => {
    let a = el.split(" "),
      num = a[0].match(/\d+/)[0],
      date = `${a[1]} ${num}, ${a[2]}`

    result.push(formatDate(date))
  })

  return result
}

// To format dates from 'Oct 20, 2017' to '2017-10-20'
function formatDate(date) {
  let d = new Date(date),
    month = `${d.getMonth() + 1}`,
    day = `${d.getDate()}`,
    year = d.getFullYear()

  if (month.length < 2) month = `0${month}`
  if (day.length < 2) day = `0${day}`

  return `${year}-${month}-${day}`
}

// formatDate("Jan 10, 2034") // returns --> '2034-01-10'
const formattedDate = reformatDate([
  "20th Oct 1233",
  "12th Sep 1997",
  "3rd Dec 1897",
  "2nd Feb 2023"
])
formattedDate
// returns --> [ '1233-10-20', '1997-09-12', '1897-12-03', '2023-02-02' ]
