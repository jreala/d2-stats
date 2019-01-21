import React from 'react';

const Input = (options = {}) => (
    <input onChange={options.onChange} className={options.className || ''} type={options.type || 'text'} disabled={options.disabled || false} defaultValue={options.default || ''} />
);

export default Input;
