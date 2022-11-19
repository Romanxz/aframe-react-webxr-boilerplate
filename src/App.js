import "aframe";
import "aframe-environment-component";
import "super-hands";
import "aframe-extras";
import "aframe-event-set-component";
import { Entity, Scene } from "aframe-react";

function App() {

  return (
    <>
      <div style={{ height: 100, width: 200 }} />
      <Scene renderer="antialias: true;">
        <Entity
              camera={{ active: true, fov: 80 }}
              // movement-controls
              // look-controls={{ enabled: true }}
              // wasd-controls={{ enabled: true }}
              position={{ x: 4, y: 2, z: 2 }}
            />
        <Entity
            id="LH"
            raycaster="objects: .collidable; lineColor: red; lineOpacity: 0.5"
            super-hands
            laser-controls={{ hand: "left" }}
          />
        <Entity
            id="RH"
            raycaster="objects: .collidable; lineColor: green; lineOpacity: 0.5"
            super-hands
            laser-controls={{ hand: "right"}}
          />
        <Entity
          className="collidable"
          environment={{
            preset: "dream",
            seed: 10,
            lightPosition: { x: 0.0, y: 0.03, z: -0.5 },
            shadow: true,
            fog: 0.8,
            ground: "hills",
            groundYScale: 10,
            groundTexture: "walkernoise",
            groundColor: "#8a7f8a",
            grid: "none"
          }}
        />
        <Entity
          primitive="a-light"
          type="ambient"
          intensity="1"
          color="#fdfbd3"
        />
        <Entity
          className="collidable"
          geometry={{ primitive: "box", height:0.5, width:0.5, }}
          position={{ x: 0, y: 1, z: -4 }}
          material={{ shader: "standard", color:"purple", metalness: 0.5 }}
          hoverable 
          grabbable 
          stretchable 
          draggable 
          dropppable
          event-set__enter="_event: hover-start; color: #AA0000"
          event-set__leave="_event: hover-end; color: #212121"
        />
        <Entity
          className="collidable"
          geometry={{ primitive: "sphere", radius:0.5 }}
          position={{ x: -2, y: 1, z: -4 }}
          material={{ shader: "standard", color:"blue", metalness: 0.5 }}
          hoverable 
          grabbable 
          stretchable 
          draggable 
          dropppable
          event-set__enter="_event: hover-start; color: #AA0000"
          event-set__leave="_event: hover-end; color: #212121"
        />
        {/* <Entity
          primitive="a-sky"
          material={{
            shader: "standard",
            src:
              "https://raw.githubusercontent.com/mrdoob/three.js/r82/examples/textures/2294472375_24a3b8ef46_o.jpg"
          }}
        /> */}
        {/* <Entity
          primitive="a-plane"
          material={{
            shader: "flat",
            src: "https://cdn.aframe.io/a-painter/images/floor.jpg",
            color: "#3681a3"
          }}
          shadow={{ cast: true }}
          rotation={{ x: -90, y: 0, z: 0 }}
          height="256"
          width="256"
        /> */}
      </Scene>
    </>
  );
}

export default App;
