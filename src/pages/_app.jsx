// import "@/styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Footer from "@/Common/Footer";
// import Header from "@/Common/Header";
// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Header/>
//       <Component {...pageProps} />
//       <Footer />
//     </>
//   );
// }

import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider maxSnack={3}>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </SnackbarProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
