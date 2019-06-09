import Matrix2 from '../../../Library/Math/Matrix2.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix2 Class. */
export default class TestMatrix2 extends TestMatrix {
  /**
   * Create and run the tests
   */
  constructor() {
    super()
    console.info('testing Matrix2')
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
    console.info('test Matrix2.add()')
    const firstMatrix = [
      1, 6,
      3, 8,
    ]

    const secondMatrix = [
      4, 3,
      1, 2,
    ]

    const expected = [
      5, 9,
      4, 10,
    ]

    const matrix = new Matrix2(firstMatrix)
    matrix.add(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Matrix2.sub()')
    const firstMatrix = [
      1, 6,
      3, 8,
    ]

    const secondMatrix = [
      4, 3,
      1, 2,
    ]

    const expected = [
      -3, 3,
      2, 6,
    ]

    const m = new Matrix2(firstMatrix)
    matrix.sub(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

  testMul() {
    console.info('test Matrix2.mul()')
    const firstMatrix = [
      1, 6,
      3, 8,
    ]

    const secondMatrix = [
      4, 3,
      1, 2,
    ]

   const expected = [
      10, 15,
      20, 25,
    ]

    const matrix = new Matrix2(firstMatrix)
    matrix.mul(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the multiplication method with an identity matrix.
   */
  testMulIdentity() {
    console.info('test Matrix2.mul() by identity matrix')
    const firstMatrix = [
      1, 6,
      3, 8,
    ]

    const secondMatrix = [
      1, 0,
      0, 1,
    ]

   const expected = [
      1, 6,
      3, 8,
    ]

    const matrix = new Matrix2(firstMatrix)
    matrix.mul(secondMatrix)
    const actual = matrix.items
    this.checkIdentical(actual, expected)
  }

  /**
   * Test the rotation method.
   */
  testRot() {
    console.info('test Matrix2.rot()')
    const α = 90
    const a = [
        1, 0,
        5, 0,
    ]
    const expected = [
        -5, 0,
        1, 0,
    ]
    const matrix = new Matrix2(firstMatrix)
    matrix.rot(α)
    const actual = matrix.items
    this.checkIdenticalRounded(actual, expected)
  }

}