const TrelloNotification = new Notification(notification);
const card = TrelloNotification.addedCard();
var notif = new Notification(posted);
//Remove any labels that were added that
//aren't "Urgent"
try
{
    var label = notif.addedLabel("Urgent");
}

catch(e)
{
    Notification.expectException(InvalidDataException,e);
    notif.card().removeLabel(notif.addedLabel());
}