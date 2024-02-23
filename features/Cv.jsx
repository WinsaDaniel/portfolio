function Cv() {
  function handleDownloadCV() {
    const cvUrl =
      "https://docs.google.com/document/d/1Dfo11idp_q9FRcv8GzohPdCiLuR9Eqkc90bwxEB2TM0/edit";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Cv.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <button
      className="text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-yellow-300 focus:ring-offset-2"
      onClick={handleDownloadCV}
      id="Cv"
    >
      Download CV
    </button>
  );
}

export default Cv;
