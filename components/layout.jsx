import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>pod</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href={"/favicon.ico"} />
      </Head>

      <a href="/" style={{ textDecoration: "none", color: "black" }}>
        <h1 style={{ cursor: "pointer", marginRight: "10px" }}>
          {"Podcasts 📻🎙"}
        </h1>
      </a>

      {props.children}
      <div style={{ marginBottom: "80px" }} />
      <small>
        Thanks to{" "}
        <a href="https://gpodder.net" target="_blank">
          @gpodder
        </a>{" "}
        for the search
      </small>
      <br />
      <small>
        MIT license |{" "}
        <a href="https://git.sr.ht/~alexanderdaniel/pod" target="_blank">
          git src
        </a>
      </small>
      <br />
      <small>{"2019 cedarcedar"}</small>
      <br />
    </>
  );
};

export default Layout;
