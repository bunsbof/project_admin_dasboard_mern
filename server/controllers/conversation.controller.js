import asyncHandler from "express-async-handler";

const accessConversation = asyncHandler(async (req, res) => {
  const { userId, isGroupChat } = req.body;
  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  const currentUser = req.user._id
  const foundUser = userId

  // Check if there is an existing chat between the two users or group
  const existingConversation = await Conversation.findOne({
    
  })

});
