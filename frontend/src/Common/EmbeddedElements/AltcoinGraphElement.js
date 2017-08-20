import React from 'react';
import PropTypes from 'prop-types';

class AltcoinGraphElement extends React.Component {

    componentDidMount () {
        
        const embeddedElement = document.getElementsByClassName('embedded-element')[0];

        const script = document.createElement('script');

        script.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
        script.async = true;

        embeddedElement.appendChild(script);

        let widget = document.createElement('div');
        widget.setAttribute('class', 'coinmarketcap-currency-widget');
        widget.setAttribute('data-currency', 'bitcoin');
        widget.setAttribute('data-base', 'USD');
        /* widget.setAttribute('data-secondary', 'BTC'); */
        widget.style.margin = '5px';
        
        embeddedElement.appendChild(widget);

        widget = document.createElement('div');
        widget.setAttribute('class', 'coinmarketcap-currency-widget');
        widget.setAttribute('data-currency', 'adex');
        widget.setAttribute('data-base', 'USD');
        widget.setAttribute('data-secondary', 'BTC');
        widget.style.margin = '5px';

        embeddedElement.appendChild(widget);
    }

    render () {
        return (
            <div 
                style={{
                    margin: 'auto',
                    marginTop: '20px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }} 
                className='embedded-element' />
        );
    }
}

export {AltcoinGraphElement};
