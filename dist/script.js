// dz
//  1
var span1 = document.querySelector('#b1 span');
function n1() {
    var win = parseInt(prompt('я могу посчитать степень 2х'));
    if (win || win == 0) {
        win = Math.pow(win, 2);
        // @ts-ignore
        span1 === null || span1 === void 0 ? void 0 : span1.innerText = 'ответ ' + win;
    }
    else
        // @ts-ignore
        span1 === null || span1 === void 0 ? void 0 : span1.innerText = 'ну ок';
}
// n1()
//  2
function n2() {
    var win = parseInt(prompt('число 1'));
    var sum = win;
    win = parseInt(prompt('число 2'));
    sum = (sum + win) / 2;
    alert(sum);
}
// n2()
//  5
function n3() {
    var num = +prompt('число 1');
    var num22 = +prompt('число 2');
    alert('ответ сумм ' + (num + num22) + '\n ответ минус ' + (num - num22) + '\n ответ деление ' + (num / num22) + '\n ответ умножение ' + (num * num22) + ("\n \u0432\u0432\u0435\u0434\u0435\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 " + num + " " + num22));
}
// n3()
// urok основы str139
//  1
function n4() {
    var n = +prompt('число');
    if (n % 2 != 0)
        n--;
    for (var cycle = 0, num = 2; cycle != n / 2; cycle++, num += 2)
        console.log(num);
}
// n4()
//  3
function n5() {
    var n = +prompt('число');
    for (var num = 1; num != 10; num++) {
        if (n % num == 0)
            console.log(num);
    }
}
// n5()
// urok function str159
// 2
function n6() {
    function fun(num) {
        alert("erer " + num + " ererer");
    }
    fun(prompt("message"));
}
// n6()
// 3
///////////////////////////////////////////////////
// function fun (){
// }
// Log.innerHTML += "<br>inc x = "
////////////////////////////////////////////////
// 5
function n7() {
    function fun(x) {
        if (x >= 1) {
            return 1;
        }
        if (x == 0) {
            return 0;
        }
        return -1;
    }
    alert(fun(prompt("message")));
}
// n7()
// urok all str193
// 1
function n8() {
    function call() {
        var num = 0;
        var sum = "";
        for (var _i = 0, arguments_1 = arguments; _i < arguments_1.length; _i++) {
            var el = arguments_1[_i];
            sum += arguments[num];
            sum += " ";
            num++;
        }
        console.log(sum);
    }
    // @ts-ignore
    call(3, 7, 14, "err", 5);
}
// n8()
// 2
function n9() {
    function call() {
        var num = +prompt("exit==0");
        var min = num;
        var max = num;
        while (num != 0) {
            min = num < min ? num : min;
            max = num > max ? num : max;
            num = +prompt("exit==0");
        }
        return alert("min = " + min + "\nmax = " + max);
    }
    call();
}
// n9()
// 3
function n10() {
    function numbers() {
        var numbers = 0;
        for (var _i = 0, arguments_2 = arguments; _i < arguments_2.length; _i++) {
            var el = arguments_2[_i];
            if (typeof (el) == 'number') {
                numbers++;
            }
        }
        return numbers;
    }
    // @ts-ignore
    console.log('numbers(5,5,5,3)', numbers(5, 5, 5, 3));
    // @ts-ignore
    console.log('numbers(5,a,5,d)', numbers(5, 'a', 5, 'd'));
    // @ts-ignore
    console.log('numbers(q,w,0,true)', numbers('q', 'w', 0, true));
}
// n10()
// 4
function n11() {
    function mean() {
        var i = 0;
        var num = 0;
        for (var _i = 0, arguments_3 = arguments; _i < arguments_3.length; _i++) {
            var el = arguments_3[_i];
            num += arguments[i];
            i++;
        }
        return num /= i;
    }
    // @ts-ignore
    console.log(mean(6, 6, 6, 5));
}
// n11()
// 5
function n12() {
    var memory = 1;
    function doubling(input) {
        if (input % 2 == 0) {
            memory++;
            input /= 2;
            if (input == 2) {
                alert(input + " ^ " + memory);
                return 0;
            }
            else
                doubling(input);
        }
        else {
            alert("\u043E\u0448\u0438\u0431\u043A\u0430");
            return 'ошобка';
        }
    }
    console.log(doubling(prompt("2^x")));
}
// n12()
// 6
function n13() {
    function doubleArray() {
        var str = [];
        for (var i = 0; i != arguments.length; i++) {
            // @ts-ignore
            str.unshift(" " + arguments[i]);
        }
        return str;
    }
    // @ts-ignore
    console.log(doubleArray('eegg', 100, 'upu', 477, 777));
}
// n13()
// pz 5
// 4
function n14() {
    function mig(caterpillar) {
        var castration = 10;
        var castration2 = 1;
        var sum = 0;
        var stop = 1;
        while (stop != 0) {
            sum += stop;
            stop = parseFloat(((caterpillar % castration) / castration2).toFixed(0));
            console.log(stop);
            castration *= 10;
            castration2 *= 10;
        }
        return sum - 1;
    }
    ///////////////////////////////////////////////////////////////////////
    //@ts-ignore
    alert(mig(prompt("введите до 4 чисел")));
}
// n14()
// 5
function n15() {
    var q = prompt();
    var str = "";
    //@ts-ignore
    for (var i = 0; i != q; i++) {
        str += "(";
    }
    //@ts-ignore
    for (var i = 0; i != q; i++) {
        str += ")";
    }
    alert(str);
}
// n15()
