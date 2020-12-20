import React from 'react'
import Button from '../ButtonComponent'
import DropdownComponent from '../dropdown'
export default function TrendingSection() {

    const style={
        display:"flex",
        flexDirection:"row",
        padding:"20px"
}
    return (
        <div style={style}>
            <div>units:</div>
            <div><Button bgcolor="#1E2122" color="green" variant="button" text="%" border="2px solid green" padding="1px"/></div>
            <div><Button bgcolor="green" color="#1E2122" variant="button" text="$" border="2px solid green" padding="1px"/></div>
            <div style={{marginLeft:"20px"}}>Sort By</div>
            <div><DropdownComponent/></div>
        </div>
    )
}
