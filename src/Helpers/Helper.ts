import { SomeException } from '#src/Exceptions/SomeException'

export class Helper {
  /**
   * Log hello world message.
   */
  public static log() {
    console.log('hello world!')
  }

  /**
   * Throw an exception.
   */
  public static exception() {
    throw new SomeException('something went wrong!')
  }
}
