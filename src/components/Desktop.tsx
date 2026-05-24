import { desktopItems } from '../data/projects';

export default function Desktop() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      {desktopItems.map((item) => {
        const isCode = item.type === 'code';
        const img = isCode
          ? 'https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779657123/git_ck3mrm.svg'
          : 'https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779657224/formato_PSD_480x480_rnp9o0.webp';
        const label = isCode ? `${item.label}.git` : `${item.label}.psd`;

        return (
          <div
            key={item.id}
            className="desktop-icon absolute flex flex-col items-center gap-1 cursor-pointer"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            onClick={() => window.open(item.url, '_blank')}
          >
            <img
              src={img}
              alt={label}
              style={{
                width: item.size,
                height: item.size,
                objectFit: 'contain',
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.6))',
                opacity: 0.9,
              }}
            />
            <span
              className="text-white/60 text-[10px] font-medium px-1.5 py-0.5 rounded"
              style={{
                background: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(4px)',
                maxWidth: item.size + 30,
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}