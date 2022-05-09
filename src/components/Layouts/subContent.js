import React from 'react'
import Headers from './Header';
import Footers from './Footer';
// import Contents from './components/Layouts/Content';

const DefaultLayout = ViewComponent => {
return class extends React.Component {
  
  render(){
      return(
        <div>
          hlkhdsla
             <ViewComponent />
        </div>
    
      )
   }
  }
}

export default DefaultLayout