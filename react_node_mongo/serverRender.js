import React from 'react'
import ReactDOMServer from 'react-dom/server'


import App from './src/components/App'

import config from './config'
import axios from 'axios'

const serverRender = () =>

    axios.get(`${config.serverURL}/api/contests`)
        .then(resp => {
            ReactDOMServer.renderToString(<App initialContests={resp.data.contests} />
            )
        })

export default serverRender