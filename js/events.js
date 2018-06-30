function getIt() {
 $('p').on('click', () => {alert('Hey!')})
}
function frameIt() {
  $("img") .addClass("tasty")
  return;
}
function pressIt() {
  alert('g')
  return;
}

function submitIt() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }}