import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(palette){
    let newPalette = {
        paletteName: palette.paletteName,
        id: palette.id,
        emoji: palette.emoji,
        colors: {}
    }

    for(let level of levels){
        newPalette.colors[level] = []
    }
    for(let color of palette.colors){
        let shades = generateShades(color.color, 10).reverse()
        for(let shade in shades){
            newPalette.colors[levels[shade]].push({
                name: `${color.name} ${levels[shade]}`,
                id: color.name
                    .toLowerCase()
                    .replace(/ /g, "-"),
                hex: shades[shade],
                rgb: chroma(shades[shade]).css(),
                rgba: chroma(shades[shade])
                    .css()
                    .replace("rgb", "rgba")
                    .replace(")", ",1.0)")
            })
        }
    }
    return newPalette;
}

function getRange(hexColor){
    const end = "#fff"
    return [
        chroma(hexColor)
            .darken(1.4)
            .hex(),
        hexColor,
        end
    ]

}

function generateShades(hexColor, numColors){
    return chroma
        .scale(getRange(hexColor))
        .mode("lab")
        .colors(numColors)
}

export default generatePalette;
