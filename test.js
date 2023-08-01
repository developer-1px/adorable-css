import css from "css"

const c = css.parse(".w\\(48\\)h\\(50\\){width:48)h(50;}")

const d = css.stringify(c, {compress: true})

console.log(d)

// console.log(JSON.stringify(c, null, 2))



