import "./settings.css";
import hello from "../../images/hello.svg";
import Button from 'react-bootstrap/Button';

{/* just a copy of main dashboard landing for now */ }

const Settings = () => {
  return (
    <main>
      <div className="main__container">

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello *NAME HERE*</h1>
            <p>Settings page testing</p>
          </div>
          <Button variant="primary">Testing</Button>{' '}
        </div>
      </div>
    </main>
  );
};

export default Settings;