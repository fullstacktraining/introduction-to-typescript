function greet(name: string, language:string = 'en', exclamationMark?: string): string {
  if (language === 'en') {
    return `Hello ${name}${exclamationMark}`;
  } else if (language === 'es') {
    return `Hola ${name}${exclamationMark}`;
  } else {
    return `Yo, ${name}${exclamationMark}`;
  }
}

greet('John');
greet('Alejandro', 'es');
greet('John', 'es', '!');