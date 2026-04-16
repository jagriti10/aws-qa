const axios = require("axios");

const API_URL = "https://1fd2j9dmd0.execute-api.ap-south-1.amazonaws.com";

async function testAPI() {
    try {
        const start = Date.now();

        const response = await axios.get(API_URL);

        const end = Date.now();

        console.log("Status:", response.status);
        console.log("Response:", response.data);
        console.log("Response Time:", end - start, "ms");

        // ✅ VALIDATION (important)
        if (response.status !== 200) {
            throw new Error("API did not return 200");
        }

        if (!response.data.message) {
            throw new Error("Invalid response structure");
        }

        console.log("✅ Test Passed");

    } catch (error) {
        console.error("❌ Test Failed:", error.message);
        process.exit(1);   // VERY IMPORTANT
    }
}

testAPI();