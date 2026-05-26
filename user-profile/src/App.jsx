import { useState } from 'react'
import './App.css'
import { ProfileForm } from './components/ProfileForm';
import { ProfileCard } from './components/ProfileCard';

function App() {

  const [profileData, setProfileData] = useState({
    name: "Usuario Ejemplo",
    bio: "Este es mi perfil.",
    themeColor: "#007bff",
    showBadges: true
  });

  function updateProfile(newFormData){
    const {name,value} = newFormData;
    setProfileData(prev => ({
      ...newFormData,
      [name]:value
    }))
  }

  return (
    <>
      <ProfileForm onUpdateProfile={updateProfile}/>
      <ProfileCard data={profileData}/>
    </>
  )
}

export default App;
