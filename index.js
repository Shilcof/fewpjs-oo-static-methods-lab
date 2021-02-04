class Formatter {
  //add static methods here
  static smallWords() {
    return new Set([
      'the',
      'a',
      'an',
      'but',
      'of',
      'and',
      'for',
      'at',
      'by',
      'from'
    ]);
  }

  static capitalize(arg) {
    return this.upCase(arg[0]) + arg.slice(1);
  }

  static upCase(arg) {
    for (const el of arg) {
      const charCode = el.charCodeAt(0);
      return (charCode <= 122 && charCode >= 97) ? String.fromCharCode(el.charCodeAt(0) - 32) : el;
    }
  }

  static sanitize(arg) {
    return arg.replace(/[^\w\d-' ]*/g, "");
  }

  static titleize(arg) {
    return this.capitalize(arg.split(" ").map(w => this.titleCapitalize(w)).join(" "));
  }

  static titleCapitalize(arg) {
    return (this.smallWords().has(arg)) ? arg : this.capitalize(arg);
  }
}