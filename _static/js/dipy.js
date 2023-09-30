function subscriptionClick(email) {
  const recipient = "dipy@python.org";
  const subject = "subscription to dipy mailing list";

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}`;

  window.location.href = mailtoLink;
}
