import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    const selectedCapitalId = event.target.value
    this.setState({selectedCapitalId})
  }

  getSelectedCountry = () => {
    const {selectedCapitalId} = this.state
    const selectedCountry = countryAndCapitalsList.find(
      eachObj => eachObj.id === selectedCapitalId,
    ).country
    return selectedCountry
  }

  render() {
    const {selectedCapitalId} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries and Capitals</h1>
          <p className="description">
            <select
              name="capital"
              className="capital"
              onChange={this.onChangeCapital}
              value={selectedCapitalId}
            >
              {countryAndCapitalsList.map(eachObj => (
                <option value={eachObj.id} key={eachObj.id} className="option">
                  {eachObj.capitalDisplayText}
                </option>
              ))}
            </select>
            {'  '}
            is capital of which country?
          </p>
          <p className="country">{this.getSelectedCountry()} </p>
        </div>
      </div>
    )
  }
}

export default Capitals
