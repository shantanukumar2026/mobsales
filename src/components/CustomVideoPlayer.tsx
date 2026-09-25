"use client";
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomVideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="video-player-container" style={{ position: 'relative', width: '100%', marginTop: '3rem', padding: '1rem' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Glow / Backlight */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(9, 72, 150, 0.4) 0%, transparent 70%)', zIndex: 0, filter: 'blur(40px)', transform: 'translateY(10px)', transition: 'opacity 0.5s', opacity: isHovered ? 1 : 0.6 }} />

      {/* Main Video Element */}
      <motion.div 
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          position: 'relative', 
          width: '100%', 
          aspectRatio: '16/9', 
          borderRadius: '20px', 
          overflow: 'hidden', 
          backgroundColor: '#050a12',
          boxShadow: '0 30px 80px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset',
          zIndex: 1,
          cursor: 'none' // We will use a custom hover cursor
        }}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'opacity 0.4s' }}
        />
        
        {/* Cinematic Vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.5) 100%)', pointerEvents: 'none' }} />

        {/* Industrial HUD Elements - Grid and Crosshairs */}
        <div style={{ position: 'absolute', top: '20px', left: '20px', width: '20px', height: '20px', borderTop: '2px solid rgba(255,255,255,0.4)', borderLeft: '2px solid rgba(255,255,255,0.4)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '20px', height: '20px', borderBottom: '2px solid rgba(255,255,255,0.4)', borderRight: '2px solid rgba(255,255,255,0.4)', pointerEvents: 'none' }} />

        {/* Custom Glass Cursor that follows mouse (simulated centrally for now) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '100px', height: '100px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', pointerEvents: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
            >
              {isPlaying ? <Pause size={32} strokeWidth={1} /> : <Play size={32} strokeWidth={1} style={{ marginLeft: '4px' }} />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Minimalist Bottom Controls */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary)' }} />
              <span style={{ color: '#fff', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600 }}>LIVE RENDER</span>
            </div>
          </div>

          <button 
            onClick={toggleMute}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Floating Glassmorphic Metric Cards overlapping the frame (Break the grid) */}
      <motion.div 
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ position: 'absolute', bottom: '-10px', left: '-10px', padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)', borderRadius: '12px', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', zIndex: 2 }}
      >
        <div className="text-label" style={{ color: 'var(--color-text)', opacity: 0.5, fontSize: '0.65rem' }}>TOLERANCE</div>
        <div style={{ color: 'var(--color-text)', fontWeight: 900, fontSize: '1.25rem' }}>±0.01mm</div>
      </motion.div>

      <motion.div 
        animate={{ y: isHovered ? 10 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        style={{ position: 'absolute', top: '10%', right: '-20px', padding: '1rem', background: 'rgba(9, 72, 150, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '12px', boxShadow: '0 15px 35px rgba(9, 72, 150, 0.2)', zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.75rem' }}
      >
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Maximize2 size={14} color="#fff" />
        </div>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>CAD SCALE</div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>1:1</div>
        </div>
      </motion.div>
    </div>
  );
}
