import React from 'react';
// import 'Typography.css';

const Typography =(props) => {
    return <>
        <h1 className={props.className}>{props.children}</h1>
        
    </>
};

export default Typography;