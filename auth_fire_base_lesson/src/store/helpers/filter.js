// export function isMatchFilter(laptop, filterList, info) {
//     if (info) {
//         if (!laptop.info.toLowerCase().includes(info.toLowerCase())) return false
//     }
//     if (filterList.sellersList) {
//         if (!filterList.sellersList.includes(laptop.sellers)) return false
//     }
//     if (filterList.brandList) {
//         if (!filterList.brandList.includes(laptop.brand)) return false
//     }
//     return true
// }
export function isMatchFilter(laptop, filterList, info) {
    if (info) {
        if (!laptop.info.toLowerCase().includes(info.toLowerCase())) return false
    }
    if (filterList.sellersList && !filterList.sellersList.includes(laptop.sellers)) {
        return false
    }
    if (filterList.brandList && filterList.brandList.length > 0 && !filterList.brandList.includes(laptop.brand)) {
        return false
    }
    return true
}
