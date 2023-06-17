import { Helmet } from "react-helmet-async";
import { Button, ConfigProvider, theme } from "antd";
import { useDarkMode } from "usehooks-ts";

function App() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Helmet>
        <title>Homepage - MyTimeApp</title>
      </Helmet>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Button type="primary">Hello</Button>
      </ConfigProvider>
    </>
  );
}

export default App;
