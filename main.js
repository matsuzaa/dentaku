
const display = document.getElementById("display");
//計算用変数
let result = "0";         //計算結果

//0,00 以外の数字キー押下時処理
function buttonNumber(key){
    if(result === "0"){     //記号以外を0の後ろに置かない
        result = key;
    }else{
        result += key;
    }
    display.textContent = result +"　";
}

//0,00キー押下時処理
function buttonZero(key){
    let check = result.substring(result.length - 1);                        //文字列末尾を格納する変数
    let check2 = result.substring(result.length - 2,result.length - 1);     //文字列末尾から2番目を格納する変数
    if(result === "0"){     //表示が0の時には入力せず値を返す
        return;
    }else if(check == "0"&&(check2 == "+"||check == "-"||check == "*"||check == "/")){     //末尾が0かつ末尾から2番目が記号の場合、入力をせず値を返す
        return;
    }else if(check == "+"||check == "-"||check == "*"||check == "/"){       //末尾が計算記号の場合0を入力
        result += "0";
    }else{
        result += key;
    }
    display.textContent = result + "　";
}

//＝以外の記号キー押下時処理
function buttonSymbol(key){
    let check = result.substring(result.length - 1);      //文字列末尾を格納する変数
    if(check == "+"||check == "-"||check == "*"||check == "/"){     //記号が被った場合上書き
        let sequence = result.substring(0,(result.length - 1));
        result = sequence + key;
    }else{
        result += key;
    }
    display.textContent = result +"　";
}

//ACキー押下時処理
function buttonAllclear(){
    result = "0";
    display.textContent = "0　";
}

//=キー押下時処理
function buttonResult(){
    let check = result.substring(result.length - 1);        //文字列末尾を格納する変数
    if(check == "+"||check == "-"||check == "*"||check == "/"){       //末尾が計算記号の場合、記号を削除
        result = result.substring(0,result.length - 1);
    }
    result = new Function("return " + result)();
    result = String(result);
    display.textContent = result + "　";
}
