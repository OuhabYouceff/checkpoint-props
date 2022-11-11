import photo from 'C:/Users/Youcef/Desktop/GMC3/checkpoint_props/src/profile/photo.PNG';
import './App.css';

import ProfileC from "./profile/Profile.js"

function App() {
  
  const handleName = name => {alert(name)};
  const styleObject={margintTop:400,marginLeft:40,borderRadius:30} //here I used the inline styles at the end of the work because i didnt see it in the tasks list at first xD but i used it so yeah it counts!
  return (
    <div className="App">
      <ProfileC className="profileClass"
        fullName="Youcef Ouhab." 
        bio="10 years of ceo'ing Microsoft" 
        profession="developper."
        handleName={handleName}>
          <br/>
        <img style={styleObject} className='photo1' src = {photo} width={600} height={600}></img>
      </ProfileC>
    </div>
  );
}

export default App;
