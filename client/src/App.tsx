import type { Component } from 'solid-js';
import { Display } from './Display';

const App: Component = () => {
  return (
    <>
      <p class="text-4xl text-green-700 text-center py-20">Games!</p>
      <Display />
    </>
  );
};

export default App;
