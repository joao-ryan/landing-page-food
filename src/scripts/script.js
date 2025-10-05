$(document).ready(function () {

  $('#navbar').on('click', function () {
    $(this).toggleClass('active');
    $('#nav-lista').toggleClass('active');

  });
  $('#nav-lista a').on('click', function () {
    $('#navbar').removeClass('active');
    $('#nav-lista').removeClass('active');
  }
  );
});