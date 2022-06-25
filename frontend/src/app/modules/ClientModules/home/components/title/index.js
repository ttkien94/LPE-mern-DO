import "./styles/styles.scss";

function Title({ textAlign, title, description }) {
  return (
    <div
      style={{
        textAlign: textAlign,
        marginTop: "60px",
      }}
    >
      <h1 className={`title px-3`}>{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
}

export default Title;
