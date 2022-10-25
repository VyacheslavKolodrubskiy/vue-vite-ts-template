export class Logger {
  static log(message: string, expected: string) {
    console.log(`%c "${expected}"`, 'color: blue', message)
  }

  static error(message: string, expected: string) {
    console.error(`%c "${expected}"`, 'color: white', message)
  }

  static warn(message: string, expected: string) {
    console.warn(`%c "${expected}"`, 'color: red', message)
  }
}
