import './filtrosSwitche.css'
import React from 'react';

const FiltrosSwitche = ({ checked, onChange }) => {
    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className="slider round"></span>
        </label>
    );
};

export default FiltrosSwitche;