import Image from 'next/image';
import homeImg from 'public/home.jpg';

export default function Home() {
  return <div>
      Home Page 
    <div className="absolue -z-10 inset-0"> 
      <Image 
        alt="car production line" 
        src={homeImg} 
        fill
        style = {{ objectFit: 'cover' }}
      />
      </div>
    </div>;
}
