import { useState, useMemo, useReducer } from 'react';
import { formReducer, initialFormState } from './utils';

function SimpleForm() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      dispatch({
        type: 'HANDLE_INPUT_CHANGE',
        field: name,
        value: value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic validation ở đây
    const formErrors = {};
    if (!formState.name) formErrors.name = 'Tên không được để trống';
    if (!formState.email) formErrors.email = 'Email không được để trống';
    // ... các validation khác ...

    if (Object.keys(formErrors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors: formErrors });
    } else {
      dispatch({ type: 'SET_SUBMITTING', isSubmitting: true });
      console.log('Form data:', formState);
      // Simulate API call
      setTimeout(() => {
        alert('Form submitted!');
        dispatch({ type: 'SET_SUBMITTING', isSubmitting: false });
        dispatch({ type: 'RESET_FORM' }); // Reset form sau khi submit
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
        {formState.errors.name && <p style={{ color: 'red' }}>{formState.errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
        {formState.errors.email && <p style={{ color: 'red' }}>{formState.errors.email}</p>}
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        {formState.errors.password && <p style={{ color: 'red' }}>{formState.errors.password}</p>}
      </div>
      <button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? 'Đang gửi...' : 'Gửi Form'}
      </button>
      <button type="button" onClick={() => dispatch({ type: 'RESET_FORM' })}>
        Reset
      </button>
    </form>
  );
}

export default SimpleForm;