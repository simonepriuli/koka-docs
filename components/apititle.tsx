export default function ApiTitle({ main, other }) {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "5px" }}>
      <code>
        <span style={{ color: "#d73a49" }}>{main}</span>
        {other}
      </code>
    </div>
  );
}
