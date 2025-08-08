import React, { ImgHTMLAttributes, useEffect, useRef, useState } from 'react';

export default function ImageLazy(props: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if ('loading' in HTMLImageElement.prototype) {
      node.loading = 'lazy';
      setVisible(true);

      return;
    }

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    });

    io.observe(node);

    return () => io.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      {...props}
      src={visible ? props.src : undefined}
      alt={props.alt}
      className={`thumb ${props.className ?? ''}`}
    />
  );
}
