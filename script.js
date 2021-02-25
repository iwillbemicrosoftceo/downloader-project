function download(file) { 
  var link = document.querySelector(".none");
  link.setAttribute("download", file);
  link.click()

};