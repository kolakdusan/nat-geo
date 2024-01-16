import { useContext } from 'react'
import { NatGeoContext } from '../context/NatGeoContext'

export const useNatGeo = () => {
  const context = useContext(NatGeoContext)

  if (context === undefined) {
    throw new Error('useNatGeo() must be used inside a NatGeoProvider')
  }

  return context
}
