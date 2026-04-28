const Header = ({ onReset }) => {
  return (
    <div>
      <div className="navbar">
        <h1 className="header border-b border-gray-200 text-slate-700 ">
          FLEXBOX
        </h1>
        <p className="cursor-pointer" onClick={onReset}>
          Reset
        </p>
      </div>
    </div>
  );
};

export default Header;
