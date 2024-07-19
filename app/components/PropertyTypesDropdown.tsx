import React from 'react';
import DropdownCheckbox from "@/app/components/DropdownCheckbox";

interface Props {
    onTypeSelected: (value: string) => void;
}

/**
 * A dropdown menu that displays property types available
 * @param onTypeSelected - callback function when a property type is selected
 * @constructor
 */
const PropertyTypesDropdown = ({onTypeSelected}: Props) => {
    return (
        <ul className="menu menu-horizontal p-0">
            <li>
                <details className="dropdown h-full">
                    <summary className="outline outline-1 outline-gray-300 p-4 h-full">
                        <span className="pr-20 text-gray-400 font-semibold">Property Types</span>
                    </summary>
                    <ul className="menu dropdown-content bg-white rounded-box z-[1] w-48 p-2 shadow">
                        <li className="font-bold px-2 pt-2 pb-4">
                            Commercial
                        </li>
                        <li>
                            <DropdownCheckbox checked={false} label="Commercial"/>
                        </li>
                        <li>
                            <DropdownCheckbox checked={false} label="Educational"/>
                        </li>
                        <li>
                            <DropdownCheckbox checked={false} label="Leisure/Hospitality"/>
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
    );
};

export default PropertyTypesDropdown;