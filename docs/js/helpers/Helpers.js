var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Helpers {
    static copyText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            return navigator.clipboard.writeText(text).then(() => "Copiado!", () => "Ups! No se copio");
        });
    }
    static characterCounter(element) {
        let subtraction = this.maxChar - element.value.length;
        if (subtraction <= 0)
            subtraction = 0;
        return subtraction;
    }
}
Helpers.maxChar = 300;
