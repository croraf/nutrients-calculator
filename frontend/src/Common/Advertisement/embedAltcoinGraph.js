

const embedSingleGraph = (embeddingRoot, currency, secondaryCurrency) => {

    const widget = document.createElement('div');
    widget.setAttribute('class', 'coinmarketcap-currency-widget');
    widget.setAttribute('data-currency', currency);
    widget.setAttribute('data-base', 'USD');
    secondaryCurrency && widget.setAttribute('data-secondary', secondaryCurrency); 
    widget.style.margin = '5px';
    widget.style.backgroundColor = 'white';
    widget.style.borderRadius = '10px';

    embeddingRoot.appendChild(widget);
};

const embedAltcoinGraphs = () => {

    const embeddingRoot = document.getElementsByClassName('embedded-element')[0];

    const script = document.createElement('script');

    script.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
    script.async = true;

    embeddingRoot.appendChild(script);

    embedSingleGraph(embeddingRoot, 'bitcoin', null);
    embedSingleGraph(embeddingRoot, 'ethereum', 'BTC');
    embedSingleGraph(embeddingRoot, 'adex', 'BTC');
};

export {embedAltcoinGraphs};
