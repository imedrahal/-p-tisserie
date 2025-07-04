import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from "./Home";
import FollowUs from "./FollowUs/FollowUs"
import OurSkills from"./OurSkills/OurSkills"
import TeamSection from './TeamSection/TeamSection'
import Carousel from './Carousel/Carousel'
function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api') // Grâce au proxy, ça redirige vers localhost:5000/api
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
    
    <Home />
    <Carousel/>
    <TeamSection/>
    <OurSkills/>
     <FollowUs />
    </div>
  );
}

export default App;
