import "./contact.css";
import hello from "../../images/hello.svg";
import { Card, Row, Col } from 'antd';
import kevin from '../../images/kevin.PNG'
import tiffany from '../../images/tiffany.PNG'

const Contact = () => {
  return (
    <main>
      <div className="main__container">

        <div className="main__title">
          <Row gutter={16}>

            <Col>
              <Card className="contact-card" title="Contact Kevin" bordered={false} style={{ width: 300 }}>
                <img className="pic" src={kevin} />
                <p>Phone number:  352-200-4273</p>
                <p>Email address: kevin13560@yahoo.com.tw</p>
              </Card>
            </Col>

            <Col>
              <Card className="contact-card" title="Contact Tiffany" bordered={false} style={{ width: 300 }}>
                <img className="pic" src={tiffany} />
                <p>Phone number: 352-390-7495</p>
                <p>Email address: tsaikevin94@yahoo.com</p>
              </Card>
            </Col>
          </Row>

        </div>
      </div>
    </main>
  );
};

export default Contact;