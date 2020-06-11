import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()



function Context() {
  return (
    <div>
      <UserContext.Provider value ="shohan">
          <ChannelContext.Provider value ="My Channel">
              <ComponentC/>

          </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default Context
