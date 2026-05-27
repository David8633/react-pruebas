import { useState } from 'react'
import './App.css'
import { ProfileForm } from './components/ProfileForm';
import { ProfileCard } from './components/ProfileCard';

function App() {

  const [profileData, setProfileData] = useState({
    name: "Usuario Ejemplo",
    bio: "Este es mi perfil.",
    themeColor: "#007bff",
    showBadges: false
  });

  function updateProfile(newFormData){
    setProfileData(newFormData);
  }

  return (
    <>
      <ProfileForm onUpdateProfile={updateProfile}/>
      <ProfileCard {...profileData}/>
    </>
  )
}

export default App;
