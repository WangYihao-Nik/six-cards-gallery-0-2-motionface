import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

const cards = [
  {kind: 'studio', x: 480, y: 160, angle: -5.5},
  {kind: 'halo', x: 1030, y: 133, angle: -4.5},
  {kind: 'type', x: 1580, y: 111, angle: -3.7},
  {kind: 'brief', x: 492, y: 557, angle: -5.0},
  {kind: 'phone', x: 1040, y: 528, angle: -4.1},
  {kind: 'creator', x: 1590, y: 504, angle: -3.4},
] as const;

const ease = Easing.bezier(0.22, 0.72, 0.16, 1);

const WindowView: React.FC = () => (
  <>
    <rect x="0" y="0" width="230" height="330" fill="#f77824" />
    <rect x="18" y="0" width="12" height="330" fill="#ffd471" opacity=".68" />
    <path d="M40 0v330M142 0v330M0 102h230M0 218h230" stroke="#ffcc73" strokeOpacity=".48" strokeWidth="8" />
    <rect x="0" y="0" width="230" height="330" fill="url(#windowGlow)" />
  </>
);

const DeskArtist: React.FC<{x?: number; y?: number; scale?: number}> = ({x = 420, y = 135, scale = 1}) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M45 205c8-70 54-111 109-107 59 3 91 49 98 120z" fill="#101114" />
    <path d="M88 109c-4-41 21-72 57-75 37-3 62 25 59 68-2 32-24 57-57 58-31 0-55-18-59-51z" fill="#efb28b" />
    <path d="M87 99c3-55 32-81 72-76 26 3 46 18 50 48-26-14-47-19-68-12-19 6-34 22-54 40z" fill="#17191e" />
    <path d="M45 220h270v15H45z" fill="#5c2a1d" />
    <path d="M116 201h124v-81h-124z" fill="#16171b" stroke="#9d6844" strokeWidth="5" />
    <path d="M100 211h157l-12 12H112z" fill="#c77b3d" />
    <path d="M0 216h344v21H0z" fill="#34231d" />
    <path d="M12 215l31-74 52 74z" fill="#325646" />
    <path d="M27 195h38v27H27z" fill="#a35930" />
    <path d="M220 121l41-58 34 73" fill="none" stroke="#252629" strokeWidth="8" />
    <path d="M241 138h80v7h-80z" fill="#c48550" />
    <circle cx="280" cy="150" r="25" fill="#ffb145" opacity=".28" />
  </g>
);

const HaloFigure: React.FC = () => (
  <>
    <circle cx="500" cy="148" r="101" fill="#ffb91f" opacity=".98" />
    <circle cx="500" cy="148" r="126" fill="#ffb91f" opacity=".15" filter="url(#glow)" />
    <path d="M371 342c8-112 49-168 128-168 75 0 116 59 124 168z" fill="#17191b" />
    <path d="M445 200c-16-31-8-90 9-116 18-29 73-29 94 0 17 25 19 84 3 116-14 28-36 39-55 39-22 0-37-13-51-39z" fill="#101113" />
    <path d="M425 266l-38 75m207-75 39 75" stroke="#1c1d20" strokeWidth="34" strokeLinecap="round" />
    <path d="M480 253v67m40-67v75" stroke="#353638" strokeWidth="3" opacity=".7" />
    <text x="95" y="185" fill="#dad8d3" fontSize="20" fontFamily="Arial" letterSpacing="1">zero followers</text>
    <text x="635" y="111" fill="#dad8d3" fontSize="17" fontFamily="Arial" letterSpacing=".7">zero social media presence</text>
  </>
);

const TypeCard: React.FC = () => (
  <>
    <rect width="960" height="540" fill="#080909" />
    <text x="480" y="323" textAnchor="middle" fill="#ff7418" fontFamily="Arial Black, Arial" fontSize="170" fontWeight="900" letterSpacing="-8">0.0%</text>
    <text x="480" y="385" textAnchor="middle" fill="#e9e6df" fontFamily="Arial" fontSize="19" letterSpacing="4">THE FIRST VIEW IS A DOOR</text>
    <path d="M84 460h792" stroke="#ff7418" strokeOpacity=".52" strokeWidth="2" />
  </>
);

const BriefCard: React.FC = () => (
  <>
    <rect width="960" height="540" fill="#eeeae0" />
    <path d="M72 54h816" stroke="#cfc8ba" strokeWidth="2" />
    <text x="74" y="104" fill="#d8872d" fontSize="21" fontWeight="700" fontFamily="Arial" letterSpacing="1.7">▧  BRAND DEAL</text>
    <text x="74" y="201" fill="#171717" fontSize="53" fontWeight="800" fontFamily="Arial">Lifestyle Brand</text>
    <text x="74" y="259" fill="#171717" fontSize="53" fontWeight="800" fontFamily="Arial">Collaboration</text>
    <text x="76" y="304" fill="#79756f" fontSize="18" fontFamily="Arial">◉ Remote    ◉ Sponsored Partnership    ◉ Flexible</text>
    <path d="M76 348h810" stroke="#cbc5bb" strokeWidth="2" />
    <text x="76" y="387" fill="#201f1c" fontSize="17" fontWeight="700" fontFamily="Arial" letterSpacing=".6">ABOUT THE OPPORTUNITY</text>
    <text x="76" y="425" fill="#42403c" fontSize="18" fontFamily="Arial">Create engaging stories with a distinct point of view.</text>
    <text x="76" y="456" fill="#42403c" fontSize="18" fontFamily="Arial">Bring your ideas and timely deliverables to life.</text>
    <rect x="76" y="484" width="815" height="42" rx="10" fill="#ff8a09" />
  </>
);

const PhoneCard: React.FC = () => (
  <>
    <rect width="960" height="540" fill="#080b0b" />
    <circle cx="265" cy="260" r="175" fill="#fa6923" opacity=".32" filter="url(#glow)" />
    <circle cx="265" cy="260" r="118" fill="#ff9b30" opacity=".18" />
    <g transform="translate(173 72) rotate(-13 95 195)">
      <rect x="15" y="0" width="192" height="390" rx="33" fill="#121417" stroke="#89643f" strokeWidth="7" />
      <rect x="24" y="14" width="174" height="358" rx="26" fill="#17191b" />
      <circle cx="68" cy="57" r="27" fill="#25272b" stroke="#986332" strokeWidth="5" />
      <circle cx="68" cy="57" r="9" fill="#080a0b" />
      <circle cx="129" cy="57" r="27" fill="#25272b" stroke="#986332" strokeWidth="5" />
      <circle cx="129" cy="57" r="9" fill="#080a0b" />
      <circle cx="68" cy="116" r="27" fill="#25272b" stroke="#986332" strokeWidth="5" />
      <circle cx="68" cy="116" r="9" fill="#080a0b" />
      <path d="M91 240h42" stroke="#323438" strokeWidth="7" strokeLinecap="round" />
    </g>
    <text x="490" y="253" fill="#e8e4dd" fontFamily="Arial" fontSize="24">A small screen,</text>
    <text x="490" y="289" fill="#e8e4dd" fontFamily="Arial" fontSize="24">a very large canvas.</text>
  </>
);

const CreatorCard: React.FC = () => (
  <>
    <rect width="960" height="540" fill="#ff8a18" />
    <rect x="0" y="0" width="960" height="540" fill="url(#sunset)" />
    <path d="M92 0v385m154-385v385m150-385v385" stroke="#ffd56a" strokeOpacity=".63" strokeWidth="11" />
    <path d="M0 384h960v156H0z" fill="#161413" />
    <DeskArtist x={348} y={38} scale={1.65} />
    <path d="M194 0h24v384h-24zm154 0h24v384h-24z" fill="#44291d" opacity=".68" />
  </>
);

const ArtDefs: React.FC = () => (
  <defs>
    <linearGradient id="windowGlow" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffe293" stopOpacity=".12"/><stop offset="1" stopColor="#79241a" stopOpacity=".3"/></linearGradient>
    <linearGradient id="sunset" x1="0" y1="0" x2="0.94" y2="1"><stop stopColor="#ffd359"/><stop offset=".42" stopColor="#ff861f"/><stop offset="1" stopColor="#a82912"/></linearGradient>
    <radialGradient id="glow"><stop stopColor="#ff791b" stopOpacity=".9"/><stop offset="1" stopColor="#ff791b" stopOpacity="0"/></radialGradient>
    <filter id="glow" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="28"/></filter>
  </defs>
);

const Artwork: React.FC<{kind: string}> = ({kind}) => {
  const contents: Record<string, React.ReactNode> = {
    studio: <><rect width="960" height="540" fill="#42130e"/><WindowView/><DeskArtist/></>,
    halo: <><rect width="960" height="540" fill="#050909"/><HaloFigure/></>,
    type: <TypeCard/>, brief: <BriefCard/>, phone: <PhoneCard/>, creator: <CreatorCard/>,
  };
  return <svg viewBox="0 0 960 540" preserveAspectRatio="xMidYMid slice" style={{width: '100%', height: '100%', display: 'block'}}><ArtDefs/>{contents[kind]}</svg>;
};

const Card: React.FC<{card: (typeof cards)[number]; index: number; frame: number}> = ({card, index, frame}) => {
  const reveal = interpolate(frame, [-3, 0], [.94, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const drift = Math.sin(frame / 30 + index * .8) * 3;
  return (
    <div style={{position: 'absolute', left: card.x, top: card.y, width: 510, height: 286, padding: 9, boxSizing: 'border-box', background: '#f0eee9', boxShadow: '0 18px 42px rgba(0,0,0,.58), 0 2px 3px rgba(255,255,255,.22)', transform: `translate3d(0, ${drift}px, 0) rotate(${card.angle}deg) rotateY(${interpolate(index, [0,5], [1.3,-1.3])}deg)`, opacity: reveal}}>
      <Artwork kind={card.kind}/>
    </div>
  );
};

export const GalleryOpening: React.FC = () => {
  const frame = useCurrentFrame();
  const cameraProgress = interpolate(frame, [0, 62], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const zoom = interpolate(cameraProgress, [0, 1], [.86, 1.13]);
  const panX = interpolate(cameraProgress, [0, 1], [-82, -195]);
  const panY = interpolate(cameraProgress, [0, 1], [-38, -80]);
  const subtitle = interpolate(frame, [0, 8, 53, 62], [1, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const topLabel = interpolate(frame, [0, 15], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  return (
    <AbsoluteFill style={{backgroundColor: '#080909', overflow: 'hidden', color: '#f2efe8', fontFamily: 'Arial, Microsoft YaHei, sans-serif'}}>
      <AbsoluteFill style={{backgroundImage: 'radial-gradient(ellipse at 54% 43%, rgba(40,41,38,.54), transparent 61%), linear-gradient(115deg, #101111 0%, #070808 62%, #0b0c0c 100%)'}}/>
      <AbsoluteFill style={{opacity: .22, backgroundImage: 'linear-gradient(rgba(224,222,216,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(224,222,216,.12) 1px, transparent 1px)', backgroundSize: '92px 92px', transform: `translate3d(${interpolate(cameraProgress, [0,1], [0,-44])}px, ${interpolate(cameraProgress, [0,1], [0,24])}px, 0)`}}/>
      <div style={{position: 'absolute', inset: 0, perspective: 1300, perspectiveOrigin: '50% 43%', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, transform: `translate3d(${panX}px, ${panY}px, 0) scale(${zoom})`, transformOrigin: '50% 48%', willChange: 'transform'}}>
          {cards.map((card, index) => <Card key={card.kind} card={card} index={index} frame={frame}/>)}
        </div>
      </div>
      <div style={{position: 'absolute', top: 43, left: 64, opacity: topLabel, display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px', background: 'rgba(5,6,6,.72)', border: '1px solid rgba(240,236,226,.13)', borderRadius: 4, fontSize: 13, letterSpacing: 2, color: '#c7c2b8'}}>
        <span style={{width: 20, height: 1, background: '#ff982f'}}/><span>01 / 06</span>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, bottom: 74, display: 'flex', justifyContent: 'center', opacity: subtitle, transform: `translateY(${interpolate(subtitle, [0,1], [20,0])}px)`}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18, padding: '18px 30px 20px', background: 'rgba(7,8,8,.70)', border: '1px solid rgba(245,239,226,.2)', borderRadius: 9, boxShadow: '0 10px 36px rgba(0,0,0,.35)', backdropFilter: 'blur(10px)'}}>
          <span style={{width: 4, height: 35, background: '#ff8b24', borderRadius: 3, boxShadow: '0 0 20px rgba(255,139,36,.6)'}}/>
          <span style={{fontSize: 43, lineHeight: 1, fontWeight: 650, letterSpacing: 2, color: '#f4f0e8'}}>刷到一些视频</span>
        </div>
      </div>
      <AbsoluteFill style={{pointerEvents: 'none', background: 'radial-gradient(ellipse at center, transparent 46%, rgba(0,0,0,.42) 100%)'}}/>
    </AbsoluteFill>
  );
};
