'use client'

export function DroppingLinesBackground() {
  return (
    <div className="dropping-lines-bg" aria-hidden="true">
      {Array.from({ length: 120 }).map((_, i) => (
        <div
          key={`line-${i}`}
          className="dropping-line"
          style={{
            left: `${(i * 1) % 100}%`,
            animationDelay: `${(i * 0.03) % 7}s`,
            animationDuration: `${2 + (i % 7) * 0.4}s`,
          }}
        />
      ))}
    </div>
  )
}
