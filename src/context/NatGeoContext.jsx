import { createContext, useState } from 'react'

export const NatGeoContext = createContext()

export function NatGeoProvider({ children }) {
  const [showModal, setShowModal] = useState(false)
  const [headerPosition, setHeaderPosition] = useState('top')

  const contextValue = {
    showModal,
    setShowModal,
    headerPosition,
    setHeaderPosition,
  }

  return (
    <NatGeoContext.Provider value={contextValue}>
      {children}
    </NatGeoContext.Provider>
  )
}
