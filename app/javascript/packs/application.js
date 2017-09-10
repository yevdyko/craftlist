import React from 'react';
import { render } from 'react-dom';

import App from '../App';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('tasks_data');
  const data = JSON.parse(node.getAttribute('data'));

  render(<App tasks={data} />, node);
});
