import React, { Component } from 'react';
import './css/Footer.css';

export class Footer extends Component {
    displayName = Footer.name;
    
    render() {
        return (
            <div className="Footer">
                <h3>
                    @{new Date().getFullYear()} Hostaria Germoglio
                    <br/>
                    Zoila Ruth Ratto
                    <br />
                    P.IVA 
                </h3>
            </div>
        );
    }
}