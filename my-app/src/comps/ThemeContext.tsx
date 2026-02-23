import { useState, useMemo, useReducer } from 'react';
import reducer, { initialState } from './utils';

function ThemeContext() {
  return (
      <div style={{border: "5px solid lightgreen"}}>
        ThemeContext Cnt
      </div>
    );
}

export default ThemeContext;