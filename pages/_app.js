import { useEffect, useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import Spinner from "../components/ui/Spinner";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const idTimer = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    idTimer.current = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      if (idTimer.current) {
        clearTimeout(idTimer.current);
      }
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
