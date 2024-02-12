export default function cloudinaryLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith('https://')) {
    return src;
  } else {
    return `https://osk-neocar.pl/${src}`;
  }
}
