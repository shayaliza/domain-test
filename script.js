document
  .getElementById("generateLinkBtn")
  .addEventListener("click", function () {
    var name = prompt("Enter your name:");
    if (name) {
      var link = generateLink(name);
      document.getElementById("linkDisplay").innerText =
        "Generated Link: " + link;

      // Redirect to the generated link
      window.location.href = link;
    }
  });

function generateLink(name) {
  // You can customize the link format as needed
  // return "https://" + name + ".aliza.vercel.app/";
  return "https://domain-test-kappa.vercel.app/" + name;
}
