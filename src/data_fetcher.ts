/**
 * Fetches Thai Railway tracks and stations from OpenStreetMap via Overpass API.
 */
export async function fetchRailwayData() {
    const query = `
        [out:json][timeout:30];
        area["name:en"="Thailand"]->.searchArea;
        (
          way["railway"="rail"](area.searchArea);
          node["railway"~"station|halt"](area.searchArea);
        );
        out body;
        >;
        out skel qt;
    `;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching railway data:", error);
        return null;
    }
}

/**
 * Converts Overpass JSON to a simpler format for 3D processing.
 */
export function processOverpassData(data: any) {
    const nodes = new Map();
    const stations: any[] = [];

    data.elements.forEach((element: any) => {
        if (element.type === 'node') {
            const nodeData = {
                lat: element.lat,
                lon: element.lon,
                id: element.id,
                tags: element.tags || {}
            };
            nodes.set(element.id, nodeData);

            // If it's a station/halt, add to stations list
            if (element.tags && (element.tags.railway === 'station' || element.tags.railway === 'halt')) {
                stations.push(nodeData);
            }
        }
    });

    const processedWays: any[] = [];
    data.elements.forEach((element: any) => {
        if (element.type === 'way' && element.nodes) {
            const coords: number[][] = [];
            const nodeIds: number[] = [];
            element.nodes.forEach((nodeId: number) => {
                const node = nodes.get(nodeId);
                if (node) {
                    coords.push([node.lat, node.lon]);
                    nodeIds.push(nodeId);
                }
            });

            if (coords.length > 1) {
                processedWays.push({
                    id: element.id,
                    nodes: nodeIds,
                    coords: coords,
                    tags: element.tags || {}
                });
            }
        }
    });

    return {
        ways: processedWays,
        nodes: nodes,
        stations: stations
    };
}
