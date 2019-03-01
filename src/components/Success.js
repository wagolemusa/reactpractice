import React, { Component }  from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM TO DATABASE OR APLS
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />

                    <h2>Thank You for book booking wait msg to from phone</h2>
                
                    
                </React.Fragment>

            </MuiThemeProvider>
        )
    }
}


export default Success