import { useState } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer';
import { Home } from './Home';
import { Login } from './Login';
import { Ads } from './Ads';
import { Complete } from './Complete';
import { Profile } from './Profile';

const App = () => {
  const [section, setSection] = useState(0);
  const [loged, setLoged] = useState(false);
  const [mustComplete, setMustComplete] = useState(false);
  return (
    <>
      <Navbar setSection={setSection} />
      {section == 0 && <Home />}
      {section == 1 && <Ads />}
      {(section == 2 && !loged && !mustComplete) && <Login setLoged={setLoged} setMustComplete={setMustComplete} />}
      {(section == 2 && !loged && mustComplete) && <Complete setLoged={setLoged} setMustComplete={setMustComplete} />}
      {(section == 2 && loged) && <Profile />}
      <Footer />
    </>
  )
}

export default App
