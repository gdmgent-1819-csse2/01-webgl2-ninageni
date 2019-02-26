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
    const a = new Vector3(3, 6, 3)

    const b = new Vector3(6, 3, 6)

    const expected = [9, 9, 9]
    a.add(b)
    const actual = [a. x, a.y, a.z]
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Vector3.sub()')
    const a = new Vector3(3, 6, 3)

    const b = new Vector3(6, 3, 6)

    const expected = [-3, 3, -3]
    a.sub(b)
    const actual = [a. x, a.y, a.z]
    this.checkIdentical(actual, expected)
  }

  testScalar() {
    console.info('test Vector3.scalar()')
    const a = new Vector3(3, 6, 3)

    const x = 6

    const expected = [18, 36, 18]
    a.scalar(x)
    const actual = [a. x, a.y, a.z]
    this.checkIdentical(actual, expected)
  }

  testNorm() {
    console.info('test Vector3.norm()')
    const a = new Vector3(3, 6, 3)

    const expected = [7]
    
    const actual = [a.norm()]
    this.checkIdenticalRounded(actual, expected)
  }

  testDot() {
    console.info('test Vector3.dot()')
    const a = new Vector3(3, 6, 3)

    const b = new Vector3(6, 3, 6)

    const expected = [54]
    a.dot(b)
    const actual = [a.dot(b)]
    this.checkIdentical(actual, expected)
  }

  testRot() {
    console.info('test Vector3.rot()')
    const a = new Vector3(3, 6, 3)

    const α = 180

    const expected = [-3, -6, 3]
    a.rot(α)
    const actual = [a. x, a.y, a.z]
    this.checkIdenticalRounded(actual, expected)
  }
}