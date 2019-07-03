
jeda.module.mod10 = {

    name: "Raw Cytoscape",

    html: `

        <h1>Raw Cytoscape test</h1>

        <div style="width: 90%; margin-left: auto; margin-right: auto; height: 50vh; background-color: #222; border: 1px solid #333;"></div>
  
    `,
    
    code: function(context) {

        var ui = context.getElement();
        var graph = context.getService("graph");



        return {

            init: function() {

                var cy = graph({

                    container: $(ui).find('div'), // container to render in
                    elements: [ // list of graph elements to start with
                        {
                            data: { id: '#1' }
                        },
                        {
                            data: { id: 'Renault' }
                        },
                        {
                            data: { id: 'car' }
                        },
                        {
                            data: { id: '#2' }
                        },
                        {
                            data: { id: 'is a' }
                        },
                        {
                            data: { id: '#3' }
                        },
                        {
                            data: { id: 'Peugeot' }
                        },
                        {
                            data: { id: '#4' }
                        },
                        {
                            data: { id: '#1-0', source: '#1', target: 'Renault' }
                        },
                        {
                            data: { id: '#1-1', source: '#1', target: 'car' }
                        },
                        {
                            data: { id: '#2-0', source: '#2', target: '#1' }
                        },
                        {
                            data: { id: '#2-1', source: '#2', target: 'is a' }
                        },
    
                        {
                            data: { id: '#3-0', source: '#3', target: 'Peugeot' }
                        },
                        {
                            data: { id: '#3-1', source: '#3', target: 'car' }
                        },
                        {
                            data: { id: '#4-0', source: '#4', target: '#3' }
                        },
                        {
                            data: { id: '#4-1', source: '#4', target: 'is a' }
                        },
                    ],
                    style: [ // the stylesheet for the graph
                        {
                            selector: 'node',
                            style: {
                                'text-valign': 'center',
                                'text-halign': 'center',
                                'shape': 'round-rectangle',
                                'background-color': '#333',
                                'overlay-color': '#0F0',
                                'label': 'data(id)',
                                'color': '#ccc',
                                //'text-background-color': '#111',
                                //'text-background-opacity': 0.5,
                                'height': 'label',
                                'width': 'label',
                                'padding': '8px',
                                'font-size': '16px',
                                'font-family': 'asapregular'
                            }
                        },
                        {
                            selector: 'node:selected',
                            style: {
                                'background-color': '#00CC11',
                                'color': '#111'
                            }
                        },
                        {
                            selector: 'edge',
                            style: {
                                'width': 3,
                                'curve-style': 'straight',
                                'line-color': '#999',
                                'target-arrow-color': '#999',
                                'target-arrow-shape': 'triangle',
                                'arrow-scale': 1
                            }
                        }
                    ],
                    layout: {
                        name: 'cola',
                        rows: 1
                    },
                    minZoom: 0.5,
                    maxZoom: 2,
                    wheelSensitivity: 0.25
                });

            }
        };
    }
};

