import "./main.css";
import welcome from '../../images/welcome.jpg';

function Main(props) {
  return (
    <main>
      <div className="main-container">

        <div className="main__title">
          <div>
            <div className="d-row">
              <h1 className="d-title">Hello *NAME HERE*</h1>
            </div>

            <div className="d-row">
              <img className=" dashboardImg" src={welcome}></img>
            </div>

            <div className="d-row">
              <p className="dash-blurb" >
                Thank you for creating an account with Jack Mobile Home Park!
                In the sidebar you will be able to create maintennance requests,
                edit your user settings, and contact the owners for all of your
                housing needs!
            </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Main;