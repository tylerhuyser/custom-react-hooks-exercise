import useGeoLocation from './useGeoLocation'

export default function GeoLocationComponent() {
  const {
    loading,
    error,
    data: {latitude, longitude} ,
  } = useGeoLocation()

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        {latitude} x {longitude}
      </div>
    </>
  )
}