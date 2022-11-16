const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };


const applyFormatDateStringLocal = (date: string, local = 'en-US'): string => {
  return new Date(date).toLocaleDateString(local, options)
}

export {
  applyFormatDateStringLocal
}