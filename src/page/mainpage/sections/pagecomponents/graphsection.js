import React from 'react'
import { Chart } from 'react-charts'

export default function GraphSection() {

    const data = React.useMemo(
        () => [
            {
                data: [{ x: 1, y: 0 }, { x: 2, y: 10 }, { x: 3, y: 0 },{x:4,y:10},{x:5,y:0},{x:6,y:10},{x:7,y:0}]
            },
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    return (
        <div style={{
            width: '200px',
            height: '88px'
        }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
}
