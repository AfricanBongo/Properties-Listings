import React from 'react';

interface Props {
    label: string,
    children: React.ReactNode
}
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