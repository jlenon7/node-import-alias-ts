import { SomeException } from '#src/Exceptions/SomeException'

export class Helper {
  public static log() {
    console.log('hello world!')
  }

  public static exception() {
    throw new SomeException('something went wrong!')
  }
}
