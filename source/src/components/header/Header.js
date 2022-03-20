function Header() {
  return (
    <header className="banner">
      {/* Banner Content */}
      <div className="banner__contents">
        <h1 className="banner__title">Ginny &amp; Georgia</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          Angsty and awkward fifteen year old Ginny Miller often feels more
          mature than her thirty year old mother, the irresistible and dynamic
          Georgia Miller...
        </h1>
      </div>
      {/* End Banner Content */}
      {/* Banner Fade Bottom Animation */}
      <div className="banner--fadeBottom"></div>
      {/* End Banner Fade Bottom Animation */}
    </header>
  );
}
// export Header component.
export default Header;
