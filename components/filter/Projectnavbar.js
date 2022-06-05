import React from 'react';

// filter control
export function NavItem({ value, handlerFilterCategory, active }) {
    let className = 'nav_btn';
    if (active === value) className += ' navbar_active';

    return (
        <li className={className} onClick={() => handlerFilterCategory(value)} role="presentation">
            {value}
        </li>
    );
}

function ProjectsNavbar(props) {
    return (
        <ul className="ProjectNavbar">
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props} />
            <NavItem value="node" {...props} />
            <NavItem value="dajngo" {...props} />
        </ul>
    );
}

export default ProjectsNavbar;
