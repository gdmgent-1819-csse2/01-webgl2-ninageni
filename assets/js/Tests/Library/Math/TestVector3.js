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
    const firstVector = new Vector3(3, 6, 8)

    const secondVector = new Vector3(2, 3, 5)

    const expected = [5, 9, 13]
    firstVector.add(secondVector)
    const actual = [firstVector. x, firstVector.y, firstVector.z]
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Vector3.sub()')
    const firstVector = new Vector3(3, 6, 8)

    const secondVector = new Vector3(2, 3, 5)

    const expected = [1, 3, 3]
    firstVector.sub(secondVector)
    const actual = [firstVector. x, firstVector.y, firstVector.z]
    this.checkIdentical(actual, expected)
  }

  testScalar() {
    console.info('test Vector3.scalar()')
    const firstVector = new Vector3(3, 6, 8)

    const scalar = 5

    const expected = [15, 30, 40]
    firstVector.scalar(scalar)
    const actual = [firstVector. x, firstVector.y, firstVector.z]
    this.checkIdentical(actual, expected)
  }

  testNorm() {
    console.info('test Vector3.norm()')
    const firstVector = new Vector3(3, 6, 8)

    const expected = [10]
    
    const actual = [firstVector.norm()]
    this.checkIdenticalRounded(actual, expected)
  }

  testDot() {
    console.info('test Vector3.dot()')
    const firstVector = new Vector3(3, 6, 8)

    const secondVector = new Vector3(2, 3, 5)

    const expected = [64]
    firstVector.dot(secondVector)
    const actual = [firstVector.dot(secondVector)]
    this.checkIdentical(actual, expected)
  }

  testRot() {
    console.info('test Vector3.rot()')
    const firstVector = new Vector3(3, 6, 8)

    const α = 90

    const expected = [-6, 3, 8]
    frameElement.rot(α)
    const actual = [firstVector. x, firstVector.y, firstVector.z]
    this.checkIdenticalRounded(actual, expected)
  }
}