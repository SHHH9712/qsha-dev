import Head from "next/head";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>My Resume</title>
      </Head>
      <main
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://docs.google.com/document/d/1puMuiIEUFJR9oAL4S50AbSOHoxmUol8wKkHk3tqlMvQ/preview?embedded=true"
          style={{ width: "100%", height: "110vh", border: "none" }}
        ></iframe>
      </main>
    </div>
  );
}
