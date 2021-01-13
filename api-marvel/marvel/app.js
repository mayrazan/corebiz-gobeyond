$(document).ready(function () {
  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=20&apikey=7e99323b2679072c3e1119052f1aca13&hash=779d449f29c113e00feddbada3e680af";

  let contentHTML = "";

  $.get(urlAPI, function (res) {
    const items = res.data.results;

    items.map((item) => {
      const url = item.urls[0].url;
      return (contentHTML += `
            <div class="item">
                <a href="${url}" target="_blank">
                <img src="${item.thumbnail.path}.${item.thumbnail.extension}">
                </a>
                <h3 class="title">${item.name}</h3>
            </div>
        `);
    });

    $("#marvel-row").html(contentHTML);
  });
});
