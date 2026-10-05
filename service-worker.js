self.addEventListener("push", event => {
  const data = event.data ? event.data.json() : {};

  event.waitUntil(
    self.registration.showNotification(
      data.title || "Greattitude",
      {
        body: data.body || "Notice what's good. Remember how it felt.",
        icon: data.icon,
        badge: data.badge
      }
    )
  );
});
