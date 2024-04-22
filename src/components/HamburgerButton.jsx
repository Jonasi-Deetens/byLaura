/* eslint-disable react/prop-types */
const HamburgerButton = ({ isOpen, setOpen }) => {
  const openMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      onClick={openMenu}
      className="flex sm:hidden flex-col items-center justify-around rounded-md border-2 border-primary h-8 w-8"
    >
      <hr
        className={`transition-all duration-500 border-0 border-t-2 border-primary ${
          isOpen ? "origin-left ml-2 rotate-45 w-11/12" : "w-2/3"
        }`}
      />
      <hr
        className={`transition-all duration-500 border-0 border-t-2 border-primary ${
          isOpen ? "invisible" : "w-2/3"
        }`}
      />
      <hr
        className={`transition-all duration-500 border-0 border-t-2 border-primary ${
          isOpen ? "origin-left ml-2 -rotate-45 w-11/12" : "w-2/3"
        }`}
      />
    </div>
  );
};

export default HamburgerButton;
