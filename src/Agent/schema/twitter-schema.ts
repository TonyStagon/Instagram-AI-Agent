// Twitter Comment Schema definition
export const getTwitterCommentSchema = () => {
    return {
      name: "Twitter Comment Generator",
      description: "Generates a thoughtful, engaging reply to a Twitter post",
      parameters: {
        properties: {
          comment: {
            type: "string",
            description: "A thoughtful reply to the given tweet. Maximum 280 characters.",
          }
        },
        required: ["comment"]
      },
      rules: [
        {
          name: "Length",
          description: "The comment must be under 280 characters to fit Twitter's character limit"
        },
        {
          name: "Tone",
          description: "The tone should be professional, thoughtful, and add value to the conversation"
        },
        {
          name: "Relevance",
          description: "The comment should be directly relevant to the content of the original tweet"
        },
        {
          name: "Uniqueness",
          description: "Avoid generic responses that could apply to any tweet"
        },
        {
          name: "Engagement",
          description: "Where appropriate, ask a thoughtful question to encourage further conversation"
        },
        {
          name: "Banned Content",
          description: "Avoid spam-like content, excessive hashtags, promotional material, or controversial topics"
        }
      ]
    };
  };