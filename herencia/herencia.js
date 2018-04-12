const eater = (state) => {
  return {
    eat: () => console.log(`${state.name} is eating`)
  }
}
const flying = (state) => {
  return {
    fly: () => console.log(`${state.name} is flying`)
  }
}
const shooter = (state) => {
  return {
    shoot: () => console.log(`${state.name} is shooting`)
  }
}
const Bird = ({name}) => {
  const state = {
    name
  }
  return Object.assign(
    state,
    eater(state),
    flying(state)
  )
}

const Penguin = ({name}) => {
  const state = {
    name
  }
  return Object.assign(
    state,
    eater(state)
  )
}

const Dog = ({name}) => {
  const state = {
    name
  }
  return Object.assign(
    state,
    eater(state)
  )
}

const RobotBird = ({name}) => {
  const state = {
    name
  }
  return Object.assign(
    state,
    shooter(state),
    flying(state)
  )
}

const dog = Dog({name: 'dog1'})
dog.eat()

const bird = Bird({name: 'bird1'})
bird.eat()
bird.fly()

const p = Penguin({name: 'penguin1'})
p.eat()

const robot = RobotBird({name: 'robot'})
robot.fly()
