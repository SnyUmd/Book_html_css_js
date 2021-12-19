function OrmCalc(typ, id0, id1, rsl_id){
    result = 0;
    a = parseFloat(document.getElementById(id0).value);
    b = parseFloat(document.getElementById(id1).value);
    switch(typ)
    {
        case 1://電流計算
        case 2://抵抗値計算
            // result = document.getElementById(id0).value / document.getElementById(id1).value;
            result = a / b;
            break;
        case 3://電圧計算
            // result = document.getElementById(id0).value * document.getElementById(id1).value;
            result = a * b;
            break;
    }
    //alert(result);
    document.getElementById(rsl_id).value = result;
}

function WattCalc(typ, id0, id1, rsl_id){
    result = 0;
    a = parseFloat(document.getElementById(id0).value);
    b = parseFloat(document.getElementById(id1).value);
    switch(typ)
    {
        case 1://電圧抵抗
            // result = Math.pow(document.getElementById(id0).value,2) / document.getElementById(id1).value;
            result = Math.pow(a, 2) / b;
            break;
        case 2://電圧電流
            // result = document.getElementById(id0).value * document.getElementById(id1).value;
            result = a * b;
            break;
        case 3://電流抵抗
            // result = document.getElementById(id0).value * Math.pow(document.getElementById(id1).value, 2);
            result = a * Math.pow(b, 2);
            break;
    }
    //alert(result);
    document.getElementById(rsl_id).value = result;
}
