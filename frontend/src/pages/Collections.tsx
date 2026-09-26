import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const collections = [
  {
    number: '01',
    title: 'Quiet Luxury',
    description: 'Timeless pieces, refined silhouettes and understated elegance.',
    tag: 'work',
    image:
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '02',
    title: 'After Dark',
    description: 'Elegant silhouettes for dinners, dates and unforgettable evenings.',
    tag: 'party',
    image:
      'https://assets.vogue.com/photos/639760af52728959a366c3a3/3%3A4/w_748%2Cc_limit/slide_10.jpg',
  },
  {
    number: '03',
    title: 'Everyday Edit',
    description: 'Effortless essentials made for the rhythm of everyday life.',
    tag: 'casual',
    image:
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '04',
    title: 'Resort Escape',
    description: 'Light textures, soft tones and relaxed vacation silhouettes.',
    tag: 'brunch',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '05',
    title: 'Street Form',
    description: 'Relaxed proportions and bold details with a modern edge.',
    tag: 'casual',
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '06',
    title: 'Soft Minimal',
    description: 'Quiet colours, tactile textures and clean modern lines.',
    tag: 'brunch',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85',
  },
];

export default function Collections() {
  return (
    <main className="page shell collectionsPage">
      <div className="pageIntro collectionsIntro">
        <div>
          <p className="eyebrow">THE ATELIER EDITS</p>
          <h1>Curated worlds.</h1>
          <p>
            Discover pieces arranged around moods, moments and the way you
            want to feel.
          </p>
        </div>
      </div>

      <div className="collectionGrid">
        {collections.map((collection) => (
          <Link
            className="collection"
            to={`/shop?occasion=${collection.tag}`}
            key={collection.title}
          >
            <div className="collectionImage">
              <img
                src={collection.image}
                alt={collection.title}
                loading="lazy"
              />
              <div className="collectionOverlay" />
            </div>

            <div className="collectionContent">
              <p className="eyebrow">{collection.number}</p>

              <h2>{collection.title}</h2>

              <p>{collection.description}</p>

              <span className="collectionLink">
                Explore collection
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
