import React from 'react';

function ButtonLink(props) {
// props => { className: "O que alguem passar", href:"/"}
// console.log(props);
    
    return(
        <a className={props.classname} href={props.href}>
            {props.children}
        </a>
    )

}

export default ButtonLink;