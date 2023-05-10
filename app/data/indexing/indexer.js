import cron from "node-cron"

// Schedule the indexData function to run every day at midnight
cron.schedule('0 0 * * *', async () => {
  try {
    const response = await fetch('/api/data/index')
    if (!response.ok) {
      throw new Error('Failed to index data')
    }
    console.log('Data indexed successfully')
  } catch (error) {
    console.error('Error indexing data:', error)
  }
})