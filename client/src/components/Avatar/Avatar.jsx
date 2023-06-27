import React from 'react'

const Avatar = ({children,backgroundColor,px,py,padding,
    color,
    borderRadius,
    fontSize,cursor,
    textAlign}) =>{ 
    const style={
        backgroundColor,
        padding:`${py} ${px}`,
        color:color || "black",
        borderRadius,
        fontSize,
        textAlign:"Center",
        cursor:cursor || null,
        textDecoration:"none"
    }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
