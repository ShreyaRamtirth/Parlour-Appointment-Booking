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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />      <title>Reva Parlour</title>
      <Component {...pageProps} />
      <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script> */}

      {/* <Script src="http://html.cwsthemes.com/relish/js/jquery.min.js" />
        <Script src="http://html.cwsthemes.com/relish/js/jquery.ui.min.js" />
        <Script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js" />
        <Script src="http://html.cwsthemes.com/relish/js/owl.carousel.min.js" />
        <Script src="http://html.cwsthemes.com/relish/js/bootstrap.min.js" />
        <Script src="http://html.cwsthemes.com/relish/js/jquery.sticky.js" />
      <Script src='http://html.cwsthemes.com/relish/js/scripts.js' /> */}
    </Layout>

  );
}

export default MyApp;
