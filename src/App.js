import Header from "./components/Header"
import Footer from "./components/Footer";
import Layout from "./components/Layout";

import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";

const App = () => {
  return (
    <>
      <Header
        title="This is a title"
        descr="This is Description!"
      />
      <Layout
        id="1"
        title="First"
        descr="This is a first description"
        urlBg={bg1}
      />
      <Layout
        id="2"
        title="Second"
        descr="This is a second description"
        colorBg="#922074"
      />
      <Layout
        id="3"
        title="Third"
        descr="This is a third description"
        urlBg={bg2}
      />
      <Footer />
    </>
  );
}

export default App;