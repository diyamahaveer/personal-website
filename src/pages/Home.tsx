import Navbar from '../components/NavBar';
import redStar from '../assets/whimsy-photos/red-star.png';
import yellowCat from '../assets/whimsy-photos/yellow-cat.png';
import pinkSnail from '../assets/whimsy-photos/pink-snail.png';
import plaidStar from '../assets/whimsy-photos/plaid-star.png';
import threeFish from '../assets/whimsy-photos/three-fish.png';
import pinkFlowers from '../assets/whimsy-photos/flowers-stars.png';

function Home() {
  return (
    <main className="bg-[#f7b8d0] min-h-screen">
      <Navbar />
      <section className="min-h-screen flex items-center justify-center relative">
            {/* redStar */}
            <img 
            src={redStar} 
            alt="redStar" 
            className="absolute right-[20%] top-3/4 w-80 h-auto" 
            />
            {/* yellowCat */}
            <img 
            src={yellowCat} 
            alt="yellowCat" 
            className="absolute left-[25%] top-[80%] -translate-y-1/2 h-auto" 
            />
            {/* pinkSnail */}
            <img 
            src={pinkSnail} 
            alt="pinkSnail" 
            className="absolute right-24 top-3/4 -translate-y-1/2 h-auto" 
            />
            {/* plaidStar */}
            <img 
            src={plaidStar} 
            alt="plaidStar" 
            className="absolute left-24 top-[70%] -translate-y-1/2 h-auto" 
            />
            {/* pinkFlowers */}
            <img 
            src={pinkFlowers} 
            alt="pinkFlowers" 
            className="absolute right-12 top-[22%] -translate-y-1/2 h-auto" 
            />
            {/* threeFish */}
            <img 
            src={threeFish} 
            alt="threeFish" 
            className="absolute left-24 top-1/4 -translate-y-1/2 h-auto" 
            />

      </section>
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl">Screen 2 content goes here</h2>
      </section>
    </main>
  );
}

export default Home;