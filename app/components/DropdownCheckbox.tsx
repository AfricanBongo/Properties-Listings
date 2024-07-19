import React from 'react';

interface Props {
    checked: boolean;
    label: string;
}

/**
 * A checkbox that is displayed within a dropdown menu
 * @param checked - the state of the checkbox
 * @param label - the label of the checkbox
 * @constructor
 */
const DropdownCheckbox = ({checked, label}: Props) => {
    return (
        <label className="cursor-pointer">
            <input type="checkbox" className="checkbox"/>
            <span className="label-text">{label}</span>
        </label>
    );
};

export default DropdownCheckbox;