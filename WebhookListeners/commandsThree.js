const main = (notification) => {
  try {
    const TrelloNotification = new Notification(notification);
    const comment = TrelloNotification.addedComment();
    if (TrelloNotification.member().notTrellinator()) {
      const mobileNumber = getMobileNumber(TrelloNotification.card().name());
      if (mobileNumber !== undefined) {
        sendSMS(mobileNumber, comment.text());
        ___persistence.put(
          'contact-' + mobileNumber,
          TrelloNotification.card().link()
        );
      } else
        TrelloNotification.card().postComment(
          'Mobile number in card title not valid. Please use the pattern XXX-XXXX-XXXX'
        );
    }
  } catch (error) {
    console.log(error);
  }
};
