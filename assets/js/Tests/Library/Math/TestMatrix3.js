import Matrix3 from '../../../Library/Math/Matrix3.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix3 Class. */
export default class TestMatrix3 extends TestMatrix {
  /**
   * Create and run the tests
   */
  constructor() {
    super()
    console.info('testing Matrix3')
    this.testAdd()
    this.testSub()
    this.testMul()
    this.testMulIdentity()
    this.testRot()
  }

  /**
   * Test the addition method
   */

  testAdd() {
    console.info('test Matrix3.add()')
    const a = [
      1, 2, 3,
      6, 5, 4,
      7, 6, 3,
    ]

    const b = [
      1, 2, 3,
      6, 5, 4,
      7, 6, 3,
    ]

    const expected = [
      2, 4, 6,
      12, 10, 8,
      14, 12, 6,
    ]

    const m = new Matrix3(a)
    m.add(b)
    const actual = m.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Matrix3.sub()')
    const a = [
      1, 2, 3,
      6, 5, 4,
      7, 6, 3,
    ]

    const b = [
      1, 2, 3,
      6, 5, 4,
      7, 6, 3,
    ]

    const expected = [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ]

    const m = new Matrix3(a)
    m.sub(b)
    const actual = m.items
    this.checkIdentical(actual, expected)
  }

  testMul() {
    console.info('test Matrix3.mul()')
    const a = [
      1, 2, 3,
      6, 5, 4,
      7, 6, 3,
    ]

    const b = [
      1, 2, 3,
      6, 5, 4,
      7, 6, 3,
    ]

    const expected = [
      34, 30, 20,
      64, 61, 50,
      64, 62, 54,
    ]

    const m = new Matrix3(a)
    m.mul(b)
    const actual = m.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the multiplication method with an identity matrix.
   */
  testMulIdentity() {
    console.info('test Matrix3.mul() by identity matrix')
    const a = [
      1, 6, 5,
      3, 8, 4,
      2, 4, 7,
    ]

    const b = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ]

   const expected = [
      1, 6, 5,
      3, 8, 4,
      2, 4, 7,
    ]

    const m = new Matrix3(a)
    m.mul(b)
    const actual = m.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the rotation method.
   */
  testRot() {
    console.info('test Matrix3.rot()')
    const α = 180
    const a = [
      1, 2, 3,
      6, 5, 4,
      7, 6, 3,
    ]
    const expected = [
        -1, -2, -3,
        -6, -5, -4,
        7, 6, 3,
    ]
    const m = new Matrix3(a)
    m.rot(α)
    const actual = m.items
    this.checkIdenticalRounded(actual, expected)
  }
}