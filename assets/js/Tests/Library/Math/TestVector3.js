import Vector3 from '../../../Library/Math/Vector3.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Vector3 Class. */
export default class TestVector3 extends TestMatrix {
  /**
   * Create and run the tests
   */
  constructor() {
    super()
    console.log('testing Vector3')
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
    console.info('test Vector3.add()')
    const a = new Vector3(3, 6, 8)

    const b = new Vector3(2, 3, 5)

    const expected = [5, 9, 13]
    a.add(b)
    const actual = [a. x, a.y, a.z]
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Vector3.sub()')
    const a = new Vector3(3, 6, 8)

    const b = new Vector3(2, 3, 5)

    const expected = [1, 3, 3]
    a.sub(b)
    const actual = [a. x, a.y, a.z]
    this.checkIdentical(actual, expected)
  }

  testScalar() {
    console.info('test Vector3.scalar()')
    const a = new Vector3(3, 6, 8)

    const x = 5

    const expected = [15, 30, 40]
    a.scalar(x)
    const actual = [a. x, a.y, a.z]
    this.checkIdentical(actual, expected)
  }

  testNorm() {
    console.info('test Vector3.norm()')
    const a = new Vector3(3, 6, 8)

    const expected = [10]
    
    const actual = [a.norm()]
    this.checkIdenticalRounded(actual, expected)
  }

  testDot() {
    console.info('test Vector3.dot()')
    const a = new Vector3(3, 6, 8)

    const b = new Vector3(2, 3, 5)

    const expected = [64]
    a.dot(b)
    const actual = [a.dot(b)]
    this.checkIdentical(actual, expected)
  }

  testRot() {
    console.info('test Vector3.rot()')
    const a = new Vector3(3, 6, 8)

    const α = 90

    const expected = [-6, 3, 8]
    a.rot(α)
    const actual = [a. x, a.y, a.z]
    this.checkIdenticalRounded(actual, expected)
  }
}