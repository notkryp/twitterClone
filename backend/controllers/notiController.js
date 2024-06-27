import Notification from "../models/notificationModel.js";

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user._id;

    const notification = await Notification.find({ to: userId }).populate({
      path: "from",
      select: "username profileImg",
    });

    await Notification.updateMany({ to: userId }, { read: true });

    res.status(200).json(notification);
  } catch (error) {
    console.log("Error in getNotifications Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    await Notification.deleteMany({ to: userId });
    res.status(200).json({ message: "Notifications Delete Successfull" });
  } catch (error) {
    console.log("Error in deleteNotifications Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteSingleNotification = async (req, res) => {
  try {
    const userId = req.user._id;
    const notificationId = req.params.id;
    const notification = await Notification.findById(notification);

    if (!notification) {
      return res.status(404).json({ error: "Notification not found" });
    }
    if (notification.to.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ error: "You are not allowed to delete this Notification" });
    }

    await Notification.findByIdAndDelete(notificationId);
    res.status(200).json({ message: "Notification Deleted Successfully" });
  } catch (error) {
    console.log("Error in deleteSingleNotification Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
