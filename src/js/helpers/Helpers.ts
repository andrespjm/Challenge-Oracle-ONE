export class Helpers {
  public static maxChar = 300;
  static async copyText(text: string): Promise<string> {
    return navigator.clipboard.writeText(text).then(
      () => "Copiado!",
      () => "Ups! No se copio"
    );
  }

  static characterCounter(element: HTMLTextAreaElement): number {
    let subtraction = this.maxChar - element.value.length;
    if (subtraction <= 0) subtraction = 0;
    return subtraction;
  }
}
