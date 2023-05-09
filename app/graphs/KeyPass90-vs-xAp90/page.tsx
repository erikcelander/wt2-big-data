import GraphComponent from '<component>/app/components/GraphComponent'

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
          Key passes per 90 (KeyPass90) vs expected assists per 90 (xAp90)
      </p>
    </div>

    <div style={{ width: '75%', margin: '20px 0px', padding: '0 1rem' }}>
        <GraphComponent graphType={'KeyPass90-vs-xAp90'} /> 
      </div>
    </div>
  )
}