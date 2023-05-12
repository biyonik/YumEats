import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import TopNav from "../Components/TopNavComponent/TopNav.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/TopNav">
                <TopNav/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
