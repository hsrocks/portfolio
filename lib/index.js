var app = document.getElementById('app');

var typewriter = new Typewriter(app, {

});

typewriter.typeString('Hello !!')
  .pauseFor(2000)
  .deleteAll()
  .typeString('I am Harpreet')
  .pauseFor(2000)
  .deleteAll()
  .typeString('I am a FullStack Developer')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Nice to meet you')
  .start();

var nav = $(".navbar-collapse");
nav.on("click", "a:not([data-toggle])", null, function() {
  nav.collapse('hide');
});

// $('#nav  li').click(function() {
//   console.log("h")
//   $(this).addClass('hover');
// });
//
$('body').scrollspy({
  target: '#myNavbar',
  offset: 50
});
