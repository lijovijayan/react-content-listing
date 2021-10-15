import React, { useCallback, useState } from 'react'
import { debounce } from 'lodash'
const searchIcon = `${process.env.PUBLIC_URL}/images/search.png`
const backIcon = `${process.env.PUBLIC_URL}/images/Back.png`

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
            className={`search-bar flex flex-row items-center ${
                showSearch ? 'show-search' : ''
            }`}
        >
            <img
                className={'back-icon ml-3'}
                src={backIcon}
                alt={'search'}
                draggable={false}
            />
            <div className="flex-1 text-xl text-left flex flex-row justify-between items-center">
                <span className="pl-3 header-title">{title}</span>
                {showSearch && (
                    <input
                        type="text"
                        class="text-base search-input mx-3 px-3 flex-1"
                        onChange={(e) => handler(e.target.value)}
                        placeholder="search here..."
                    />
                )}
            </div>
            <img
                id="searchIcon"
                className={'search-icon mr-3'}
                src={searchIcon}
                alt={'search'}
                draggable={false}
                onClick={onSwitchSearchIcon}
            />
        </div>
    )
}
