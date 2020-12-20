import React from 'react'
import { Chart } from 'react-charts'

export default function ChartSection() {
    const data = React.useMemo(
        () => [
            {
                data: [{ x: 1, y: 10 },{x:1.5,y:5}, { x: 2, y: 10 },{x:2.5,y:5}, { x: 3, y: 0 },{x:3.5,y:5},{x:4,y:0},{x:5,y:0},{x:5.5,y:10}]
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
