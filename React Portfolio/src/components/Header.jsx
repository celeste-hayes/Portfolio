import Nav from './Nav';

export default function Header() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1001 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
        <h1 className="h2 fw-normal mb-0">Celeste Hayes</h1> {/* Smaller heading size */}
        <Nav />
      </div>
    </header>
  );
}