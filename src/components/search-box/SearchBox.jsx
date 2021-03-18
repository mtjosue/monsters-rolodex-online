import './search-box.styles.css';

const searchBox = ({ placeHolder, onChange }) => {
  return (
    <div className="search">
      <input
        className="search"
        type="search"
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
};

export default searchBox;
