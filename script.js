function isWrite(h, c1, c2) {
    if (h.length != 0 && c1.length != 0 && c2.length != 0) {
        return true
    } else {
        return false
    }
}

function isNull(h, c1, c2) {
    if (h >= 0 && c1 >= 0 && c2 >= 0) {
        return true
    } else {
        return false
    }
}

function isIcognit(c1, c2, h) {
    if (c1 == 0) {
        return 1
    } else if (c2 == 0) {
        return 2
    } else if (h == 0) {
        return 3
    } else {
        return false
    }

}

function quantIcog(c1, c2, h) {

    if (c1 == 0) {

        if (c2 == 0 || h == 0) {
            return false
        } else {
            return true
        }
    } else if (c2 == 0) {

        if (h == 0) {
            return false
        } else {
            return true
        }
    } else if (h == 0) {
        return true
    }
}

function calcular() {
    let hipo = document.getElementById('hipo')
    let cat1 = document.getElementById('cat1')
    let cat2 = document.getElementById('cat2')
    let res = document.getElementById('res')

    if (isWrite(hipo.value, cat1.value, cat2.value) && isNull(hipo.value, cat1.value, cat2.value)) {

        if (quantIcog(hipo.value, cat1.value, cat2.value)) {

            if (isIcognit(cat1.value, cat2.value, hipo.value) == 1) {
                const vlrc1 = function (c2, h) {
                    return Math.pow((Math.pow(c2,2) - Math.pow(h,2)),0.5)
                }
                res.innerHTML = `Valor do cateto <sub>1</sub>:  ${vlrc1(Number(hipo.value), Number(cat2.value))}`

            } else if (isIcognit(cat1.value, cat2.value, hipo.value) == 2) {
                const vlrc2 = function (c1, h) {
                    return Math.pow((Math.pow(c1,2) - Math.pow(h,2)),0.5)
                }
                res.innerHTML = `Valor do cateto <sub>2</sub>:  ${vlrc2(Number(hipo.value), Number(cat1.value))}`

            } else if (isIcognit(cat1.value, cat2.value, hipo.value) == 3) {
                const vlrh = function (c1, c2) {
                    return Math.pow((Math.pow(c1,2) + Math.pow(c2,2)),0.5)
                }
                res.innerHTML = `Valor da hipotenusa:  ${vlrh(Number(cat1.value), Number(cat2.value))}`

            } else {
                alert('[Erro] É necessário colocar uma icógnita')
            }
   
        } else {
            alert('[Erro] Digite apenas uma icógnita')
        }

    } else {
        alert('[Erro] Digite os dados corretamente.')
    }

}
