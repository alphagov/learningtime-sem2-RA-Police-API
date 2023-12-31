import { useState } from 'react'
import { PoliceAPIResponse } from '../../server/utils/types/policeAPI'
import { PostcodeForm } from './components/PostcodeForm'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { DataTable } from './components/DataTable'
import { Map } from './components/MapComponent'
import { LatLngExpression } from 'leaflet'

const App = () => {
    const [message, setMessage] = useState('')
    const [data, setData] = useState({} as Record<string, PoliceAPIResponse[]>)
    const [coords, setCoords] = useState([51.505, -0.09] as LatLngExpression)

    return (
        <>
            <NavBar />
            <div className="content">
                <div className="Title">
                    <h1>Find local crime data</h1>
                </div>
                <PostcodeForm
                    setMessage={setMessage}
                    setData={setData}
                    setCoords={setCoords}
                ></PostcodeForm>
                <div className="errorMessage">{message}</div>
                <DataTable data={data}></DataTable>
                <div
                    className="mapContainer"
                    style={
                        Object.keys(data).length > 0
                            ? {
                                  backgroundColor: '#687ab74d'
                              }
                            : {}
                    }
                >
                    <Map coords={coords} data={data}></Map>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App
