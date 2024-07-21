import { useEffect, useState } from "react"

export const useDevice = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)")
    const tabletQuery = window.matchMedia("(min-width: 650px) and (max-width: 1023px)")
    const mobileQuery = window.matchMedia("(max-width: 649px)")

    const updateDeviceType = () => {
      setIsDesktop(desktopQuery.matches)
      setIsTablet(tabletQuery.matches)
      setIsMobile(mobileQuery.matches)
    }

    updateDeviceType()

    desktopQuery.addEventListener("change", updateDeviceType)
    tabletQuery.addEventListener("change", updateDeviceType)
    mobileQuery.addEventListener("change", updateDeviceType)

    return () => {
      desktopQuery.removeEventListener("change", updateDeviceType)
      tabletQuery.removeEventListener("change", updateDeviceType)
      mobileQuery.removeEventListener("change", updateDeviceType)
    }
  }, [])

  return { isDesktop, isTablet, isMobile }
}
