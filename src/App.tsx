import React, { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { getVerifiedData, verifyNumber } from './API'
import Results from './components/Results/Results'
import './style.scss'

const App: React.FC = () => {
  
  const loadingData = {
    carrier: "",
    country_code: "",
    country_name: "",
    country_prefix: "",
    international_format: "",
    line_type: "",
    local_format: "",
    location: "",
    number: "",
    valid: ""
  }

  const recentSearchesArray:any = []
  
  const [verifiedData, setVerifiedData] = useState<any>([])
  const [recentSearches, setRecentSearches] = useState<any>(recentSearchesArray)

  const loaded = useRef(false);

  useEffect(() => {
    if(loaded.current) {
      getVerifiedData().then(responseData => {  
        setVerifiedData(responseData)
        setRecentSearches((recentSearches: any) => [...recentSearches, verifiedData.number]);
      })
    } else {
      loaded.current = true;
    }
  }, [verifiedData.number])

  const { register, handleSubmit} = useForm();
  const onSubmit = (data: PhoneNumberType) => {
    setVerifiedData(loadingData)
    verifyNumber(data);
  }

  const recentSearchesRender = recentSearches.map((search: any) => {
    return(
      <div>
        <p>{search}</p>
      </div>
      
    )
  })

  return (
    <div>
        <div className="header-container">
          <h1>Phone Number Validator</h1>
          <div id="form-div">
          <form id="form" onSubmit={handleSubmit(onSubmit)}>       
            <input
              name="phoneNumber"
              type='text'
              ref={register}
            />
            <button id="form-button" type="submit" form="form" value="Submit">Verify</button>
          </form>
      </div>
      </div>
      <div className="content-container">
        <div className="results-parent">
          <h2>Results</h2>
          <Results
            carrier={verifiedData.carrier}
            country_code={verifiedData.country_code}
            country_name={verifiedData.country_name}
            country_prefix={verifiedData.country_prefix}
            international_format={verifiedData.international_format}
            line_type={verifiedData.international_format}
            local_format={verifiedData.local_format}
            location={verifiedData.location}
            number={verifiedData.number}
            valid={verifiedData.valid}
          />
        </div>
        <div className="spacer">
        </div>
        <div className="recent-parent">
          <h2>Recent Searches</h2>
          <div className="recent-searches">
            {recentSearchesRender}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App