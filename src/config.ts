export default {
  NOTION_TOKEN: process.env.NOTION_TOKEN,
  GOOGLE_SHEETS_API_KEY: process.env.GOOGLE_SHEETS_API_KEY,
  ULTRAHUMAN_R1_TOKEN: process.env.ULTRAHUMAN_R1_TOKEN,
  notionDbIds: {
    observations: "71681b1b2a5a46549ac4b2e7009e13d8",
    meditations: "5dbc0d1f7cab4a618295a8f0e11a89b5",
    nodes: "4bcaa64e19504affa3add738ab93d45f",
    women: "ec74816d64f84dc7be63854eb88cb4db",
  },
  anchorNodeIds: {
    meditateEveryDayObj: "0d589e8a12ef4c71a8a87a2492ad0257",
    workoutFiveTimesAWeekObj: "9e7aa2f59e7041718ce19b7f8511269b",
    awarnessObjective: "6492e9e915be40a3a117a01363654402",
  },
  workoutTrackerSheetId: "1_xT1rEBccwWMRKwZoxq6UDyHTYC9EygOU17TzxAsHbw",
  ultrahumanApiBase: "https://api.ultrahuman.com/api/web_v1/ring_insights.json",
  workoutStatsSavePath: "./vault/workouts.json",
  ultrahumanFolderPath: "./vault/ultrahuman",
  ultrahumanSleepAggregatesSavePath: "./vault/ultrahuman/sleep.json",
  meditationAggregatesSavePath: "./vault/meditations.json",
  targetObservationsPerDay: 3,
};
