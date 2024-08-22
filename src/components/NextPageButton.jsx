import { useNavigate } from "react-router-dom";

function NextPageButton({ title, nextPage }) {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(nextPage);
  }

  return (
    <button onClick={navigateTo}
      className={"text-gray-900 absolute flex flex-col justify-center items-center bottom-[5px] animate-bounce"}>
      <p>{title}</p>
      <i className="text-2xl fi fi-rs-angle-circle-down"></i>
    </button>
  );
}

export default NextPageButton;
