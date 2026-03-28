"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Color, Vector3 } from "three";

interface CarViewerProps {
  colors: string[];
  accent: string;
}

const CarMesh = ({ colors }: { colors: string[] }) => {
  const primary = new Color(colors[0] ?? "#ff2d55");
  const secondary = new Color(colors[1] ?? "#111");
  const tertiary = new Color(colors[2] ?? "#f6d500");

  return (
    <group rotation={[0, Math.PI / 6, 0]}>
      <mesh position={[0, 0.55, 0]} castShadow>
        <boxGeometry args={[2.8, 0.6, 1.4]} />
        <meshStandardMaterial color={primary} roughness={0.28} metalness={0.5} />
      </mesh>

      <mesh position={[0, 0.95, -0.05]} castShadow>
        <boxGeometry args={[1.6, 0.4, 1.1]} />
        <meshStandardMaterial color={secondary} roughness={0.32} metalness={0.4} />
      </mesh>

      <mesh position={[0.9, 0.7, 0]} rotation={[0, 0.1, 0]}>
        <boxGeometry args={[1.2, 0.45, 1]} />
        <meshStandardMaterial color={tertiary} roughness={0.25} metalness={0.55} />
      </mesh>

      {[1.1, -1.1].map((x) => (
        <mesh key={x} position={[x, 0.3, 0.75]}>
          <cylinderGeometry args={[0.32, 0.32, 0.4, 20]} />
          <meshStandardMaterial color="#1c1c1c" />
        </mesh>
      ))}
      {[1.1, -1.1].map((x) => (
        <mesh key={`rear-${x}`} position={[x, 0.3, -0.75]}>
          <cylinderGeometry args={[0.32, 0.32, 0.4, 20]} />
          <meshStandardMaterial color="#1c1c1c" />
        </mesh>
      ))}

      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 3.6, 32]} />
        <meshStandardMaterial color={secondary} />
      </mesh>

      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.2, 0.5, 0.8]} />
        <meshStandardMaterial color="#111" roughness={0.4} metalness={0.3} />
      </mesh>
    </group>
  );
};

export const CarViewer = ({ colors, accent }: CarViewerProps) => {
  return (
    <div className="glow-edge relative h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black via-slate-950 to-[#0a0f1c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0" style={{ boxShadow: `inset 0 0 60px ${accent}33` }} />
      <Suspense fallback={<div className="absolute inset-0 grid place-items-center text-slate-400">Loading car...</div>}>
        <Canvas shadows camera={{ position: new Vector3(4, 3, 5), fov: 40 }}>
          <color attach="background" args={["#05070d"]} />
          <ambientLight intensity={0.35} />
          <spotLight position={[5, 8, 5]} angle={0.5} intensity={1.4} penumbra={0.6} castShadow />
          <pointLight position={[-6, 4, -4]} intensity={0.5} />
          <CarMesh colors={colors} />
          <OrbitControls enableDamping dampingFactor={0.08} maxPolarAngle={Math.PI / 2.1} />
        </Canvas>
      </Suspense>
    </div>
  );
};
