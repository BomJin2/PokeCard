import { Link } from "react-router-dom";
import { Button } from "../ui";

const Header = () => {
  return (
    <>
      <div className="flex w-full h-20 py-2 px-4 items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center">
          <Link to={"/"} className="flex items-center gap-4">
            <img src="src/assets/logo.png" alt="로고" className="w-14 h-14" />
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">PokéCard</h1>
          </Link>
        </div>
        <div>
          {/* 다크모드 */}
          <Button>다크 모드</Button>
        </div>
      </div>
    </>
  );
};
export { Header };
