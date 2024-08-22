function Button({ children, onClick }) {
  return (
    <button onClick={onClick} 
      className="transition-colors duration-300 py-2 px-8 bg-gray-400 hover:bg-gray-600 text-white">{children}</button>
  );
}

export default Button;
