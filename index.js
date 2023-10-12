console.log("madarchod")
const getUrl = document.currentScript.getAttribute("data-url");
const theHtml = `<iframe src="${getUrl}" width="800px"  height="800px"></iframe>`
document.body.insertAdjacentHTML('beforeend', theHtml);
