import React from 'react'
import MUIPlacesAutocomplete, {geocodeBySuggestion} from 'mui-places-autocomplete'

export function SearchAddress({onAddressSelected}) {

    async function getLocation(result) {
        const results = await geocodeBySuggestion(result)
        console.log({results})
        const { geometry, formatted_address } = results[0]

        const coordinates = {
            lat: geometry.location.lat(),
            lng: geometry.location.lng(),
            address: formatted_address
        }
        return coordinates
    }
    async function onSuggestionSelected(item) {
        console.log({item})
        const location = await getLocation(item)
        onAddressSelected({
            location,
            name: item.structured_formatting.main_text,
            address: location.address
        })
    }

    return <div>
        <MUIPlacesAutocomplete
            onSuggestionSelected={onSuggestionSelected}
            renderTarget={() => (<div />)}
        />
    </div>
}