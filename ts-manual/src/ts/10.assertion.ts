const input1 = document.querySelector('#textField')! as HTMLInputElement;
const input2 = document.querySelector<HTMLInputElement>('#textField')!;

const input = document.querySelector<HTMLInputElement>('#textField');
if (input) {
  input.value;
}

//혹은
// const input = document.querySelector('#textField');
// if (input) {
//   (input as HTMLInputElement).value;
// }



/*
const person: {
  readonly name: string;
  readonly age: number;
} = {
  name: 'tiger',
  age: 30
}
  */

const person = {
  name: 'tiger',
  age: 30
} as const

