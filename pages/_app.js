import '../styles/globals.css';
import Head  from 'next/head';
import Script from 'next/script';
import Layout from '../component/Layout';
import '../styles/flaticon.css';
import '../styles/font-awesome.min.css';
import '../styles/vertical.min.css';
import '../styles/magnific-popup.css';
import '../styles/owl.carousel.css';
import '../styles/ihover.css';
import '../styles/settings.css';
import '../styles/tunner.styles.css';

	

function MyApp({ Component, pageProps }) {
  return (


    <Layout>
      <link href='https://fonts.googleapis.com/css?family=Work+Sans:400,300,500,600,700' rel='stylesheet' type='text/css' />
		<link href='https://fonts.googleapis.com/css?family=Philosopher:400,400italic,700,700italic' rel='stylesheet' type='text/css' />
		<link href='https://fonts.googleapis.com/css?family=Bilbo+Swash+Caps' rel='stylesheet' type='text/css'></link>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />      <title>Reva Parlour</title>
      <Component {...pageProps} />
    </Layout>

  );
}

export default MyApp;
