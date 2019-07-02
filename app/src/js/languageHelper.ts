import Strings from "./strings";

export class LanguageHelperBasic {

    _activeLanguage = "de" ;
    _strings: {
        [propsName:string]: { [propsName: string]: string }
    };


    constructor(strings:  {
        [propsName:string]: { [propsName: string]: string }
    }) {
        this._strings = strings
    }

    getString = (name: string): string => {
        return this._strings[this._activeLanguage] ? this._strings[this._activeLanguage][name] : this._strings["de"][name];
    };


    setLanguage = (language: string) => {
        this._activeLanguage = language
    }


}


const LanguageHelper  = new LanguageHelperBasic(Strings);
export default LanguageHelper