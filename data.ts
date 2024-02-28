// data.ts
import axios, { AxiosResponse } from 'axios';

interface DataEntry {
  bpm: string;
  spo2: string;
  temp: string;
}

const apiKey = 'Q25236CLWLTTUZPA'; // Replace with your ThingSpeak API key
const channelId = '2280459'; // Replace with your ThingSpeak channel ID

const data: Record<number, DataEntry> = {}; // Data object with entry_id as the key

const fetchData = async () => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=10`
    );

    const { feeds }: { feeds: DataEntry[] } = response.data;

    if (feeds.length > 0) {
      for (const entry of feeds) {
        const { entry_id, field1, field2, field3 } = entry;

        // Store data with entry_id as the key
        data[entry_id] = {
          bpm: field1,
          spo2: field2,
          temp: field3,
        };

        console.log(`Data for entry_id ${entry_id}:`, data[entry_id]);
      }
    } else {
      console.log('No new data available.');
    }
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with an error
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something else went wrong
      console.error('Error:', error.message);
    }
  }
};

export { data, fetchData };
