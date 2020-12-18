import React from 'react'
import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';

export default function Icons(props) {
    return <div>
        <Button><SearchIcon /></Button>
        <Button><StarBorderIcon /></Button>
        <Button><CastForEducationIcon /></Button>
    </div>;

}
