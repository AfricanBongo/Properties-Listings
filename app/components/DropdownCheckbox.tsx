import React from 'react';

interface Props {
    checked: boolean;
    label: string;
}
const DropdownCheckbox = ({checked, label}: Props) => {
    return (
        <label className="cursor-pointer">
            <input type="checkbox" className="checkbox"/>
            <span className="label-text">{label}</span>
        </label>
    );
};

export default DropdownCheckbox;