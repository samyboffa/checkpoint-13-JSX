import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import mySnake from "./imageInSrc.jpg";
import snakeEaterVideo from "./snakeEater.mp4";

function App() {
    return (
        <div className="main">
            <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="title red">Solid Snake </h1>
                <br />
                <img src={mySnake}></img>
                <br />
                <img src="/imageInPublic.jpg"></img>
            </div>
            <video width="320" height="240" controls>
                <source src={snakeEaterVideo} type="video/mp4"></source>
            </video>
        </div>
    );
}

export default App;
