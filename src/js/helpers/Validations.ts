export class Validations {
  public static withoutUppercaseAndAccents(strEncrypt: string): boolean {
    const REG_EXP =
      /^[a-z\u002C\u002E\u003B\u0589\u00BF\u003F\u00A1\u0021\ñ\s]+$/;
    if (REG_EXP.test(strEncrypt)) return true;
    return false;
  }
}
