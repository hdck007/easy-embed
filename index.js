console.log("madarchod")
const getUrl = document.currentScript.getAttribute("data-url");
const theHtml = `<iframe src="${getUrl}" width="100%" height="100%"></iframe>`
document.body.insertAdjacentHTML('beforeend', theHtml);
