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
    const a = new Vector4(3, 6, 3, 6)

    const b = new Vector4(6, 3, 6, 3)

    const expected = [9, 9, 9, 9]
    a.add(b)
    const actual = [a. x, a.y, a.z, a.w]
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Vector4.sub()')
    const a = new Vector4(3, 6, 3, 6)

    const b = new Vector4(6, 3, 6, 3)

    const expected = [-3, 3, -3, 3]
    a.sub(b)
    const actual = [a. x, a.y, a.z, a.w]
    this.checkIdentical(actual, expected)
  }

  testScalar() {
    console.info('test Vector4.scalar()')
    const a = new Vector4(3, 6, 3, 6)

    const x = 6

    const expected = [18, 36, 18, 36]
    a.scalar(x)
    const actual = [a. x, a.y, a.z, a.w]
    this.checkIdentical(actual, expected)
  }

  testNorm() {
    console.info('test Vector4.norm()')
    const a = new Vector4(3, 6, 3, 6)

    const expected = [9]
    
    const actual = [a.norm()]
    this.checkIdenticalRounded(actual, expected)
  }

  testDot() {
    console.info('test Vector4.dot()')
    const a = new Vector4(3, 6, 3, 6)

    const b = new Vector4(3, 3, 6, 3)

    const expected = [63]
    a.dot(b)
    const actual = [a.dot(b)]
    this.checkIdentical(actual, expected)
  }

  testRot() {
    console.info('test Vector4.rot()')
    const a = new Vector4(3, 6, 3, 6)

    const α = 180

    const expected = [3, -6, -3, 6]
    a.rot(α)
    const actual = [a. x, a.y, a.z, a.w]
    this.checkIdenticalRounded(actual, expected)
  }
}