import Matrix4 from '../../../Library/Math/Matrix4.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix4 Class. */
export default class TestMatrix4 extends TestMatrix {
  /**
   * Create and run the tests
   */
  constructor() {
    super()
    console.info('testing Matrix4')
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
    console.info('test Matrix4.add()')
    const a = [
      1, 2, 3, 4,
      1, 7, 6, 5,
      2, 3, 4, 5, 
      3, 6, 7, 6,
    ]

    const b = [
      1, 2, 3, 4,
      1, 7, 6, 5,
      2, 3, 4, 5,
      3, 6, 7, 6,
    ]

    const expected = [
      2, 4, 6, 8,
      2, 14, 12, 10,
      4, 6, 8, 10,
      6, 12, 14, 12,
    ]

    const m = new Matrix4(a)
    m.add(b)
    const actual = m.items
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Matrix4.sub()')
    const a = [
      1, 2, 3, 4,
      1, 7, 6, 5,
      2, 3, 4, 5, 
      3, 6, 7, 6,
    ]

    const b = [
      1, 2, 3, 4,
      1, 7, 6, 5,
      2, 3, 4, 5,
      3, 6, 7, 6,
    ]

    const expected = [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
    ]

    const m = new Matrix4(a)
    m.sub(b)
    const actual = m.items
    this.checkIdentical(actual, expected)
  }

  testMul() {
    console.info('test Matrix4.mul()')
    const a = [
      1, 2, 3, 4,
      1, 7, 6, 5,
      2, 3, 4, 5, 
      3, 6, 7, 6,
    ]

    const b = [
      1, 2, 3, 4,
      1, 7, 6, 5,
      2, 3, 4, 5,
      3, 6, 7, 6,
    ]

    const expected = [
      21, 49, 55, 53,
      35, 99, 104, 99,
      28, 67, 75, 73,
      41, 105, 115, 113,
    ]

    const m = new Matrix4(a)
    m.mul(b)
    const actual = m.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the multiplication method with an identity matrix.
   */
  testMulIdentity() {
    console.info('test Matrix4.mul() by identity matrix')
    const a = [
      1, 6, 5, 9,
      3, 8, 4, 15,
      2, 4, 7, 23, 
      9, 15, 2, 13,
    ]

    const b = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ]

    const expected = [
      1, 6, 5, 9,
      3, 8, 4, 15,
      2, 4, 7, 23, 
      9, 15, 2, 13,
    ]

    const m = new Matrix4(a)
    m.mul(b)
    const actual = m.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the rotation method.
   */
  testRot() {
    console.info('test Matrix4.rot()')
    const α = 180
    const a = [
      1, 2, 3, 4,
      1, 7, 6, 5,
      2, 3, 4, 5, 
      3, 6, 7, 6,
    ]
    const expected = [
      1, 2, 3, 4,
      -1, -7, -6, -5,
      -2, -3, -4, -5, 
      3, 6, 7, 6,
    ]
    const m = new Matrix4(a)
    m.rot(α)
    const actual = m.items
    this.checkIdenticalRounded(actual, expected)
  }
}