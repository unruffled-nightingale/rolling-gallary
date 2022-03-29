

function Spotlight() {
  // This reference gives us direct access to the THREE.Mesh object
  return (
    <spotLight intensity={1} position={[0, 10, 0]} lookAt={[0, 0, 0]} penumbra={0.4} castShadow/>
  )
}

export default Spotlight;