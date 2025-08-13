// utils/dateFormatter.js

/**
 * Convert any Date (or string) to IST manually and format as yyyy-MM-dd 'at' HH.mm
 */
const formatToIST = (date) => {
  if (!date) return null;

  try {
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime())) return null;

    // IST offset: +5 hours 30 minutes
    const IST_OFFSET = 5.5 * 60 * 60 * 1000; // milliseconds
    const istTime = new Date(dateObj.getTime() + IST_OFFSET);

    const yyyy = istTime.getUTCFullYear();
    const mm = String(istTime.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const dd = String(istTime.getUTCDate()).padStart(2, '0');
    const HH = String(istTime.getUTCHours()).padStart(2, '0');
    const MM = String(istTime.getUTCMinutes()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd} at ${HH}.${MM}`;
  } catch (err) {
    console.error('Date formatting error:', err);
    return null;
  }
};

/**
 * Format lastSeen, createdAt, updatedAt for a Mongoose document
 */
const formatUserDates = (user) => {
  if (!user) return user;
  const formatted = user.toObject ? user.toObject() : { ...user };
  return {
    ...formatted,
    lastSeen: formatToIST(formatted.lastSeen),
    createdAt: formatToIST(formatted.createdAt),
    updatedAt: formatToIST(formatted.updatedAt),
  };
};

module.exports = { formatToIST, formatUserDates };
