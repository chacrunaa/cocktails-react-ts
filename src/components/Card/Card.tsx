import React from 'react';
import { PropsWithChildren } from 'react';
import ImageLazy from '../ImageLazy/ImageLazy';

type CardProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  imageSrc?: string | null;
  imageAlt?: string;
}>;

export default function Card({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
}: CardProps) {
  return (
    <article className="card" aria-label={title}>
      <header className="header">
        <div>
          <h3>{title}</h3>
          {subtitle && <small>{subtitle}</small>}
        </div>
        {imageSrc && (
          <ImageLazy
            src={imageSrc}
            width={220}
            height={220}
            alt={imageAlt ?? title}
          />
        )}
      </header>

      {children}
    </article>
  );
}
