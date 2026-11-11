
import "./index.css";

function App() {
  return (
    <div className="profile-container">
      <div className="profile-card">

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvInDfmSgkmUIgpNOCWwwtuGbF5aYtMeHNB67ULHtwsWeGiDknwGAPb03&s=10"
          alt="Profile"
          className="profile-img"
        />

        <h1>uzair</h1>
        <p className="profession">Web Developer</p>

        <div className="info">
          <p><strong>Age:</strong> 17</p>
          <p><strong>City:</strong> Pakistan</p>
          <p><strong>Education:</strong> Student</p>
          <p><strong>Skills:</strong> HTML, CSS, React</p>
          <p><strong>Email:</strong> mharuzairsial@gmail.com</p>
        </div>

        <p className="bio">
          Hello! I am a passionate web developer.
        </p>

      </div>
    </div>
  );
}

export default App;
