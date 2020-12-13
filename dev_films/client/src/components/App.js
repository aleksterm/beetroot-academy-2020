import React, {Component} from "react"
import {Route} from 'react-router-dom'
import TopNavigation from '../components/TopNavigation'
import FilmsPage from './FilmsPage'
import HomePage from './HomePage'
import Film from './films/Film'

const AppContext = React.createContext()
export {AppContext}

class App extends Component {
    render() {
        return (
            <div className='ui container'>
                <TopNavigation />
                <Route exact path='/' component={HomePage} />
                <Route path='/films' component={FilmsPage} />
                <Route path='/film/:id' render={props => {
                  return (
                    <Film id={props.match.params.id} />
                  )
                }} />
            </div>
        )
    }
}

export default App
