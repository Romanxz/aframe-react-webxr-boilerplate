import "aframe";
import "super-hands";
import { Entity } from "aframe-react";

export default function Boxxx({ scale, position, animation, events }) {
  return (
    <Entity
      geometry={{ primitive: "box" }}
      material={{ shader: "standard", metalness: 0.5 }}
      scale={scale}
      position={position}
      animation={animation}
      events={events}
      hoverable 
      grabbable 
      stretchable 
      draggable 
      dropppable
      // animation__use={{
      //   property: "scale",
      //   to: "1.25 1.25 1.25",
      //   loop: false,
      //   dur: 400,
      //   startEvents: "mouseenter",
      //   pauseEvents: "mousedown",
      //   resumeEvents: "mouseup"
      // }}
      // animation__fusing={{
      //   property: "scale",
      //   startEvents: "mousedown",
      //   dur: 1500,
      //   loop: true,
      //   dir: "alternate",
      //   to: "0.1 0.1 0.1"
      // }}
      // animation__unuse={{
      //   property: "scale",
      //   to: "0.75 0.75 0.75",
      //   loop: false,
      //   dur: 400,
      //   startEvents: "mouseleave",
      //   pauseEvents: "mousedown",
      //   resumeEvents: "mouseup"
      // }}
      // animation={animation}
      // animation__2={animation__2}
      // animation__3={animation__3}
    />
  );
}