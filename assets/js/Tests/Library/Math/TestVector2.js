import Vector2 from '../../../Library/Math/Vector2.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Vector2 Class. */
export default class TestVector2 extends TestMatrix {
  /**
   * Create and run the tests
   */
  constructor() {
    super()
    console.log('testing Vector2')
    this.testAdd()
    this.testSub()
    this.testScalar()
    this.testNorm()
    this.testDot()
    this.testRot()
  }

  /**
   * Test the addition method
   */

  testAdd() {
    console.info('test Vector2.add()')
    const a = new Vector2(3, 6)

    const b = new Vector2(2, 3)

    const expected = [5, 9]
    a.add(b)
    const actual = [a. x, a.y]
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Vector2.sub()')
    const a = new Vector2(3, 6)

    const b = new Vector2(2, 3)

    const expected = [1, 3]
    a.sub(b)
    const actual = [a. x, a.y]
    this.checkIdentical(actual, expected)
  }

  testScalar() {
    console.info('test Vector2.scalar()')
    const a = new Vector2(3, 6)

    const x = 5

    const expected = [15, 30]
    a.scalar(x)
    const actual = [a. x, a.y]
    this.checkIdentical(actual, expected)
  }

  testNorm() {
    console.info('test Vector2.norm()')
    const a = new Vector2(3, 6)

    const expected = [7]
    
    const actual = [a.norm()]
    this.checkIdenticalRounded(actual, expected)
  }

  testDot() {
    console.info('test Vector2.dot()')
    const a = new Vector2(3, 6)

    const b = new Vector2(2, 3)

    const expected = [24]
    a.dot(b)
    const actual = [a.dot(b)]
    this.checkIdentical(actual, expected)
  }

  testRot() {
    console.info('test Vector2.rot()')
    const a = new Vector2(3, 6)

    const α = 90

    const expected = [-6, 3]
    a.rot(α)
    const actual = [a. x, a.y]
    this.checkIdenticalRounded(actual, expected)
  }
}