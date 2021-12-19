
function Calc(id0, id1, id2, rsl_id){
    result = 0;
    a = parseFloat(document.getElementById(id0).value);
    b = parseFloat(document.getElementById(id1).value);
    c = parseFloat(document.getElementById(id2).value);

    result = (a - b) / c;

    document.getElementById(rsl_id).value = result;
}
