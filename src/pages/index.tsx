import Head from "next/head";

import { DesignAuth } from "../layout/DesignAuth";

export default function Login() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
     <DesignAuth/>
    </>
  );
}
