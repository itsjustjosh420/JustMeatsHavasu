import React from 'react'
import business from '../data/business.json'

export default function Page() {
  const imgs: string[] = (business as any).images || []

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, -apple-system, Roboto, '"'Helvetica Neue'"', Arial, sans-serif' }}>
      <h1>{(business as any).name}</h1>
      <p>{(business as any).description}</p>

      <p><strong>Category:</strong> {(business as any).category}</p>
      <p><strong>Address:</strong> {(business as any).address}</p>

      <p>
        <strong>Hours:</strong>
        <br />
        {(business as any).hours.split('\n').map((line: string, i: number) => (
          <span key={i}>{line}<br /></span>
        ))}
      </p>

      <p>
        <strong>Phone:</strong>{' '}
        <a href={`tel:${(business as any).phone}`}>{(business as any).phone}</a>
      </p>

      <p>
        <strong>Email:</strong>{' '}
        <a href={`mailto:${(business as any).email}`}>{(business as any).email}</a>
      </p>

      {(business as any).website && (
        <p>
          <strong>Website:</strong>{' '}
          <a href={(business as any).website} target="_blank" rel="noreferrer">{(business as any).website}</a>
        </p>
      )}

      <p>
        <strong>Social:</strong>{' '}
        {(business as any).social_handle}
        {(business as any).followers ? ` · ${(business as any).followers} followers` : ''}
        { (business as any).social_handle && (
          <span> {' '}
            <a href={`https://www.instagram.com/${(business as any).social_handle}`} target="_blank" rel="noreferrer">@{(business as any).social_handle}</a>
          </span>
        )}
      </p>

      <p><strong>Shopping:</strong> {(business as any).shopping}</p>
      <p><strong>Recommendation:</strong> {(business as any).recommendation}</p>

      <p>
        <a href={(business as any).facebook_post_url} target="_blank" rel="noreferrer">View Facebook post</a>
      </p>

      <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {imgs.map((img, idx) => (
          <img
            key={idx}
            src={`/${img}`}
            alt={`${(business as any).name} image ${idx + 1}`}
            style={{ width: 220, height: 150, objectFit: 'cover', background: '#eee' }}
          />
        ))}
      </section>

      <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
        If images are missing, add image files to /public/images/1.jpg, /public/images/2.jpg, etc. The images in the JSON reference /images/ paths and will render from the public folder.
      </p>
    </main>
  )
}
