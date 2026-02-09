import { useMemo } from 'react';

interface ProminenceLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ProminenceLogo = ({ className = '', size = 'md' }: ProminenceLogoProps) => {
  const sizeConfig = {
    sm: { width: 180, height: 100, dotSize: 4, gap: 2 },
    md: { width: 280, height: 150, dotSize: 6, gap: 3 },
    lg: { width: 380, height: 200, dotSize: 8, gap: 4 },
  };

  const config = sizeConfig[size];
  
  // Generate arc dots
  const dots = useMemo(() => {
    const arcDots: { x: number; y: number; opacity: number; size: number }[] = [];
    const centerX = config.width / 2;
    const centerY = config.height * 0.7;
    const numRows = 8;
    
    for (let row = 0; row < numRows; row++) {
      const baseRadius = 50 + row * 15;
      const startAngle = Math.PI * 0.15;
      const endAngle = Math.PI * 0.85;
      const numDots = 12 + row * 3;
      
      for (let i = 0; i < numDots; i++) {
        const angle = startAngle + (endAngle - startAngle) * (i / (numDots - 1));
        const radiusVariation = 1 + Math.sin(i * 0.5) * 0.02;
        const radius = baseRadius * radiusVariation * (config.width / 280);
        
        const x = centerX + Math.cos(angle - Math.PI / 2) * radius;
        const y = centerY - Math.sin(angle - Math.PI / 2) * radius * 0.6;
        
        // Fade from bright (left) to darker (right)
        const opacity = 0.4 + 0.6 * (1 - i / numDots);
        const dotSize = config.dotSize * (0.7 + 0.3 * (1 - row / numRows));
        
        arcDots.push({ x, y, opacity, size: dotSize });
      }
    }
    
    return arcDots;
  }, [config]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Arc Logo */}
      <svg 
        width={config.width} 
        height={config.height * 0.65} 
        viewBox={`0 0 ${config.width} ${config.height * 0.65}`}
        className="drop-shadow-[0_0_15px_rgba(0,217,255,0.5)]"
      >
        <defs>
          <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="50%" stopColor="#00D9FF" />
            <stop offset="100%" stopColor="#0099CC" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {dots.map((dot, index) => (
          <circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r={dot.size / 2}
            fill="url(#dotGradient)"
            opacity={dot.opacity}
            filter="url(#glow)"
          />
        ))}
      </svg>
      
      {/* Text Logo */}
      <div className="text-center mt-2">
        <h1 
          className="font-display font-bold tracking-[0.15em] text-glow-cyan"
          style={{ 
            fontSize: size === 'lg' ? '2.5rem' : size === 'md' ? '1.75rem' : '1.25rem',
            color: '#00D9FF',
            textShadow: '0 0 20px rgba(0, 217, 255, 0.5)'
          }}
        >
          PROMINENCE
        </h1>
        <div className="flex items-center justify-center gap-3 mt-1">
          <div 
            className="h-px flex-1 max-w-[60px]" 
            style={{ background: 'linear-gradient(90deg, transparent, #00D9FF)' }}
          />
          <span 
            className="font-display font-medium tracking-[0.3em]"
            style={{ 
              fontSize: size === 'lg' ? '1rem' : size === 'md' ? '0.75rem' : '0.6rem',
              color: '#00D9FF' 
            }}
          >
            BANK
          </span>
          <div 
            className="h-px flex-1 max-w-[60px]" 
            style={{ background: 'linear-gradient(90deg, #00D9FF, transparent)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProminenceLogo;
