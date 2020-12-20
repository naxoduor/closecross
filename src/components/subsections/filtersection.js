import React from 'react'
import Button from '../ButtonComponent'

export default function FilterSection() {
    return (
        <div style={{padding:"20px"}}>
            <span>select assets type and period</span>
            <span><Button bgcolor="#1E2122" color="green" variant="button" text="Filter" border="2px solid green" padding="2px" margin="10px"/></span>
        </div>
    )
}
