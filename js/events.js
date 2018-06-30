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


+function submitIt() {
+  $('form').on('submit', () => {
+    alert("Your form is going to be submitted now.")
+  })
+}