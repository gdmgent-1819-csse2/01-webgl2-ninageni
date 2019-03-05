import Vector4 from '../../../Library/Math/Vector4.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Vector4 Class. */
export default class TestVector4 extends TestMatrix {
  /**
   * Create and run the tests
   */
  constructor() {
    super()
    console.log('testing Vector4')
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
    console.info('test Vector4.add()')
    const a = new Vector4(3, 6, 8, 15)

    const b = new Vector4(2, 3, 5, 4)

    const expected = [5, 9, 13, 19]
    a.add(b)
    const actual = [a. x, a.y, a.z, a.w]
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Vector4.sub()')
    const a = new Vector4(3, 6, 8, 15)

    const b = new Vector4(2, 3, 5, 4)

    const expected = [1, 3, 3, 11]
    a.sub(b)
    const actual = [a. x, a.y, a.z, a.w]
    this.checkIdentical(actual, expected)
  }

  testScalar() {
    console.info('test Vector4.scalar()')
    const a = new Vector4(3, 6, 8, 15)

    const x = 5

    const expected = [15, 30, 40, 75]
    a.scalar(x)
    const actual = [a. x, a.y, a.z, a.w]
    this.checkIdentical(actual, expected)
  }

  testNorm() {
    console.info('test Vector4.norm()')
    const a = new Vector4(3, 6, 8, 15)

    const expected = [18]
    
    const actual = [a.norm()]
    this.checkIdenticalRounded(actual, expected)
  }

  testDot() {
    console.info('test Vector4.dot()')
    const a = new Vector4(3, 6, 8, 15)

    const b = new Vector4(2, 3, 5, 4)

    const expected = [124]
    a.dot(b)
    const actual = [a.dot(b)]
    this.checkIdentical(actual, expected)
  }

  testRot() {
    console.info('test Vector4.rot()')
    const a = new Vector4(3, 6, 8, 15)

    const α = 90

    const expected = [3, -8, 6, 15]
    a.rot(α)
    const actual = [a. x, a.y, a.z, a.w]
    this.checkIdenticalRounded(actual, expected)
  }
}