const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;  // Can change to any free port

// Path to visits.json file in the /data directory
const visitFile = '../data/visits.json';

// Serve static files
app.use(express.static('public'));

// API endpoint to count visits
app.get('/api/count-visit', (req, res) => {
    // Read the current visit count from visits.json
    fs.readFile(visitFile, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read visit data.' });
        }

        // Parse the data and increment the count
        let visitData = JSON.parse(data);
        visitData.visit_count += 1;

        // Write the updated count back to the file
        fs.writeFile(visitFile, JSON.stringify(visitData), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to update visit data.' });
            }
            res.json({ visit_count: visitData.visit_count.toLocaleString() });
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});