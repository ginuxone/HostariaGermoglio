import React, { Component } from 'react';
import './css/Footer.css';

export class Footer extends Component {
    displayName = Footer.name;
    
    render() {
        return (
            <Footer>
                <h3>
                    @{new Date().getFullYear()}Hostaria Germoglio
                </h3>
            </Footer>
        );
    }
}