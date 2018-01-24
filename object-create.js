const switchProto = {
  isOn() {
    return this.state
  },
  toggle() {
    this.state = !this.state
    return this
  },
  meta: {
    name: "light switch"
  },
  state: false
}

const switch1 = Object.create(switchProto)
const switch2 = Object.create(switchProto)

/**
 * Changing the instance (created using Object.create())
 * property this way will change the property of the main object
 */
// switch1.meta.name = "Breaker Switch"

/**
 * But changing this way won't change the property of the main object or other instances
 */
switch1.meta = { name: "Power Switch" }

console.log(switch1.isOn())
console.log(!switch2.toggle())
console.log(switch1.meta.name)
console.log(switch2.meta.name)
console.log(switchProto)
