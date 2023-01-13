export abstract class ClipboardFn {
  static async copyText(text: string): Promise<string> {
    return navigator.clipboard.writeText(text).then(
      () => "Copiado!",
      () => "Ups! No se copio"
    );
  }
}
