import { useState } from 'react'
import { PoliceAPIResponse } from '../../server/utils/types/policeAPI'
import { PostcodeForm } from './components/PostcodeForm'
import { DataTable } from './components/DataTable'
import { Map } from './components/MapComponent'
import { LatLngExpression } from 'leaflet'

const App = () => {
    const [postcode, setPostcode] = useState('')
    const [message, setMessage] = useState('')
    const [data, setData] = useState({} as Record<string, PoliceAPIResponse[]>)
    const [coords, setCoords] = useState([51.505, -0.09] as LatLngExpression)

    return (
        <>
            <div className="Title">
                <h1>Find local crime data</h1>
            </div>
            <div>
                <PostcodeForm
                    postcode={postcode}
                    data={data}
                    setMessage={setMessage}
                    setPostcode={setPostcode}
                    setData={setData}
                    setCoords={setCoords}
                ></PostcodeForm>
            </div>
            <div className="errorMessage">{message}</div>
            <div className="dataTable">
                <DataTable data={data} />
            </div>
            <div id="map">
                <Map coords={coords}></Map>
            </div>
        </>
    )
}

export default App
