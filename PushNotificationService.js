import PushNotification from 'react-native-push-notification';

class PushNotificationService {
  configure = () => {
    PushNotification.configure({
      onNotification: function (notification) {
        // Handle the received notification here
        console.log('NOTIFICATION:', notification);
      },
      // Add other configurations as needed
    });
  };

  // Schedule a notification
  scheduleNotification = (title, message, date) => {
    PushNotification.localNotificationSchedule({
      message,
      title,
      date,
      // Add other notification options
    });
  };
}

export const pushNotificationService = new PushNotificationService();
