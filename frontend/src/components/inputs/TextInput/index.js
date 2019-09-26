import React, { useCallback } from 'react';

import { TextField } from '@material-ui/core';

const TextInput = ({ label, helperText, value = '', onChange = () => {}, error, disabled, rawOnChange = false }) => {
    const handleChange = useCallback(
        e => {
            if (rawOnChange) {
                onChange(e);
            } else {
                onChange(e.target.value);
            }
        },
        [onChange]
    );

    return <TextField fullWidth label={label} value={value} onChange={handleChange} helperText={error || helperText} error={error} disabled={disabled} />;
};

export default TextInput;
