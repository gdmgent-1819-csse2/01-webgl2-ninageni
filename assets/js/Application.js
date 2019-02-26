import Tests from './Tests/Tests.js'

/** Class for the application. */
export default class Application 
{
  /**
   * Create a new application.
   */
  constructor()
  {
    const tests = true
    if (tests) {
        new Tests()
    }
  }
}