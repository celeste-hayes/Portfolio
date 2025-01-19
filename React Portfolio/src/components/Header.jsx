import Nav from './Nav';

export default function Header() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1001 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
        <h1>C H</h1>
        <Nav />
      </div>
    </header>
  );
}