const formatter=Intl.NumberFormat('en-CA', {
    style:'currency',
    currency:'CAD',
})

export const formatMoney = (price)=>{
    return formatter.format(price)
}