import React from "react"
import { useEmblaCarousel } from "embla-carousel/react"

// set up Img component
// Review responsive behaviour

export default function Carousel({
  items,
  className,
  children,
  dragFree,
  showDots,
  dotsTheme,
  overflow,
}) {
  if (items?.length <= 0) return null

  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "keepSnaps",
    slidesToScroll: 1,
  })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState([])

  const scrollTo = React.useCallback(
    (index) => {
      // console.log("scrollTo")
      // console.log({ embla })
      embla && embla.scrollTo(index)
    },
    [embla]
  )

  const onSelect = React.useCallback(() => {
    if (!embla) return

    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  React.useEffect(() => {
    if (!embla) return

    embla.on("select", onSelect)
    onSelect()

    setScrollSnaps(embla.scrollSnapList())
  }, [embla, setScrollSnaps, onSelect])

  return (
    <div
      ref={viewportRef}
      className={`embla w-full relative col-span-12 pb-48 overflow-hidden ${
        showDots ? " mb-50" : ""
      } ${className ?? ""}`}
    >
      {children}
      {showDots && (
        <div className="flex space-x-4 absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-11 h-11 rounded-full border ${
                dotsTheme === "dark" ? " border-black" : "  border-white"
              } ${
                selectedIndex === index
                  ? dotsTheme === "dark"
                    ? " bg-black"
                    : "bg-white"
                  : "bg-transparent"
              }`}
              type="button"
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

Carousel.defaultProps = {
  dragFree: false,
  showDots: false,
  items: [],
}
