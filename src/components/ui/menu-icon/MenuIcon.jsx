const MenuIcon = ({ width = 31, height = 23, color = "white", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 21.5H29.5M1.5 11.5H29.5M1.5 1.5H29.5"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;