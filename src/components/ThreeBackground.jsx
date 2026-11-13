import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground({ mode = 'cyber' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Core Wireframe Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(7.5, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: mode === 'hyper' ? 0xa855f7 : 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: mode === 'zen' ? 0.15 : 0.32,
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(8, 1, -4);
    scene.add(icosahedron);

    // Inner Glowing Core
    const coreGeo = new THREE.OctahedronGeometry(3.6, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    icosahedron.add(coreMesh);

    // Orbiting Torus Ring
    const torusGeo = new THREE.TorusGeometry(11, 0.08, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: mode === 'hyper' ? 0xec4899 : 0x22d3ee,
      transparent: true,
      opacity: 0.35,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    icosahedron.add(torus);

    // Floating Particles Starfield
    const particleCount = mode === 'zen' ? 400 : 1100;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 85;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: mode === 'hyper' ? 0xc084fc : 0x67e8f9,
      size: 0.18,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x22d3ee, 2, 100);
    pointLight.position.set(15, 15, 15);
    scene.add(pointLight);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const speedMultiplier = mode === 'hyper' ? 2.4 : mode === 'zen' ? 0.35 : 1;
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      icosahedron.rotation.y += 0.004 * speedMultiplier;
      icosahedron.rotation.x += 0.002 * speedMultiplier;
      coreMesh.rotation.y -= 0.01 * speedMultiplier;
      torus.rotation.z += 0.006 * speedMultiplier;
      particles.rotation.y += 0.0008 * speedMultiplier;

      camera.position.x += (mouseX * 3.5 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 2.5 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      icoGeo.dispose();
      icoMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, [mode]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"
    />
  );
}
