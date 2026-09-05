"use client";

const cubeFaces = [
  { className: "portrait-cube-face-front", src: "/img/leader.jpg" },
  { className: "portrait-cube-face-right", src: "/img/embedded.jpg" },
  { className: "portrait-cube-face-back", src: "/img/data-scientist.jpg" },
  { className: "portrait-cube-face-left", src: "/img/software.jpg" },
  { className: "portrait-cube-face-top", src: "/img/handsome.png" },
  { className: "portrait-cube-face-bottom", src: "/img/cartoon-character.png" },
];

const tiles = Array.from({ length: 9 }, (_, index) => ({
  x: index % 3,
  y: Math.floor(index / 3),
}));

export default function PortraitCube() {
  return (
    <div className="portrait-cube-scene" aria-label="Rotating 3D portrait cube">
      <div className="portrait-cube">
        {cubeFaces.map((face) => (
          <div
            key={face.className}
            className={`portrait-cube-face ${face.className}`}
          >
            {tiles.map((tile) => (
              <span
                key={`${face.className}-${tile.x}-${tile.y}`}
                className="portrait-cube-tile"
                style={{
                  backgroundImage: `url(${face.src})`,
                  backgroundPosition: `${tile.x * 50}% ${tile.y * 50}%`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}