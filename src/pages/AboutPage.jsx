import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>
        This is react App that Demonstrate a feed back for a product or services
      </p>
      <p>Version: 1.0.0</p>
      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
