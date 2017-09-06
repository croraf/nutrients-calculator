

const embedSingleGraph = (embeddingRoot, currency, secondaryCurrency) => {

    const widget = document.createElement('div');
    widget.setAttribute('class', 'coinmarketcap-currency-widget');
    widget.setAttribute('data-currency', currency);
    widget.setAttribute('data-base', 'USD');
    secondaryCurrency && widget.setAttribute('data-secondary', secondaryCurrency); 
    /* widget.style.margin = '5px'; */
    widget.style.backgroundColor = 'white';
    widget.style.borderRadius = '10px';
    widget.style.width = '100%';

    embeddingRoot.appendChild(widget);
};

const embedAltcoinGraphs = () => {

    const embeddingRoot = document.getElementsByClassName('embedded-element');

    const script = document.createElement('script');

    script.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
    script.async = true;

    document.body.appendChild(script);

    embedSingleGraph(embeddingRoot[0], 'bitcoin', null);
    embedSingleGraph(embeddingRoot[1], 'ethereum', 'BTC');
    embedSingleGraph(embeddingRoot[2], 'adx-net', 'BTC');
    embedSingleGraph(embeddingRoot[3], 'bitcoin-cash', 'BTC');
    
};

export {embedAltcoinGraphs};
