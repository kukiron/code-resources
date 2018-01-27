// Let’s build a `withConstructor` mixin to add the `.constructor` property to all object instances.
const withConstructor = constructor => o => {
  const proto = Object.assign({}, Object.getPrototypeOf(o), { constructor })

  return Object.assign(Object.create(proto), o)
}

const pipe = (...fns) => x => fns.reduce((prev, func) => func(prev), x)
// or `import pipe from "lodash/fp/flow'

// Set up some functional mixins
const withFlying = o => {
  let isFlying = false

  return {
    ...o,
    fly() {
      isFlying = true
      return this
    },
    land() {
      isFlying = false
      return this
    },
    isFlying: () => isFlying
  }
}

const withBattery = ({ capacity }) => o => {
  let percentCharged = 100

  return {
    ...o,
    draw(percent) {
      const remaining = percentCharged - percent
      percentCharged = remaining > 0 ? remaining : 0
      return this
    },
    getCharge: () => percentCharged,
    get capacity() {
      return capacity
    }
  }
}

const createDrone = ({ capacity = "3000mAh" }) =>
  pipe(withFlying, withBattery({ capacity }), withConstructor(createDrone))({})

const myDrone = createDrone({ capacity: "5500mAh" })

console.log(`
  can fly:  ${myDrone.fly().isFlying() === true}
  can land: ${myDrone.land().isFlying() === false}
  battery capacity: ${myDrone.capacity}
  battery status: ${myDrone.draw(50).getCharge()}%
  battery drained: ${myDrone.draw(75).getCharge()}%
`)

console.log(`
  constructor linked: ${myDrone.constructor === createDrone}
`)
