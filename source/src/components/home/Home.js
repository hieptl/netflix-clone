// import custom components.
import Nav from "../nav/Nav";
import Header from "../header/Header";
import Row from "../row/Row";
/**
 * create Home component.
 */
function Home() {
  return (
    <>
      <div className="app">
        {/* Nav */}
        <Nav />
        {/* End Nav */}
        {/* Header */}
        <Header />
        {/* Header */}
        {/* Row */}
        <Row title="Netflix Originals" movieType="netflix-originals" />
        <Row title="Trending Now" movieType="trending-now" />
        <Row title="Top Rated" movieType="top-rated" />
        <Row title="Action Movies" movieType="action-movies" />
        <Row title="Horror Movies" movieType="horror-movies" />
        <Row title="Romance Movies" movieType="romance-movies" />
        <Row title="Documentaries Movies" movieType="documentaries-movies" />
        {/* End Row */}
      </div>
    </>
  );
}
// export Home component.
export default Home;
