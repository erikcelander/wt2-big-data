import GraphComponent from '<component>/app/components/GraphComponent/GraphComponent'

export default function Page() {
  return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '95vh' }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.85rem",
        maxWidth: "var(--max-width)",
        width: "53%",
        zIndex: 2,
        fontFamily: "var(--font-mono)",
        textAlign: "center"
      }}>
        <p style={{
          position: "relative",
          margin: 0,
          padding: "1rem",
          backgroundColor: "rgba(var(--callout-rgb), 0.5)",
          border: "1px solid rgba(var(--callout-border-rgb), 0.3)",
          borderRadius: "var(--border-radius)"
        }}>
          Expected goal contributions (xGC) vs goal contributions (GC)
        </p>
      </div>

      <div style={{ width: '75%', margin: '20px 0px', padding: '0 1rem' }}>
        <GraphComponent graphType={'xGC-vs-GC'} />
      </div>
    </div>
  )
}