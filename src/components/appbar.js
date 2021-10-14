import React, { useCallback, useState } from 'react'
import { debounce } from 'lodash'

const searchIcon = `${process.env.PUBLIC_URL}/images/search.png`
export function AppBar({ onChange, title }) {
    const [showSearch, showSearchInput] = useState(false)
    const handler = useCallback(debounce(onChange, 400), [])

    function onSwitchSearchIcon() {
        if (showSearch) {
            onChange('')
        }
        showSearchInput(!showSearch)
    }
    return (
        <div
            class={`search-bar flex flex-row items-center justify-end ${
                showSearch ? 'show-search' : ''
            }`}
        >
            {showSearch ? (
                <input
                    type="text"
                    class="search-input flex-1 mx-3 px-3"
                    onChange={(e) => handler(e.target.value)}
                    placeholder="search here..."
                />
            ) : (
                <div className="text-xl pl-3 w-full text-left justify-start">
                    {title}
                </div>
            )}
            <img
                className={'search-icon mr-3'}
                src={searchIcon}
                alt={'search'}
                draggable={false}
                onClick={onSwitchSearchIcon}
            />
        </div>
    )
}
