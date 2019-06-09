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
    const firstVector = new Vector2(3, 6)

    const secondVector = new Vector2(2, 3)

    const expected = [5, 9]
    firstVector.add(secondVector)
    const actual = [firstVector. x, firstVector.y]
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Vector2.sub()')
    const firstVector = new Vector2(3, 6)

    const secondVector = new Vector2(2, 3)

    const expected = [1, 3]
    firstVector.sub(secondVector)
    const actual = [firstVector. x, firstVector.y]
    this.checkIdentical(actual, expected)
  }

  testScalar() {
    console.info('test Vector2.scalar()')
    const firstVector = new Vector2(3, 6)

    const scalar = 5

    const expected = [15, 30]
    firstVector.scalar(scalar)
    const actual = [firstVector. x, firstVector.y]
    this.checkIdentical(actual, expected)
  }

  testNorm() {
    console.info('test Vector2.norm()')
    const firstVector = new Vector2(3, 6)

    const expected = [7]
    
    const actual = [firstVector.norm()]
    this.checkIdenticalRounded(actual, expected)
  }

  testDot() {
    console.info('test Vector2.dot()')
    const firstVector = new Vector2(3, 6)

    const secondVector = new Vector2(2, 3)

    const expected = [24]
    firstVector.dot(secondVector)
    const actual = [firstVector.dot(secondVector)]
    this.checkIdentical(actual, expected)
  }

  testRot() {
    console.info('test Vector2.rot()')
    const firstVector = new Vector2(3, 6)

    const α = 90

    const expected = [-6, 3]
    firstVector.rot(α)
    const actual = [firstVector. x, firstVector.y]
    this.checkIdenticalRounded(actual, expected)
  }
}