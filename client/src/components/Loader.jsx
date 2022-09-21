import React from 'react'

export default function Loader() {
    return (
        <div class="ui segment" style={{ height: '90vh' }}>
            <div class="ui active inverted dimmer">
                <div class="ui large text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
}
