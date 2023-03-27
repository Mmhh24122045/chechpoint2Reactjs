import React from 'react'
import propTypes from 'prop-types'

const Profile = ({test,fun,children}) => {
    console.log(test);
  return (
    <div>
<h1> {test.fullName}</h1>
<button onClick={() => fun (test.fullName)}> Button </button>
{children}

    </div>
  )

  Profile.propTypes={
    test:propTypes.string
  };
}

export default Profile