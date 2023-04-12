import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h4>About</h4>
      <Outlet></Outlet> {/* Vue.js의 slot과 비슷 nested route 일때 보여줄 위치 지정 */}
    </div>
  );
};

export default About;