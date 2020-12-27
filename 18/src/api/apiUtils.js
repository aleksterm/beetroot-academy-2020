export async function handleResponse(response) {
    if(response.ok) return response.json()
    if(response.status === 400) {
        const error = await response.text()

        throw new Error(error)
    }
}

export function handleError(error) {
    console.error('API call failed. ' + error)
    throw error
}

// eslint-disable-next-line
function sleep(delay = 1000) {
    return new Promise(resolve => setTimeout(resolve, delay))
}
