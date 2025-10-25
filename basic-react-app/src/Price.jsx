export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecoration: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };
  let styles = {
    backgroundColor: "#e8c367",
    height: "50px",
    width: "200px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div style={styles}>
      <span style={oldStyles}>Rs {oldPrice}</span>
      <span style={newStyles}>Rs {newPrice}</span>
    </div>
  );
}
