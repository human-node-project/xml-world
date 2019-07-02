
jeda.module.mod10 = {

    name: "Raw Cytoscape",

    html: `

        <h1>Raw Cytoscape test</h1>

        <div style="width:100%; height:50vh;"></div>
  
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
                            data: { id: 'id1' }
                        },
                        {
                            data: { id: 'Berlingo' }
                        },
                        {
                            data: { id: 'car' }
                        },
                        {
                            data: { id: 'id2' }
                        },
                        {
                            data: { id: 'is a' }
                        },
                        {
                            data: { id: 'id3' }
                        },
                        {
                            data: { id: 'Peugeot' }
                        },
                        {
                            data: { id: 'id4' }
                        },
                        {
                            data: { id: 'id1-0', source: 'id1', target: 'Berlingo' }
                        },
                        {
                            data: { id: 'id1-1', source: 'id1', target: 'car' }
                        },
                        {
                            data: { id: 'id2-0', source: 'id2', target: 'id1' }
                        },
                        {
                            data: { id: 'id2-1', source: 'id2', target: 'is a' }
                        },
    
                        {
                            data: { id: 'id3-0', source: 'id3', target: 'Peugeot' }
                        },
                        {
                            data: { id: 'id3-1', source: 'id3', target: 'car' }
                        },
                        {
                            data: { id: 'id4-0', source: 'id4', target: 'id3' }
                        },
                        {
                            data: { id: 'id4-1', source: 'id4', target: 'is a' }
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
                                'curve-style': 'bezier',
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

