import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const character = searchParams.get('character') || '探求者タイプ';
  const description = searchParams.get('description') || 'あなたの本質を算命学×性格診断で読み解きます';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f3f4f6',
          backgroundImage: 'linear-gradient(to bottom right, #e0e7ff, #ffffff, #ede9fe)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            padding: '4rem',
          }}
        >
          <div style={{ fontSize: '5rem' }}>🔮</div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <h1
              style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: 0,
                textAlign: 'center',
              }}
            >
              {character}
            </h1>
            
            <p
              style={{
                fontSize: '1.5rem',
                color: '#6b7280',
                margin: 0,
                textAlign: 'center',
                maxWidth: '600px',
              }}
            >
              {description}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '1.25rem',
                color: '#4b5563',
                margin: 0,
              }}
            >
              算命学×性格診断
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: '#9ca3af',
                margin: 0,
              }}
            >
              無料であなたの本質を診断
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}