// Load the Vega-Lite specification
fetch('chart-spec.json')
    .then(response => response.json())
    .then(spec => {
        vegaEmbed('#vis', spec, {
            actions: {
                export: true,
                source: false,
                compiled: false,
                editor: false
            },
            renderer: 'canvas'
        }).catch(console.error);
    })
    .catch(error => console.error('Error loading chart:', error));
