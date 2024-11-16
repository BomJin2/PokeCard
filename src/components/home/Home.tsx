import { Header, Nav, PokeCard } from "@/components";

const HomePage = () => {
  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header />
          <Nav />
          <div>
            {/* 메인 컨텐츠 */}
            <PokeCard />
          </div>
        </div>
      </div>
    </>
  );
};
export { HomePage };
