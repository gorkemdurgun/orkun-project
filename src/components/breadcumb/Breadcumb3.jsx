export default function Breadcumb3({ path }) {
  return (
    <>
      <div className="breadcumb-section">
        <div className="breadcumb-style1">
          <div className="breadcumb-list">
            {path?.map((item, i) => (
              <a key={i}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
