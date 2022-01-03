/*
* This program in=s the jet class
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-04
*/

class Airplane {
  private speed: number

  constructor () {
    this.speed = 0
  }

  public setSpeed (newSpeed: number) {
    this.speed = newSpeed
  }

  public getSpeed () {
    return this.speed
  }
}

class Jet extends Airplane {
  public setSpeed (newSpeed: number) {
    super.setSpeed(newSpeed * 2)
  }

  public accelerate () {
    super.setSpeed(super.getSpeed() * 2)
  }
}

const biplane: Airplane = new Airplane()

biplane.setSpeed(212)
console.log(biplane.getSpeed())

const boeing: Jet = new Jet()

boeing.setSpeed(422)
console.log(boeing.getSpeed())

for (let counter: number = 0; counter < 4; counter++) {
  boeing.accelerate()
  console.log(boeing.getSpeed())

  if (boeing.getSpeed() > 5000) {
    biplane.setSpeed(biplane.getSpeed() * 2)
  } else {
    boeing.accelerate()
  }
}

console.log(biplane.getSpeed())

console.log('\nDone.')
