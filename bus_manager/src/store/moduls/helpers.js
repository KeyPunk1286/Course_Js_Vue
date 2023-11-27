export function isFilterDriver(driver, filter) {
    if (filter.nameDrivers) {
        if (!driver.nameDrivers.toLowerCase().includes(filter.nameDrivers.toLowerCase())) return false
    }
    if (filter.workExperienceMin) {
        if (filter.workExperienceMin > driver.workExperience) return false
    }
    if (filter.workExperienceMax) {
        if (filter.workExperienceMax < driver.workExperience) return false
    }
    return true
}
