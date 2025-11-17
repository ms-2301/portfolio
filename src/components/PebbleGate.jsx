import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const PebbleRevealGame = ({ onUnlock }) => {
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [pebbleCount, setPebbleCount] = useState(0);
  const [clearedCount, setClearedCount] = useState(0);

  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint, Events } = Matter;

    const canvas = canvasRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 0.3;

    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "#0a0a0a"
      }
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Generate colorful pebbles
    const pebbles = [];
    const colors = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"];
    
    for (let i = 0; i < 2500; i++) {
      const radius = 8 + Math.random() * 8;
      const circle = Bodies.circle(
        Math.random() * width,
        Math.random() * (height * 0.6),
        radius,
        {
          restitution: 0.6,
          frictionAir: 0.02,
          friction: 0.1,
          render: {
            fillStyle: colors[Math.floor(Math.random() * colors.length)]
          }
        }
      );
      pebbles.push(circle);
      World.add(world, circle);
    }
    setPebbleCount(pebbles.length);

    // Walls
    World.add(world, [
      Bodies.rectangle(width / 2, -30, width, 60, { isStatic: true }),
      Bodies.rectangle(width / 2, height + 30, width, 60, { isStatic: true }),
      Bodies.rectangle(-30, height / 2, 60, height, { isStatic: true }),
      Bodies.rectangle(width + 30, height / 2, 60, height, { isStatic: true })
    ]);

    // Mouse/Touch interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.3, render: { visible: false } }
    });
    World.add(world, mouseConstraint);

    // Touch event handling
    let lastPosition = null;
    let isPressed = false;

    const handleStart = (x, y) => {
      isPressed = true;
      lastPosition = { x, y };
    };

    const handleMove = (x, y) => {
      if (!isPressed) return;

      if (lastPosition) {
        const dx = x - lastPosition.x;
        const dy = y - lastPosition.y;
        const swipeForce = Math.sqrt(dx * dx + dy * dy);

        // Remove pebbles on swipe path
        if (swipeForce > 2) {
          pebbles.forEach((pebble) => {
            if (!pebble.isRemoved) {
              const dist = Math.hypot(pebble.position.x - x, pebble.position.y - y);
              
              if (dist < 40) {
                World.remove(world, pebble);
                pebble.isRemoved = true;
                setClearedCount(prev => prev + 1);
              }
            }
          });
        }
      }
      lastPosition = { x, y };
    };

    const handleEnd = () => {
      isPressed = false;
      lastPosition = null;
    };

    // Mouse events
    canvas.addEventListener('mousedown', (e) => {
      const rect = canvas.getBoundingClientRect();
      handleStart(e.clientX - rect.left, e.clientY - rect.top);
    });

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      handleMove(e.clientX - rect.left, e.clientY - rect.top);
    });

    canvas.addEventListener('mouseup', handleEnd);
    canvas.addEventListener('mouseleave', handleEnd);

    // Touch events
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      handleStart(touch.clientX - rect.left, touch.clientY - rect.top);
    });

    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      handleMove(touch.clientX - rect.left, touch.clientY - rect.top);
    });

    canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      handleEnd();
    });

    canvas.addEventListener('touchcancel', (e) => {
      e.preventDefault();
      handleEnd();
    });

    // Check center area
    const checkCenter = () => {
      const cx = width / 2;
      const cy = height / 2;
      const radius = 150;

      const blocking = pebbles.filter((b) => {
        if (b.isRemoved) return false;
        const dx = b.position.x - cx;
        const dy = b.position.y - cy;
        return Math.hypot(dx, dy) < radius;
      });

      if (blocking.length < 3 && !revealed) {
        setRevealed(true);
      }
    };

    const interval = setInterval(checkCenter, 200);

    // Cleanup
    return () => {
      clearInterval(interval);
      
      // Remove event listeners
      canvas.removeEventListener('mousedown', handleStart);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseup', handleEnd);
      canvas.removeEventListener('mouseleave', handleEnd);
      canvas.removeEventListener('touchstart', handleStart);
      canvas.removeEventListener('touchmove', handleMove);
      canvas.removeEventListener('touchend', handleEnd);
      canvas.removeEventListener('touchcancel', handleEnd);
      
      try {
        Render.stop(render);
        Runner.stop(runner);
        World.clear(world);
        Engine.clear(engine);
        if (render.textures) render.textures = {};
      } catch (e) {
        console.error("Cleanup error:", e);
      }
    };
  }, [revealed]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", margin: 0, padding: 0 }}
      />
      
      {/* Instructions */}
      <div style={{
        position: "absolute",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        color: "#fff",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        pointerEvents: "none",
        textShadow: "0 2px 10px rgba(0,0,0,0.8)"
      }}>
        Swipe to unclock the Portfolio!
        <div style={{ fontSize: "16px", marginTop: "8px", opacity: 0.8 }}>
          Cleared: {clearedCount} / {pebbleCount}
        </div>
      </div>

      {/* Hidden unlock button that reveals when center is clear */}
      {revealed && (
        <button
          onClick={onUnlock}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px 40px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#fff",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 10px 40px rgba(102, 126, 234, 0.6)",
            animation: "fadeIn 0.5s ease-in, pulse 2s infinite",
            zIndex: 10
          }}
        >
          🔓 Unlock My Portfolio
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 10px 40px rgba(102, 126, 234, 0.6); }
          50% { box-shadow: 0 10px 60px rgba(102, 126, 234, 0.9); }
        }
      `}</style>
    </div>
  );
};

export default PebbleRevealGame;