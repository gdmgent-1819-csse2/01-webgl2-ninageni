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
    const firstMatrix = [
      1, 6, 5, 9,
      3, 8, 4, 15,
      2, 4, 7, 23, 
      9, 15, 2, 13,
    ]

    const secondMatrix = [
      4, 3, 8, 8,
      1, 2, 9, 12,
      4, 5, 10, 4,
      12, 4, 9, 17,
    ]

    const expected = [
      5, 9, 13, 17,
      4, 10, 13, 27,
      6, 9, 17, 27,
      21, 19, 11, 30,
    ]

    const matrix = new Matrix4(firstMatrix)
    matrix.add(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Matrix4.sub()')
    const firstMatrix = [
      1, 6, 5, 9,
      3, 8, 4, 15,
      2, 4, 7, 23, 
      9, 15, 2, 13,
    ]

    const secondMatrix = [
      4, 3, 8, 8,
      1, 2, 9, 12,
      4, 5, 10, 4,
      12, 4, 9, 17,
    ]

    const expected = [
      -3, 3, -3, 1,
      2, 6, -5, 3,
      -2, -1, -3, 19,
      -3, 11, -7, -4,
    ]

    const matrix = new Matrix4(firstMatrix)
    matrix.sub(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

  testMul() {
    console.info('test Matrix4.mul()')
    const firstMatrix = [
      1, 6, 5, 9,
      3, 8, 4, 15,
      2, 4, 7, 23, 
      9, 15, 2, 13,
    ]

    const secondMatrix = [
      4, 3, 8, 8,
      1, 2, 9, 12,
      4, 5, 10, 4,
      12, 4, 9, 17,
    ]

    const expected = [
      138, 76, 193, 253,
      216, 105, 271, 391,
      316, 141, 329, 483,
      215, 119, 344, 481,
    ]

    const matrix = new Matrix4(firstMatrix)
    matrix.mul(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the multiplication method with an identity matrix.
   */
  testMulIdentity() {
    console.info('test Matrix4.mul() by identity matrix')
    const firstMatrix = [
      1, 6, 5, 9,
      3, 8, 4, 15,
      2, 4, 7, 23, 
      9, 15, 2, 13,
    ]

    const secondMatrix = [
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

    const matrix = new Matrix4(firstMatrix)
    matrix.mul(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the rotation method.
   */
  testRot() {
    console.info('test Matrix4.rot()')
    const α = 90
    const firstMatrix = [
      1, 6, 5, 9,
      3, 8, 4, 15,
      2, 4, 7, 23, 
      9, 15, 2, 13,
    ]
    const expected = [
      1, 6, 5, 9,
      -2, -4, -7, -23,
      3, 8, 4, 15, 
      9, 15, 2, 13,
    ]
    const matrix = new Matrix4(firstMatrix)
    matrix.rot(α)
    const actual = matrix.items
    this.checkIdenticalRounded(actual, expected)
  }
}