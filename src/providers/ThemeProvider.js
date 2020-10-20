import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from '../../App';
import {ThemeProvider} from 'styled-components'




 const Theme = props => {
const theme  = {
      colors: {
      primary: '#112235',
      secondary: '#D7711E',
      grey: '#828789'
  
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