// https://www.codewars.com/kata/human-readable-time/train/javascript

function humanReadable(seconds) {
  const hrs = Math.floor(seconds / 3600) // could also use parseInt in place of Math.floor
  const mins = Math.floor((seconds - hrs * 3600) / 60)
  const secs = seconds - (hrs * 3600 + mins * 60)

  function time(arg) {
    if (arg < 10) return `0${arg}`
    else return arg
  }
  return `${time(hrs)}:${time(mins)}:${time(secs)}`
}

humanReadable(86399) // --> '23:59:59'
