function downloadPdf() {
  // Replace "path/to/pdf/file.pdf" with the actual path to your PDF file
  const pdfUrl = "assets/files/Pujan's Resume.pdf";
  
  // Create a new anchor element
  const link = document.createElement("a");
  
  // Set the href attribute to the PDF URL
  link.href = pdfUrl;
  
  // Set the download attribute to the file name you want to use
  link.download = "pujan-resume.pdf";
  
  // Append the anchor element to the body
  document.body.appendChild(link);
  
  // Click the link to trigger the download
  link.click();
  
  // Remove the link from the body after the download is complete
  document.body.removeChild(link);
}

function downloadTuringPdf() {
  // Replace "path/to/pdf/file.pdf" with the actual path to your PDF file
  const pdfUrl = "assets/files/Turing-Profile.pdf";

  // Create a new anchor element
  const link = document.createElement("a");

  // Set the href attribute to the PDF URL
  link.href = pdfUrl;

  // Set the download attribute to the file name you want to use
  link.download = "pujan-turing-profile.pdf";

  // Append the anchor element to the body
  document.body.appendChild(link);

  // Click the link to trigger the download
  link.click();

  // Remove the link from the body after the download is complete
  document.body.removeChild(link);
}
