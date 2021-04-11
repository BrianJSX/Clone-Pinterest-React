import React from 'react';
import './style.scss';
import AddIcon from '@material-ui/icons/Add';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function ActionIndex() {
    return (
        <div className="actionIndex">
            <div className="actionIndex__addIcon">
                <AddIcon></AddIcon>
            </div>
            <div className="actionIndex__addIcon">
                <HelpOutlineIcon></HelpOutlineIcon>
            </div>
        </div>
    )
}

export default ActionIndex;
