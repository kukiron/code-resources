// get the average color of two hex colors.
function avgColor(color1, color2) {
  const avg = (a, b) => (a + b) / 2,
    t16 = c => parseInt(("" + c).replace("#", ""), 16),
    hex = c => {
      const t = (c >> 0).toString(16)
      return t.length === 2 ? t : "0" + t
    },
    hex1 = t16(color1),
    hex2 = t16(color2),
    r = hex => (hex >> 16) & 0xff,
    g = hex => (hex >> 8) & 0xff,
    b = hex => hex & 0xff,
    result =
      "#" +
      hex(avg(r(hex1), r(hex2))) +
      hex(avg(g(hex1), g(hex2))) +
      hex(avg(b(hex1), b(hex2)))

  return result
}

avgColor("#ffffff", "#000000") // "#7f7f7f"
