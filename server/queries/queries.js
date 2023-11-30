
const queries = {
    insertQuery: 'INSERT INTO content_table (post_category, post_tag, post_title, post_content, post_image,image_name, date) VALUES(?,?,?,?,?,?,?)', 
    selectDataQuery: 'SELECT * FROM content_table',
    selectTrainings: "SELECT * FROM content_table WHERE post_category = 'Trainings'",
    selectTransportSafety: "SELECT * FROM content_table WHERE post_category = 'Transport Safety'",
    selectPressRelease: "SELECT * FROM content_table WHERE post_category = 'Press Releases'",
    selectPodCast: "SELECT * FROM content_table WHERE post_category = 'Podcasts'",
    selectMeeting: "SELECT * FROM content_table WHERE post_category = 'Meetings & Events'",
    selectNews: "SELECT * FROM content_table WHERE post_category = 'News'",
    deleteContent: "DELETE FROM content_table WHERE id = ?",

}

module.exports = queries;
