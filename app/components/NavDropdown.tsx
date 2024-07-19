import React from 'react';

interface Props {
    label: string,
    children: React.ReactNode
}

/**
 * A dropdown menu for the navigation bar
 * @param label - the label of the dropdown
 * @param children - the React nodes that can be wrapped by the drop-down.
 * @constructor
 */
const NavDropdown = ({label, children}: Props) => {
    return (
            <li>
                <details>
                    <summary>{label}</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                        {children}
                    </ul>
                </details>
            </li>
    );
};

export default NavDropdown;