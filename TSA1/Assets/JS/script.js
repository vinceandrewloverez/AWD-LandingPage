var bodyColors = ['#c6e597', '#b8acd1', '#7f00ff', '#bca38d', '#1F487E', '#353535'];
var headerColors = ['#c4b7d7', '#4e4466', '#0066cc', '#9e7c60', '#d7e9ff', '#7f7f7f'];
var textColors = ['#000000', '#c9e8fd', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
var index = 0;

document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = bodyColors[index];
    document.body.style.color = textColors[index];
    document.querySelector('.header').style.backgroundColor = headerColors[index];
    document.querySelector('.left').style.backgroundColor = headerColors[index];

    index = (index + 1) % bodyColors.length;
});

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5X017PR5LE');
