//$("#btn0").on("click", run("#lbl_result", 5, 4));
// $("#btn0").on("click", function(){ alert("test"); });

function run_lbl(id0, a, b){
  // alert(a + b);
  document.getElementById(id0).innerText = a + b;
}

function run_txb(id0, a, b){
  // alert(a + b);
  document.getElementById(id0).value = a + b;
}
