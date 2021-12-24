stdValtage = 1;
stdWatt = 0.001;

function Calc(typ, id0, rsl_id0, rsl_id1){
  result0 = 0;
  result1 = 0;
  a = parseFloat(document.getElementById(id0).value);
  // b = parseFloat(document.getElementById(id1).value);

  switch(typ)
  {
      case 11://倍率⇒電圧値
          result0 = a * stdValtage;
          result1 = 20 * Math.log10(a);
          break;
      case 12://電圧計算
          result1 = Math.pow(10, (a / 20));
          result0 = result1 * stdValtage;
          break;
      case 21:
          result0 = a * stdWatt * 1000;
          result1 = 10 * Math.log10(a);
          break;
      case 22:
          result1 = Math.pow(10, (a / 10));
          result0 = result1 * stdWatt * 1000;
          break;
  }
  //alert(result);
  document.getElementById(rsl_id0).value = result0;
  document.getElementById(rsl_id1).value = result1;
}
