"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RocketScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0.2, 6.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const rocket = new THREE.Group();
    rocket.rotation.z = -0.18;
    scene.add(rocket);

    const shellMaterial = new THREE.MeshStandardMaterial({ color: 0xf0ecdc, metalness: 0.78, roughness: 0.24 });
    const redMaterial = new THREE.MeshStandardMaterial({ color: 0xc51f2d, metalness: 0.5, roughness: 0.2, emissive: 0x280408, emissiveIntensity: 0.16 });
    const darkMetal = new THREE.MeshStandardMaterial({ color: 0x151b25, metalness: 0.92, roughness: 0.18 });
    const cockpitMaterial = new THREE.MeshStandardMaterial({ color: 0x092d62, emissive: 0x063d88, emissiveIntensity: 1.3, metalness: 0.75, roughness: 0.12 });
    const redBandMaterial = new THREE.MeshStandardMaterial({ color: 0xd72a32, metalness: 0.55, roughness: 0.2 });

    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.49, 0.56, 1.5, 32),
      shellMaterial,
    );
    rocket.add(body);

    const bodyCap = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 18), shellMaterial);
    bodyCap.scale.y = 0.58;
    bodyCap.position.y = 0.76;
    rocket.add(bodyCap);

    const lowerBand = new THREE.Mesh(
      new THREE.TorusGeometry(0.54, 0.035, 10, 32),
      darkMetal,
    );
    lowerBand.rotation.x = Math.PI / 2;
    lowerBand.position.y = -0.55;
    rocket.add(lowerBand);

    const midBand = new THREE.Mesh(
      new THREE.TorusGeometry(0.51, 0.045, 10, 32),
      redBandMaterial,
    );
    midBand.rotation.x = Math.PI / 2;
    midBand.position.y = 0.05;
    rocket.add(midBand);

    const shoulder = new THREE.Mesh(
      new THREE.TorusGeometry(0.57, 0.07, 10, 32),
      redBandMaterial,
    );
    shoulder.rotation.x = Math.PI / 2;
    shoulder.position.y = 0.66;
    rocket.add(shoulder);

    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.43, 0.92, 32), redMaterial);
    nose.position.y = 1.18;
    rocket.add(nose);

    const noseTip = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.36, 20), shellMaterial);
    noseTip.position.y = 1.82;
    rocket.add(noseTip);

    const noseBand = new THREE.Mesh(
      new THREE.TorusGeometry(0.39, 0.035, 10, 32),
      redBandMaterial,
    );
    noseBand.rotation.x = Math.PI / 2;
    noseBand.position.y = 1.02;
    rocket.add(noseBand);

    const portholeFrame = new THREE.Mesh(
      new THREE.TorusGeometry(0.25, 0.065, 12, 32),
      darkMetal,
    );
    portholeFrame.position.set(0, 0.48, 0.48);
    rocket.add(portholeFrame);

    const porthole = new THREE.Mesh(
      new THREE.CircleGeometry(0.2, 24),
      cockpitMaterial,
    );
    porthole.position.set(0, 0.48, 0.5);
    rocket.add(porthole);

    const finMaterial = redMaterial;
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0.05);
    finShape.lineTo(0.42, -0.08);
    finShape.lineTo(0.55, -0.82);
    finShape.lineTo(0.08, -0.58);
    finShape.closePath();
    const finGeometry = new THREE.ExtrudeGeometry(finShape, { depth: 0.09, bevelEnabled: true, bevelSize: 0.025, bevelThickness: 0.025, bevelSegments: 2 });
    [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].forEach((angle) => {
      const fin = new THREE.Mesh(finGeometry, finMaterial);
      fin.position.set(Math.sin(angle) * 0.48, -0.42, Math.cos(angle) * 0.48);
      fin.rotation.y = angle;
      rocket.add(fin);

      const boot = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 16, 10),
        darkMetal,
      );
      boot.scale.set(1.35, 0.42, 0.85);
      boot.position.set(Math.sin(angle) * 0.72, -1.08, Math.cos(angle) * 0.72);
      rocket.add(boot);
    });

    const nozzleMaterial = darkMetal;
    const flameMaterial = new THREE.MeshStandardMaterial({ color: 0xff9b32, emissive: 0xff3b17, emissiveIntensity: 2.2, transparent: true, opacity: 0.86 });
    const innerFlameMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffd26b, emissiveIntensity: 2.5, transparent: true, opacity: 0.95 });
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.29, 0.28, 20), nozzleMaterial);
    nozzle.position.y = -0.93;
    rocket.add(nozzle);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.7, 16), flameMaterial);
    flame.position.y = -1.38;
    flame.rotation.z = Math.PI;
    rocket.add(flame);
    const innerFlame = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.45, 12), innerFlameMaterial);
    innerFlame.position.y = -1.3;
    innerFlame.rotation.z = Math.PI;
    rocket.add(innerFlame);

    scene.add(new THREE.HemisphereLight(0xb9f6ff, 0x10051e, 2.3));
    const keyLight = new THREE.PointLight(0xffffff, 3, 12);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const pointer = { x: 0, y: 0 };
    const drag = {
      active: false,
      startX: 0,
      startY: 0,
      startRotationX: 0,
      startRotationY: 0,
    };
    let frame = 0;
    const startedAt = performance.now();

    const resize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    const move = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const startDrag = (event: PointerEvent) => {
      drag.active = true;
      drag.startX = event.clientX;
      drag.startY = event.clientY;
      drag.startRotationX = rocket.rotation.x;
      drag.startRotationY = rocket.rotation.y;
      mount.setPointerCapture(event.pointerId);
      mount.classList.add("is-dragging");
    };

    const dragRocket = (event: PointerEvent) => {
      if (!drag.active) return;
      rocket.rotation.y = drag.startRotationY + (event.clientX - drag.startX) * 0.012;
      rocket.rotation.x = drag.startRotationX + (event.clientY - drag.startY) * 0.012;
    };

    const endDrag = (event: PointerEvent) => {
      if (!drag.active) return;
      drag.active = false;
      if (mount.hasPointerCapture(event.pointerId)) mount.releasePointerCapture(event.pointerId);
      mount.classList.remove("is-dragging");
    };

    const animate = (now: number) => {
      const elapsed = (now - startedAt) * 0.001;
      rocket.position.y = Math.sin(elapsed * 1.6) * 0.14;
      if (!drag.active) {
        rocket.rotation.y += (pointer.x * 0.22 - rocket.rotation.y) * 0.035;
        rocket.rotation.x += (-pointer.y * 0.16 - rocket.rotation.x) * 0.035;
      }
      flame.scale.y = 0.85 + Math.sin(elapsed * 14) * 0.16;
      flame.scale.x = 0.92 + Math.sin(elapsed * 11) * 0.08;
      innerFlame.scale.y = 0.8 + Math.sin(elapsed * 18) * 0.16;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    window.addEventListener("pointermove", move, { passive: true });
    mount.addEventListener("pointerdown", startDrag);
    mount.addEventListener("pointermove", dragRocket);
    mount.addEventListener("pointerup", endDrag);
    mount.addEventListener("pointercancel", endDrag);
    resize();
    frame = window.requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", move);
      mount.removeEventListener("pointerdown", startDrag);
      mount.removeEventListener("pointermove", dragRocket);
      mount.removeEventListener("pointerup", endDrag);
      mount.removeEventListener("pointercancel", endDrag);
      window.cancelAnimationFrame(frame);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;
        mesh.geometry?.dispose();
        if (Array.isArray(mesh.material)) mesh.material.forEach((material) => material.dispose());
        else mesh.material?.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="rocket-scene" aria-label="Animated 3D rocket. Drag to rotate." />;
}
