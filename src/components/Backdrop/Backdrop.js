import React from 'react';

// import './Backdrop.css';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
    const cssClasses = [classes.Backdrop, props.show ? classes.BackdropOpen : classes.BackdropClose];

    return <div className={cssClasses.join(' ')} onClick={props.closed}></div>

};

export default backdrop;