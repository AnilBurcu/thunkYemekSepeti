const Container = ({ children, design }) => {
  return (
    <div className={`max-w-[1440px] p-5 mx-auto ${design}`}>{children}</div>
  );
};

export default Container;
