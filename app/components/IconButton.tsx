import React from 'react';

interface Props {
    additionalClasses?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

/**
 * A commonly used icon button for the Listings Cards action, e.g. whatsapp and phone call interaction
 * @param additionalClasses - additional Tailwind classes to be added to the button
 * @param onClick - the function to be called when the button is clicked
 * @param children - the React nodes that can be wrapped by the button
 * @constructor
 */
const IconButton = ({additionalClasses = "border-red-400", onClick, children} : Props) => {
    return (
        <button className={`btn btn-square btn-md btn-outline rounded-2xl ${additionalClasses}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default IconButton;