export default class Matrix4
{
  constructor(items){
    this.items = items || [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
    ]
  }

  /**
   * Add matrices
   * 
   * @param {Matrix4} b
   */
  add(b)
  {
    const a = this.items
    this.items = [
      a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3],
      a[4] + b[4], a[5] + b[5], a[6] + b[6], a[7] + b[7],
      a[8] + b[8], a[9] + b[9], a[10] + b[10], a[11] + b[11],
      a[12] + b[12], a[13] + b[13], a[14] + b[14], a[15] + b[15],
    ]
  }

  /**
   * Subtract matrices
   * 
   * @param {Matrix4} b
   */
  sub(b)
  {
    const a = this.items
    this.items = [
      a[0] - b[0], a[1] - b[1], a[2] - b[2], a[3] - b[3],
      a[4] - b[4], a[5] - b[5], a[6] - b[6], a[7] - b[7],
      a[8] - b[8], a[9] - b[9], a[10] - b[10], a[11] - b[11],
      a[12] - b[12], a[13] - b[13], a[14] - b[14], a[15] - b[15],
    ]
  }
  /**
   * Multiply matrices
   * 
   * @param {Matrix4} b
   */
  mul(b)
  {
    const a = this.items
    const c = []
    c[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12]
    c[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13]
    c[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14]
    c[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15]
    c[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12]
    c[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13]
    c[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14]
    c[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15]
    c[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12]
    c[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13]
    c[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14]
    c[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15]
    c[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12]
    c[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13]
    c[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14]
    c[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15]
    
    this.items = c
  }

  /**
   * Rotate the matrix around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const a = this.items
    const r = [
      1, 0, 0, 0,
      0, cos, -sin, 0,
      0, sin, cos, 0,
      0, 0, 0, 1
    ]
    this.items = r
    this.mul(a);
  }
}