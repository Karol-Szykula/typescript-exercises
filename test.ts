type psikus = 1 | 'psikus'

function nazwa(p1: string, p2: number = 2, p3?: boolean): psikus {
    if (p2 != 2) return 'psikus'
    return 1
}

// console.log(nazwa('test', 3, false))


interface NaszTyp {
    nazwa: string
    wiek: number
    dodatkowe?: string
}

interface Zwierzak extends NaszTyp {
    rasa: string
}

interface Animal {
    rasa: string
}

type Hybrid = NaszTyp & Animal

function wypiszWartosci(param: Hybrid): void {
    console.log(param.nazwa)
    console.log(param.wiek)
    console.log(param.dodatkowe)
    console.log(param.rasa)
}
let testowyObiekt = { nazwa: 'testowy', wiek: 1, dodatkowe: '2', rasa: 'husky' }
wypiszWartosci(testowyObiekt)