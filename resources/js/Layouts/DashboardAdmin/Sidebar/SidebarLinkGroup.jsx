import { useState } from "react";

const SidebarLinkGroup = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return <li>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup;
