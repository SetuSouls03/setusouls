import React from "react";
import { format, isToday, isYesterday } from "date-fns";

export default function LastSeenFormatter({ lastSeen }) {
  if (!lastSeen) return <span>Last seen: Unknown</span>;

  const date = new Date(lastSeen);

  let text;
  if (isToday(date)) {
    text = `Last seen today at ${format(date, "hh:mm a")}`;
  } else if (isYesterday(date)) {
    text = `Last seen yesterday at ${format(date, "hh:mm a")}`;
  } else {
    text = `Last seen on ${format(date, "MMM d")} at ${format(date, "hh:mm a")}`;
  }

  return <span>{text}</span>;
}
