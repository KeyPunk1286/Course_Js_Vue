export function isMatchFilter(driver, searcDriver) {
    if (searcDriver.name) {
        if (!driver.name.toLowerCase().includes(searcDriver.name.toLowerCase())) return false
    }
    if (searcDriver.minAge) {
        if (searcDriver.minAge > driver.experience) return false
    }
    if (searcDriver.maxAge) {
        if (searcDriver.maxAge < driver.experience) return false
    }
    return true
}
