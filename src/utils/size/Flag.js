export default function getFlag(kind, selectKind, i) {
    const choose = [
        '',
        'https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png',
        'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
        'https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png',
        'https://www.countryflags.com/wp-content/uploads/europe-flag-jpg-xl.jpg',
        'https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png',
        'https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png'
    ]
    let Country = ""
    if (kind === undefined && selectKind !== undefined) {
        Country = (selectKind.split("|")[1]).replace(" ", "").substring(0, 2)
    } else if (kind !== undefined) {
        if (i === 0) {
            kind = kind.region
        }
        Country = kind.substring(0, 2)
    }


    let idx = 0
    switch (Country) {
        case 'KR':
            idx = 1
            break
        case 'US':
            idx = 2
            break
        case 'UK':
            idx = 3
            break
        case 'EU':
            idx = 4
            break
        case 'FR':
            idx = 5
            break
        case 'JP':
            idx = 6
            break
        default:
            idx = 0
    }

    return choose[idx]
}