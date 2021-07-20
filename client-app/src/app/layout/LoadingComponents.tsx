import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'


interface Props {
    inverted?: boolean;
    content?: string;

}
const LoadingComponents = ({inverted=true, content="Loading..."}:Props) => {
    return (
        <Dimmer active={true} inverted={inverted}>\
            <Loader content={content}>
            </Loader>
        </Dimmer>
    )
}

export default LoadingComponents
