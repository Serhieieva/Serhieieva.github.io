$(document).ready(function(){$('a[href^="#"], a[href^="."]').click(function(){var t=$(this).attr("href");return 0!=$(t).length&&$("html, body").animate({scrollTop:$(t).offset().top},500),!1})});