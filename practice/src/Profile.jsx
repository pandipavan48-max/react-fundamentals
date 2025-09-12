function Profile() {
    const name = 'mirai';
    const age = 20;
    const isStudent = true;     
  return(
    <div>
    
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Status: {isStudent === true ? 'i am a Student' : 'Not a student'}</p>       
    </div>
  )
}

export default Profile;