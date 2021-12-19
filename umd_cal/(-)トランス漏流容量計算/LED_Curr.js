
function Calc(typ, id0, id1, id2, rsl_id){
    result = 0;
    a = parseFloat(document.getElementById(id0).value);
    b = parseFloat(document.getElementById(id1).value);
    c = parseFloat(document.getElementById(id2).value);

    switch(typ)
    {
        case 1://電流制限抵抗
        case 2://　　LED電流
            result = (a - b) / c;
            break;
        case 3://　　印可電圧
            result = c * a + b;
            break;
    }
    document.getElementById(rsl_id).value = result;
}
