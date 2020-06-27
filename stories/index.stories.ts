import { useEffect } from '@storybook/client-api';

export default {
  title: 'Demo',
};

export const Hello = () => {
  const h1 = document.createElement('h1');
  h1.innerText = 'Hello world!';
  return h1;
}

export const UseEffect = () => {
  const div = document.createElement('div');
  useEffect(() => {
    div.innerHTML = 'Element mounted!';
  });
  return div;
}
