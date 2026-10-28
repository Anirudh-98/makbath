import { getImageProps } from "next/image";

type Props = {
  alt: string;
  /** Portrait image served below `breakpoint`. */
  mobile: { src: string; width: number; height: number };
  /** Landscape image served from `breakpoint` up. */
  desktop: { src: string; width: number; height: number };
  breakpoint?: number;
  priority?: boolean;
  className?: string;
};

/** Art-directed cover image: each device downloads only the crop composed for it. */
export default function ResponsiveImage({
  alt,
  mobile,
  desktop,
  breakpoint = 1024,
  priority = false,
  className = "",
}: Props) {
  const common = { alt, sizes: "100vw", quality: 75 };
  const {
    props: { srcSet: desktopSet },
  } = getImageProps({ ...common, ...desktop });
  const {
    props: { srcSet: mobileSet, width, height, ...rest },
  } = getImageProps({
    ...common,
    ...mobile,
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "auto",
  });

  return (
    <picture>
      <source media={`(min-width: ${breakpoint}px)`} srcSet={desktopSet} />
      <img
        {...rest}
        srcSet={mobileSet}
        width={width}
        height={height}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
    </picture>
  );
}
