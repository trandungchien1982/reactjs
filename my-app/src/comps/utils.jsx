import React, { useState, useEffect } from 'react';

export const initialState = { count: 10 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

export default reducer;


// FOR FormState definitions
export const initialFormState = {
  name: '',
  email: '',
  password: '',
  errors: {},
  isSubmitting: false,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE':
      return {
        ...state, // Luôn giữ lại state cũ
        [action.field]: action.value, // Cập nhật trường cụ thể
        errors: { // Có thể xóa lỗi khi người dùng gõ lại
            ...state.errors,
            [action.field]: undefined
        }
      };
    case 'SET_ERRORS':
        return {
            ...state,
            errors: action.errors // Cập nhật object lỗi
        };
    case 'SET_SUBMITTING':
        return {
            ...state,
            isSubmitting: action.isSubmitting
        };
    case 'RESET_FORM':
      return initialFormState; // Reset về trạng thái ban đầu
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
