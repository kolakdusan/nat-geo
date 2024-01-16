import { createContext, useState } from 'react'

export const NatGeoContext = createContext()

export function NatGeoProvider({ children }) {
  const [showModal, setShowModal] = useState(false)

  const contextValue = {
    showModal,
    setShowModal,
  }

  return (
    <NatGeoContext.Provider value={contextValue}>
      {children}
    </NatGeoContext.Provider>
  )
}
