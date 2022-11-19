import "aframe";
import { Entity } from "aframe-react";

export default function Beam (props) {
  return (
    <Entity
      geometry={{ primitive: "cylinder", radius: 0.003, height: 400, }}
      position={{x:0,y:0,z:0}}
      segments-height={1}
      segments-radial={6}
      material={{ shader: "flat", color:"blue", metalness: 0.5, transparent: true, opacity:0.6}} 
    />
  )
}