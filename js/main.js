// Author's own JS additions here
$(document).ready(
  function() {
    var template = '<p class="animated fadeInDown">{{{main}}}</p>';
    var context = {'main': 'This index.html page is a placeholder with the CSS, font and favicon. It\'s just waiting for you to add some content! If you need some help hit up the <a href="http://www.getskeleton.com">Skeleton documentation</a>.'}
    var templateScript = Handlebars.compile(template);
    var html = templateScript(context);

    $('#content div.one-half').append(html);

    var navTemplate = '<nav class=""><ul>' +
        '<li><a href="{{home}}">Home</a></li>' +
        '<li><a href="{{about}}">About</a></li>' +
        '<li><a href="{{linkTwo}}">Link Two</a></li>' +
        '<li><a href="{{linkThree}}">Link Three</a></li>' +
      '</ul></nav>';
    var navContext = {
      'home' : '/',
      'about' : '/about.html',
      'linkTwo' : '#',
      'linkThree' : '#'
    }
    var navCompiled = Handlebars.compile(navTemplate);
    var navHtml = navCompiled(navContext);

    $('#navbar').append(navHtml);

  }
);
