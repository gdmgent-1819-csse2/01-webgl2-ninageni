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
    const firstMatrix = [
      1, 6, 5,
      3, 8, 4,
      2, 4, 7,
    ]

    const secondMatrix = [
      4, 3, 8,
      1, 2, 9,
      4, 5, 10,
    ]

    const expected = [
      5, 9, 13,
      4, 10, 13,
      6, 9, 17,
    ]

    const matrix = new Matrix3(firstMatrix)
    matrix.add(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Matrix3.sub()')
    const firstMatrix = [
      1, 6, 5,
      3, 8, 4,
      2, 4, 7,
    ]

    const secondMatrix = [
      4, 3, 8,
      1, 2, 9,
      4, 5, 10,
    ]

    const expected = [
      -3, 3, -3,
      2, 6, -5,
      -2, -1, -3,
    ]

    const matrix = new Matrix3(firstMatrix)
    matrix.sub(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

  testMul() {
    console.info('test Matrix3.mul()')
    const firstMatrix = [
      1, 6, 5,
      3, 8, 4,
      2, 4, 7,
    ]

    const secondMatrix = [
      4, 3, 8,
      1, 2, 9,
      4, 5, 10,
    ]

    const expected = [
      30, 40, 112,
      36, 45, 136,
      40, 49, 122,
    ]

    const matrix = new Matrix3(firstMatrix)
    matrix.mul(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the multiplication method with an identity matrix.
   */
  testMulIdentity() {
    console.info('test Matrix3.mul() by identity matrix')
    const firstMatrix = [
      1, 6, 5,
      3, 8, 4,
      2, 4, 7,
    ]

    const secondMatrix = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ]

   const expected = [
      1, 6, 5,
      3, 8, 4,
      2, 4, 7,
    ]

    const matrix = new Matrix3(firstMatrix)
    matrix.mul(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the rotation method.
   */
  testRot() {
    console.info('test Matrix3.rot()')
    const α = 90
    const firstMatrix = [
      1, 6, 5,
      3, 8, 4,
      2, 4, 7,
    ]
    const expected = [
        -3, -8, -4,
        1, 6, 5,
        2, 4, 7,
    ]
    const matrix = new Matrix3(firstMatrix)
    matrix.rot(α)
    const actual = matrix.items
    this.checkIdenticalRounded(actual, expected)
  }
}