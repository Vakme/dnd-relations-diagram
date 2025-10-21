export const Relations = ({ title, getLabel, relations }) => {
  if (relations.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        marginBottom: 8,
      }}
    >
      <div style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: 4 }}>
        {title}
      </div>
      {relations.map((e) => (
        <div key={e.id}>
          <div style={{ fontSize: "1.1em", color: e.style.stroke }}>
            {getLabel(e)} - {e.data.label}
          </div>
          <div>{e.data.note}</div>
        </div>
      ))}
    </div>
  );
};
