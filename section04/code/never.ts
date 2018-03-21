function error(): never {
  throw new Error('error!');
}

function fail() {
  return error();
}

function infinite(): never {
  while (true) { }
}