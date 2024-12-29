import Nav from './Nav';

export default function Header() {
    return (
        <header>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                <h1 className='display-1 fw-normal'>Celeste Hayes</h1>
                <Nav />
            </div>
        </header>
    );
}