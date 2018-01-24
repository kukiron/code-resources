// https://repl.it/@kafil_kiron/Codewars-greater-Nesting-Structure-Comparison

/*
Array.prototype.sameStructureAs = function(other) {
  if (!other) return false

  if (this.length !== other.length) return false

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && Array.isArray(other[i])) {
      if (!this[i].sameStructureAs(other[i])) return false
    } else if (Array.isArray(this[i]) && !Array.isArray(other[i])) return false
    else if (!Array.isArray(this[i]) && Array.isArray(other[i])) return false
  }

  return true
};
*/

Array.prototype.sameStructureAs = function(other) {
  return this.length === other.length
    ? this.every(
      (el, i) => (Array.isArray(el) ? el.sameStructureAs(other[i]) : true)
    )
    : false
}

Object.defineProperty(Array.prototype, "sameStructureAs", { enumerable: false })

// [1, 1, 1].sameStructureAs([2, 2, 2])
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] )
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] )
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] )
;[1, "[", "]"].sameStructureAs(["[", "]", 1])
