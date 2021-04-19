import React from 'react';

function unusedButton({ label }) {
    return (
        <div data-testid="buttonTest">
            {label}
        </div>
    )
}

export default unusedButton;