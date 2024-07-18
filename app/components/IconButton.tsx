import React from 'react';

interface Props {
    additionalClasses?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}
const IconButton = ({additionalClasses = "border-red-400", onClick, children} : Props) => {
    return (
        <button className={`btn btn-square btn-md btn-outline rounded-2xl ${additionalClasses}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default IconButton;