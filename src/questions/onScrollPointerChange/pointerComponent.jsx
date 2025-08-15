import './pointerComponent.css';
import React, { useState } from 'react';
export default function Pointer (){
    const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
    const handleScroll = (event) => {
            setPointerPosition({
                x: event.clientX,
                y: event.clientY
            })
    }
    return (
        <div  onPointerMove={handleScroll} style={{position: 'relative', width: '100vw',
        height: '100vh'}}>
            <div  style={{   backgroundColor: "red",
                                width: '1rem',  height:"1rem",
                                bordeRadius: "50%",
                                position: "absolute",
                                transform:`translate(${pointerPosition.x}px,${pointerPosition.y}px)`}} >
                
            </div>
        </div>
    )
}