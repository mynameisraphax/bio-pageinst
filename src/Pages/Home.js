import { useEffect, useState } from 'react';
import './styles.css';
import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaSpotify, FaLaptopCode } from 'react-icons/fa';
import background from '../Media/background.mp4';
import img from '../Media/perfil.png';
import audioFile from '../Media/background-audio.mp3';

function Home() {
  const [links, setLinks] = useState([
    { name: 'Github', url: 'https://github.com/mynameisraphax', icon: <FaGithub /> },
    { name: 'Site Portfolio', url: 'https://dev-byrapha.onrender.com', icon: <FaGlobe /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mynameisrafaelpereira', icon: <FaLinkedin /> },
    { name: 'Instagram', url: 'https://www.instagram.com/byraphathedev', icon: <FaInstagram /> },
    { name: 'Playlist Spotify', url: 'https://open.spotify.com/playlist/2ANYRQce9FDdaciI6CzJdZ?si=3fa66034b6dd4ce2', icon: <FaSpotify /> },
  ]);

  useEffect(() => {
    const videoElement = document.querySelector('.background-video');
    videoElement.addEventListener('loadeddata', () => {
      document.querySelector('.container').style.visibility = 'visible';
    });
  
    const playAudio = () => {
      const audio = new Audio(audioFile);
      audio.play().catch(error => console.error('Audio playback failed:', error));
    };
  
    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleUserInteraction);
    };
  
    document.addEventListener('click', handleUserInteraction);
  
  }, []);

  return (
    <div className="container">
        <div className="video-wrapper">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={background} type="video/mp4" />
      </video>
      </div>
      <div className="content">
        <img src={img} alt="raphax" className="profile-image" />
        <h3>@byraphathedev</h3>
        <h1 className="title">Raphael "ByraphaX" Pereira <FaLaptopCode /></h1>
        <p>Desenvoledor Front-End | devOps | DBA | Técnico & Analista TI</p>
        <div className="links">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link-button">
              {link.icon} {link.name}
            </a>
          ))}
        </div>
      </div>
      <div class="atom">
        <div class="center"></div>
        <div class="orbit orbit1">
            <div class="electron elector1"></div>
        </div>
        <div class="orbit orbit2">
            <div class="electron electron2"></div>
        </div>
        <div class="orbit orbit3">
            <div class="electron electron3"></div>
        </div>
    </div>
      <div className="custom-section">
        <p>Você sabia?! O átomo é a partícula fundamental que compõe a matéria. Possui duas estruturas: o núcleo, no qual ficam os prótons e nêutrons, e a eletrosfera, na qual estão os elétrons. Os átomos são as partículas constituintes da matéria.</p>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ByraphaX. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
