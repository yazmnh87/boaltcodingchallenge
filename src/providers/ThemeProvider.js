import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from '../../App';
import {ThemeProvider} from 'styled-components'




 const Theme = props => {
const theme  = {
      colors: {
      primary: '#1C3463',
      secondary: '#D7711E',
  
    },
    fonts:{
      primary: 'Helvetica',
    }
  }


  return (
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    )
  
}

export default Theme;