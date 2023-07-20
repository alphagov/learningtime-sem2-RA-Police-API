import { FormEvent, useState } from 'react'

const App = () => {
    const [postcode, setPostcode] = useState('')
    const [message, setMessage] = useState('')

    const handleForm = async (event: FormEvent) => {
        event.preventDefault()
        try {
            const response = await fetch('http://localhost:5000/api/postcode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ postcode })
            })
            const parsedMessage = await response.json()
            setMessage(JSON.stringify(parsedMessage.data))
        } catch (error) {
            console.error(error)
            setMessage('Whoopsy daisy there was an error lol')
        }
    }

    return (
        <>
            <div>
                <h1>Find local crime data</h1>
            </div>
            <div className="card">
                <form
                    style={{
                        display: 'flex',
                        gap: '5px'
                    }}
                    onSubmit={handleForm}
                >
                    <label>Enter your postcode:</label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={postcode}
                        placeholder="enter your postcode"
                        onChange={(e) => setPostcode(e.target.value)}
                        pattern="([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})"
                    />
                    <br />
                    <button type="submit">Submit your postcode</button>
                </form>
            </div>
            <div>
                <p>{message}</p>
            </div>
        </>
    )
}

export default App
