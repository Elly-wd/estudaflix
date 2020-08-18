import React from 'react';

function ButtonLink(props) {
    return (
       <a href={props.href} className={props.className}>
           Adicionar Contribuição
       </a>
    );
}

export default ButtonLink;